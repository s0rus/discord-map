import styled from 'styled-components';

export const Wrapper = styled.aside`
  min-width: 420px;
  max-width: 420px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: column nowrap;

  background-color: ${({ theme }) => theme.colors.grey};

  @media all and (min-width: 1440px) {
    min-width: 480px;
    max-width: 480px;
  }

  @media all and (min-width: 2560px) {
    min-width: 600px;
    max-width: 600px;
  }
`;

export const Logo = styled.h2`
  width: 100%;
  padding: 0 16px;

  font-size: 42px;
  text-align: center;

  @media all and (min-width: 1440px) {
    font-size: 48px;
  }

  @media all and (min-width: 2560px) {
    font-size: 56px;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  margin: 16px 0 8px 0;
  padding-top: 16px;

  overflow-y: auto;

  border-top: 4px dashed ${({ theme }) => theme.colors.dark};

  &::-webkit-scrollbar {
    width: 8px;
    cursor: default !important;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.grey};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.confirm};
    border-radius: 20px;
  }
`;
