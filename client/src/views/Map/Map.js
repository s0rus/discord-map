import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import CurrentUserInfo from '../../components/CurrentUserInfo/CurrentUserInfo';
import { MapContainer, Wrapper } from './Map.styles';
import { useWindowSize } from '../../utils/useWindowSize';
import Markers from '../../components/Markers/Markers';
import NewMarkerForm from '../../components/NewMarkerForm/NewMarkerForm';
import SecondaryUserInfo from '../../components/SecondaryUserInfo/SecondaryUserInfo';
import AdditionalSidebarInfo from '../../components/AdditionalSidebarInfo/AdditionalSidebarInfo';
import Footer from '../../components/Footer/Footer';
import Loader from '../../components/Loader/Loader';

const BASE_API_URL =
  process.env.REACT_APP_NODE_ENV === 'developement' ? 'http://192.168.1.50:1337' : process.env.REACT_APP_BASE_API_URL;

const Map = ({ accessToken, setAccessToken }) => {
  const windowSize = useWindowSize();
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 51.9194,
    longitude: 20.1451,
    zoom: 6,
  });
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, toggleLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);
  const [newMarker, setNewMarker] = useState(null);
  const [userInputs, setUserInputs] = useState({
    origin: '',
    about: '',
  });

  useEffect(() => {
    if (accessToken) {
      const checkIfGorilla = async () => {
        const response = await axios.get(`${BASE_API_URL}/guilds/${accessToken}`);
        const isGorilla = await response.data.filter((field) => field.id === process.env.REACT_APP_DISCORD_SERVER_ID);
        if (!isGorilla.length)
          navigate('/yikes', {
            state: 'NOT_A_GORILLA',
          });
      };

      const getUserInfo = async () => {
        const response = await axios.get(`${BASE_API_URL}/userinfo/${accessToken}`);
        if (response.data) {
          setCurrentUser({
            ...response.data,
          });
        }
      };

      const getMarkers = async () => {
        const response = await axios.get(`${BASE_API_URL}/api/users`);
        setUsers(response.data);
      };

      const handleLogin = async () => {
        await checkIfGorilla();
        await getUserInfo();
        await getMarkers();
        toggleLoading(false);
      };

      try {
        handleLogin();
      } catch (error) {
        console.log(error);
      }
    } else {
      navigate('/login');
    }
  }, [accessToken, navigate]);

  useEffect(() => {
    setViewport((prevViewport) => ({
      ...prevViewport,
      width: '100%',
      height: '100%',
    }));
  }, [windowSize]);

  const handleNewMarker = ({ lngLat }) => {
    if (!users.filter(({ userID }) => userID.$numberDecimal === currentUser.id).length) {
      const [longitude, latitude] = lngLat;
      setNewMarker({
        longitude,
        latitude,
      });
    }
    return;
  };

  const addNewUser = async (origin, about) => {
    const { id, username, avatar } = currentUser;
    const { longitude, latitude } = newMarker;

    try {
      const { data: addedUser } = await axios.post(`${BASE_API_URL}/api/users`, {
        userID: id,
        username,
        avatar,
        position: { longitude, latitude },
        origin,
        about,
      });

      setUsers((prevUsers) => [...prevUsers, addedUser]);
      setNewMarker(null);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Wrapper>
          <Sidebar>
            <CurrentUserInfo
              currentUser={currentUser}
              accessToken={accessToken}
              setAccessToken={setAccessToken}
              setUsers={setUsers}
              setUserDetails={setUserDetails}
              isUserSaved={users.filter((user) => user.userID.$numberDecimal === currentUser.id).length}
            />
            <AdditionalSidebarInfo
              isUserSaved={users.filter((user) => user.userID.$numberDecimal === currentUser.id).length}
            />
            <SecondaryUserInfo
              userData={userDetails}
              users={users}
              setUserDetails={setUserDetails}
              setViewport={setViewport}
              currentUser={currentUser}
            />
            <Footer />
          </Sidebar>
          <MapContainer>
            <ReactMapGL
              {...viewport}
              onViewportChange={(nextViewport) => setViewport(nextViewport)}
              mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
              mapStyle={process.env.REACT_APP_MAPBOX_STYLES}
              doubleClickZoom={false}
              onDblClick={(eventDetails) => handleNewMarker(eventDetails)}
            >
              <Markers users={users} setUserDetails={setUserDetails} />
              {newMarker ? (
                <NewMarkerForm
                  longitude={newMarker.longitude}
                  latitude={newMarker.latitude}
                  setNewMarker={setNewMarker}
                  addNewUser={(origin, about) => addNewUser(origin, about)}
                  currentUser={currentUser}
                  userInputs={userInputs}
                  setUserInputs={setUserInputs}
                />
              ) : null}
            </ReactMapGL>
          </MapContainer>
        </Wrapper>
      )}
    </>
  );
};

export default Map;
