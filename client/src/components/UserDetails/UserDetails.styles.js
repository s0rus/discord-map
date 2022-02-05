import styled from 'styled-components';
import { UserAvatar } from '../CurrentUserInfo/CurrentUserInfo.styles';
import Button from '../Button/Button';

export const Wrapper = styled.div`
  height: 100%;
  margin: 0 16px;
  overflow: hidden;
`;

export const UserInfoContainer = styled.div`
  margin-top: 16px;
`;

export const StyledUserAvatar = styled(UserAvatar)`
  width: 64px;
  height: 64px;
  margin: 0;

  border: 2px solid ${({ theme }) => theme.colors.confirm};
`;

export const UserName = styled.h2`
  margin-left: 8px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  font-size: 24px;
`;

export const UserHeader = styled.div`
  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserInfo = styled.ul`
  padding: 16px;
  margin-top: 16px;

  list-style-type: none;

  background-color: ${({ theme }) => theme.colors.dark};
  border-radius: 3px;

  position: relative;

  &::before {
    width: 16px;
    height: 16px;
    transform: rotate(45deg) translate(-50%, -50%);

    position: absolute;
    top: 2%;
    left: 50%;
    content: '';

    background-color: ${({ theme }) => theme.colors.dark};
  }
`;

export const UserOriginContainer = styled.li`
  padding-bottom: 8px;

  display: flex;
  align-items: center;

  font-size: 24px;
  line-height: 1.2;

  border-bottom: 2px solid ${({ theme }) => theme.colors.grey};

  p {
    color: ${({ theme }) => theme.colors.confirm};
    font-size: 16px;
    font-weight: bold;
  }

  svg {
    min-width: 48px;
    max-width: 48px;
    min-height: 48px;
    max-height: 48px;

    stroke: ${({ theme }) => theme.colors.confirm};

    cursor: pointer;
  }

  div {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const UserOrigin = styled.span`
  color: ${({ theme }) => theme.colors.confirm};
`;

export const UserAbout = styled.li`
  padding: 8px 0;

  font-size: 20px;
  line-height: 1.4;
  text-align: justify;
`;

export const GoBackButton = styled(Button)`
  padding: 4px 32px;

  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.confirm};
  font-weight: bold;
  transition: background-color 0.2s ease-in-out;

  svg {
    width: 36px;
    height: 36px;
    transform: rotate(180deg);
    transition: transform 0.2s ease-in-out;

    path {
      stroke: currentColor;
    }
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.dark};
    text-decoration: none;

    svg {
      transform: rotate(180deg) translateX(20%);
    }
  }
`;
