import React from 'react';
import styled from 'styled-components';
import Kontent from '../../assets/icons/kontent.webp';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;

  text-align: center;

  h2 {
    margin-top: 16px;
  }

  img {
    border-radius: 3px;
  }
`;

const Unavailable = () => {
  return (
    <Wrapper>
      <img src={Kontent} alt='Demonzz piszący na telefonie' />
      <h2>Mapa goryli wstrzymuje swoją działalność na czas nieokreślony.</h2>
    </Wrapper>
  );
};

export default Unavailable;
