import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sadge from '../../assets/icons/sadge.webp';
import PeepoSad from '../../assets/icons/peeposad.webp';
import {
  LogOutButton,
  UserAvatar,
  UserSpecifics,
  UserName,
  Wrapper,
  ButtonWrapper,
  PeaceOutButton,
} from './CurrentUserInfo.styles';
import axios from 'axios';
import HarambeEZ from '../../assets/icons/harambeez.webp';

const BASE_API_URL =
  process.env.REACT_APP_NODE_ENV === 'developement' ? 'http://192.168.1.50:1337' : process.env.REACT_APP_BASE_API_URL;

const CurrentUserInfo = ({ currentUser, accessToken, setAccessToken, setUsers, setUserDetails, isUserSaved }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    document.cookie = `access_token=${accessToken}; max-age=0; path=/mapagoryli`;
    setAccessToken(null);
    navigate('/mapagoryli/login');
  };

  const handlePeaceOut = async () => {
    const { id } = currentUser;
    await axios.delete(`${BASE_API_URL}/api/users/${id}`);

    setUsers((prevUsers) => prevUsers.filter(({ userID }) => userID.$numberDecimal !== id));
    setUserDetails(null);
  };

  return (
    <Wrapper>
      <UserAvatar
        src={`https://cdn.discordapp.com/avatars/${currentUser?.id}/${
          currentUser?.serverAvatar || currentUser?.avatar
        }.jpg`}
        alt={`${currentUser?.username} avatar`}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = HarambeEZ;
        }}
      />
      <UserSpecifics>
        <UserName>
          <h3>{currentUser?.nickname || currentUser?.username}</h3>
          <span>#{currentUser?.discriminator}</span>
        </UserName>
        {accessToken && setAccessToken ? (
          <ButtonWrapper>
            <LogOutButton onClick={handleLogout}>
              <span>WYLOGUJ SIĘ</span>
              <img src={Sadge} alt='Sadge' />
            </LogOutButton>
            {isUserSaved ? (
              <PeaceOutButton onClick={handlePeaceOut}>
                <span>WYPISZ SIĘ</span>
                <img src={PeepoSad} alt='PeepoSad' />
              </PeaceOutButton>
            ) : null}
          </ButtonWrapper>
        ) : null}
      </UserSpecifics>
    </Wrapper>
  );
};

export default CurrentUserInfo;
