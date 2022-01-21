import React from 'react';
import { FlyToInterpolator } from 'react-map-gl';
import { easeQuad } from 'd3-ease';
import UserDetails from '../UserDetails/UserDetails';
import { ListHeader, UserAvatar, UserListItem, UsersList, UserSubInfo, Wrapper } from './SecondaryUserInfo.styles';

const SecondaryUserInfo = ({ userData, users, setUserDetails, setViewport, currentUser }) => {
  const handleUserDetails = (user) => {
    setUserDetails(user);
    setViewport((prevViewport) => ({
      ...prevViewport,
      longitude: user.position.longitude,
      latitude: user.position.latitude,
      zoom: 7,
      transitionDuration: 1000,
      transitionInterpolator: new FlyToInterpolator(),
      transitionEasing: easeQuad,
    }));
  };

  return (
    <Wrapper>
      {userData ? (
        <UserDetails userData={userData} setUserDetails={setUserDetails} />
      ) : (
        <UsersList>
          <ListHeader>Zapisani goryle:</ListHeader>
          {users.map((user) => (
            <UserListItem key={user.userID.$numberDecimal} onClick={() => handleUserDetails(user)}>
              <UserAvatar
                src={`https://cdn.discordapp.com/avatars/${user?.userID.$numberDecimal}/${user?.avatar}.png`}
                alt={`${user?.username} avatar`}
              />
              <UserSubInfo>
                <h3>{user.username}</h3>
                <p>Dołączył {`${new Date(user.createdAt).toLocaleDateString()}`}</p>
              </UserSubInfo>
            </UserListItem>
          ))}
        </UsersList>
      )}
    </Wrapper>
  );
};

export default SecondaryUserInfo;
