import React, { useMemo } from 'react';
import { Marker } from 'react-map-gl';
import { MarkerImage } from './Markers.styles';
import HarambeEZ from '../../assets/icons/harambeez.webp';

const Markers = ({ users, setUserDetails }) => {
  return useMemo(
    () =>
      users.map((user) => (
        <React.Fragment key={user.userID.$numberDecimal}>
          <Marker
            key={user._id}
            longitude={user.position.longitude}
            latitude={user.position.latitude}
            offsetLeft={-20}
            offsetTop={-20}
            onClick={() => setUserDetails(user)}
          >
            <MarkerImage
              src={`https://cdn.discordapp.com/avatars/${user?.userID.$numberDecimal}/${user?.avatar}.png`}
              alt='avatar'
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = HarambeEZ;
              }}
            />
          </Marker>
        </React.Fragment>
      )),
    [users, setUserDetails]
  );
};

export default Markers;
