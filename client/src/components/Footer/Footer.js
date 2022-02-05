import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  width: 100%;
  padding: 8px 8px 16px 8px;

  color: ${({ theme }) => theme.colors.lightGrey};
  text-align: center;

  @media all and (min-width: 2560px) {
    font-size: 20px;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <p>MAPA GORYLI &copy; soruse#1407</p>
    </Wrapper>
  );
};

export default Footer;
