import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.aside`
  min-width: 420px;
  max-width: 420px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: column nowrap;

  background-color: ${({ theme }) => theme.colors.grey};
`;

const Logo = styled.h2`
  width: 100%;
  padding: 0 16px;

  font-size: 42px;
  text-align: center;
`;

const Sidebar = ({ children }) => {
  return (
    <Wrapper>
      <Logo>MAPA GORYLI</Logo>
      {children}
    </Wrapper>
  );
};

export default Sidebar;
