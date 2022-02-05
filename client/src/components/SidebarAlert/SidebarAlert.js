import React from 'react';
import { ReactComponent as InfoSquare } from '../../assets/icons/info-square.svg';
import { InformationContainer, Wrapper } from './SidebarAlert.styles';

const SidebarAlert = ({ isUserSaved }) => {
  return (
    <Wrapper>
      {!isUserSaved ? (
        <InformationContainer>
          <InfoSquare />
          <p>Zapisz się, kilkając dwa razy w miejscu, z którego pochodzisz.</p>
        </InformationContainer>
      ) : null}
    </Wrapper>
  );
};

export default SidebarAlert;
