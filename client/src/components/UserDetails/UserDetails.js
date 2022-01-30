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
import HarambeEZ from '../../assets/icons/harambeez.webp';
import { FlyToInterpolator } from 'react-map-gl';
import { easeQuad } from 'd3-ease';

const UserDetails = ({ userData, setUserDetails, setViewport }) => {
  const { longitude, latitude } = userData.position;

  const handleCenterOnUser = () => {
    setViewport((prevViewport) => ({
      ...prevViewport,
      longitude,
      latitude,
      zoom: 10,
      transitionDuration: 1000,
      transitionInterpolator: new FlyToInterpolator(),
      transitionEasing: easeQuad,
    }));
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
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = HarambeEZ;
            }}
          />
          <UserName title={userData.username}>{userData.username}</UserName>
        </UserHeader>
        <UserInfo>
          <UserOriginContainer>
            <MapPin onClick={handleCenterOnUser} />
            <div>
              <UserOrigin title={userData.origin}>{userData.origin}</UserOrigin>
              <p>
                {`${latitude.toFixed(4)}`}&deg;{` ${latitude > 0 ? 'N' : 'S'}`}
                {` • ${longitude.toFixed(4)}`}&deg;{` ${longitude > 0 ? 'E' : 'W'}`}
              </p>
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
