import React from 'react';
import styled from 'styled-components';
import { ReactComponent as InfoSquare } from '../../assets/icons/info-square.svg';

const Wrapper = styled.div`
  padding: 16px 16px 0px 16px;
`;

const InformationContainer = styled.div`
  padding: 8px 4px;

  display: flex;
  align-items: center;

  border-radius: 3px;
  border: 2px solid ${({ theme }) => theme.colors.confirm};
  background-color: ${({ theme }) => theme.colors.dark};

  p {
    margin-left: 8px;
  }

  svg {
    width: 48px;
    height: 48px;
  }
`;

const AdditionalSidebarInfo = ({ isUserSaved }) => {
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

export default AdditionalSidebarInfo;
