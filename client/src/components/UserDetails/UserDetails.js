import React from 'react';
import { ReactComponent as Arrow } from '../../assets/icons/arrow-right.svg';
import { ReactComponent as MapPin } from '../../assets/icons/map-pin.svg';
import {
  GoBackButton,
  StyledUserAvatar,
  UserAbout,
  UserHeader,
  UserInfo,
  UserInfoContainer,
  UserName,
  UserOrigin,
  UserOriginContainer,
  Wrapper,
} from './UserDetails.styles';

const UserDetails = ({ userData, setUserDetails }) => {
  const getUserPositionString = ({ longitude, latitude }) => {
    return `${latitude.toFixed(4)} ${latitude > 0 ? 'N' : 'S'} • ${longitude.toFixed(4)} ${longitude > 0 ? 'E' : 'W'}`;
  };

  return (
    <Wrapper>
      <GoBackButton onClick={() => setUserDetails(null)}>
        <Arrow /> Cofnij
      </GoBackButton>
      <UserInfoContainer>
        <UserHeader>
          <StyledUserAvatar
            src={`https://cdn.discordapp.com/avatars/${userData?.userID.$numberDecimal}/${userData?.avatar}.png`}
            alt={`${userData?.username} avatar`}
          />
          <UserName title={userData.username}>{userData.username}</UserName>
        </UserHeader>
        <UserInfo>
          <UserOriginContainer>
            <MapPin />
            <div>
              <UserOrigin title={userData.origin}>{userData.origin}</UserOrigin>
              <p>{getUserPositionString(userData.position)}</p>
            </div>
          </UserOriginContainer>
          <UserAbout>
            <p>{userData.about}</p>
          </UserAbout>
        </UserInfo>
      </UserInfoContainer>
    </Wrapper>
  );
};

export default UserDetails;
