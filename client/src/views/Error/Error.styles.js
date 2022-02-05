import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;

  a {
    margin-top: 32px;
    padding: 8px 16px;

    border-radius: 3px;
    background-color: ${({ theme }) => theme.colors.confirm};
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme.colors.confirmHover};
    }
  }

  h1 {
    font-size: 16px;
    text-align: center;
  }

  p {
    text-align: center;
    padding: 0 16px;
    margin-bottom: 32px;
  }

  @media all and (min-width: 425px) {
    h1 {
      font-size: 24px;
    }
  }

  @media all and (min-width: 768px) {
    h1 {
      font-size: 42px;
    }
  }
`;
