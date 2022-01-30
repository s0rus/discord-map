import React from 'react';
import { FlyToInterpolator } from 'react-map-gl';
import { easeQuad } from 'd3-ease';
import { ListHeader, UserAvatar, UserListItem, UsersList, UserSubInfo, Wrapper } from './UsersList.styles';
import HarambeEZ from '../../assets/icons/harambeez.webp';

const SecondaryUserInfo = ({ userData, users, setUserDetails, setViewport, currentUser }) => {
  const handleUserDetails = (user) => {
    setUserDetails(user);
    setViewport((prevViewport) => ({
      ...prevViewport,
      longitude: user.position.longitude,
      latitude: user.position.latitude,
      zoom: 10,
      transitionDuration: 1000,
      transitionInterpolator: new FlyToInterpolator(),
      transitionEasing: easeQuad,
    }));
  };

  return (
    <>
      <UsersList>
        <ListHeader>Zapisani goryle:</ListHeader>
        {users.map((user) => (
          <UserListItem key={user.userID.$numberDecimal} onClick={() => handleUserDetails(user)}>
            <UserAvatar
              src={`https://cdn.discordapp.com/avatars/${user?.userID.$numberDecimal}/${
                user?.serverAvatar || user?.avatar
              }.png`}
              alt={`${user?.username} avatar`}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = HarambeEZ;
              }}
            />
            <UserSubInfo>
              <h3>{user.nickname || user.username}</h3>
              <p>Dołączył {`${new Date(user.createdAt).toLocaleDateString()}`}</p>
            </UserSubInfo>
          </UserListItem>
        ))}
      </UsersList>
    </>
  );
};

export default SecondaryUserInfo;
