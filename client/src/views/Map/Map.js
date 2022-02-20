import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ReactMapGL from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import { MapContainer, Wrapper } from './Map.styles';
import { useWindowSize } from '../../utils/useWindowSize';
import { sufficientRoles } from '../../utils/sufficientRoles';
import Markers from '../../components/Markers/Markers';
import NewMarkerForm from '../../components/NewMarkerForm/NewMarkerForm';
import Loader from '../../components/Loader/Loader';
import { errorMessages } from '../../utils/errorMessages';
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

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
  const [error, setError] = useState(null);

  useEffect(() => {
    if (accessToken) {
      const checkIfGorilla = async () => {
        const isGorillaResponse = await axios.get(`${BASE_API_URL}/guilds/${accessToken}`);
        if (isGorillaResponse) {
          const isGorilla = await isGorillaResponse.data.filter(
            (field) => field.id === process.env.REACT_APP_DISCORD_SERVER_ID
          );
          if (!isGorilla.length) return false;
          return true;
        } else throw new Error('Coś poszło nie tak...');
      };

      const getUserInfo = async () => {
        const userDataResponse = await axios.get(`${BASE_API_URL}/userinfo/${accessToken}`);
        const { data: userData } = userDataResponse;

        if (userData) {
          const guildDataResponse = await axios.get(
            `${BASE_API_URL}/userroles/${process.env.REACT_APP_DISCORD_SERVER_ID}/${userData.id}`
          );
          const { data: guildData } = guildDataResponse;

          if (guildData) {
            await setCurrentUser({ ...userData, nickname: guildData.nick, serverAvatar: guildData.user.avatar });
            //potiential avatar update, addition of server nickname and avatar
            await axios.put(`${BASE_API_URL}/api/users/${userData.id}`, {
              ...userData,
              nickname: guildData.nick,
              serverAvatar: guildData.user.avatar,
            });

            const isLeveled = guildData.roles.some((role) => sufficientRoles.includes(role));
            if (!isLeveled) return false;
            return true;
          }
        }
      };

      const getMarkers = async () => {
        const markersResponse = await axios.get(`${BASE_API_URL}/api/users`);
        const { data: markersData } = markersResponse;
        if (markersResponse) {
          await setUsers(markersData);
        }
      };

      const handleLogin = async () => {
        try {
          if (await checkIfGorilla()) {
            if (await getUserInfo()) {
              await getMarkers();
            } else {
              navigate('/mapagoryli/yikes', { state: 'INSUFFICIENT_LEVEL' });
            }
          } else {
            navigate('/mapagoryli/yikes', {
              state: 'NOT_A_GORILLA',
            });
          }
          toggleLoading(false);
        } catch (error) {
          setError(errorMessages.loginError);
        }
      };

      handleLogin();
    } else {
      navigate('/mapagoryli/login');
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
    const { id, username, nickname, avatar, serverAvatar } = currentUser;
    const { longitude, latitude } = newMarker;

    try {
      const { data: addedUser } = await axios.post(`${BASE_API_URL}/api/users`, {
        userID: id,
        username,
        avatar,
        position: { longitude, latitude },
        origin,
        about,
        nickname,
        serverAvatar,
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
        <>
          <Loader error={error} />
        </>
      ) : (
        <Wrapper>
          <Sidebar
            currentUser={currentUser}
            accessToken={accessToken}
            setAccessToken={setAccessToken}
            users={users}
            setUsers={setUsers}
            setUserDetails={setUserDetails}
            isUserSaved={users.filter((user) => user.userID.$numberDecimal === currentUser.id).length}
            userDetails={userDetails}
            setViewport={setViewport}
          />
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
