import React from 'react';
import styled from 'styled-components';
import Harambe from '../../assets/icons/harambe.webp';
import Hyperclap from '../../assets/icons/hyperclap.webp';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 64px;
    height: 64px;
  }
`;

const Loader = () => {
  return (
    <Wrapper>
      <img src={Harambe} alt='Harambe' />
      <img src={Hyperclap} alt='Hyperclap' />
    </Wrapper>
  );
};

export default Loader;
