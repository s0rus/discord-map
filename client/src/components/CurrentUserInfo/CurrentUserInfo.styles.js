import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 16px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserAvatar = styled.img`
  width: 48px;
  height: 48px;
  padding: 0;
  margin-top: 8px;

  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.confirm};

  @media all and (min-width: 1440px) {
    width: 64px;
    height: 64px;
  }

  @media all and (min-width: 2560px) {
    width: 100px;
    height: 100px;
  }
`;

export const UserSpecifics = styled.div`
  padding-left: 16px;
  max-width: 250px;

  @media all and (min-width: 2560px) {
    max-width: 400px;
  }
`;

export const UserName = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  h3 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 24px;

    @media all and (min-width: 2560px) {
      font-size: 32px;
    }
  }

  span {
    font-size: 16px;

    @media all and (min-width: 2560px) {
      font-size: 24px;
    }
  }
`;

export const ButtonWrapper = styled.div`
  @media all and (min-width: 2560px) {
    button {
      font-size: 24px;
    }
  }
`;

export const LogOutButton = styled.button`
  padding: 4px 8px;

  appearance: none;
  background: ${({ theme }) => theme.colors.confirm};
  border: none;
  border-radius: 2px;
  cursor: pointer;
  position: relative;

  img {
    width: 24px;
    height: auto;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    opacity: 0;
    transition: opacity 0.2s, background-color 0.2s;

    @media all and (min-width: 2560px) {
      width: 32px;
    }
  }

  span {
    transition: opacity 0.2s;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.confirmHover};
  }

  &:hover img {
    opacity: 1;
  }

  &:hover span {
    opacity: 0;
  }

  &:focus img {
    opacity: 1;
  }

  &:focus span {
    opacity: 0;
  }

  &:last-child {
    img {
      transform: translate(-50%, -45%);
    }
  }
`;

export const PeaceOutButton = styled(LogOutButton)`
  margin-left: 8px;
`;
