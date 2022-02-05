import styled from 'styled-components';
import ArrowRight from '../../assets/icons/arrow-right.svg';

export const Wrapper = styled.div`
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

export const UserAvatar = styled.img`
  width: 42px;
  height: 42px;

  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.confirm};

  @media all and (min-width: 2560px) {
    width: 64px;
    height: 64px;
  }
`;

export const UsersList = styled.ul`
  width: 100%;
  padding: 0 16px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  list-style-type: none;
`;

export const UserListItem = styled.li`
  padding: 8px 16px;

  display: flex;
  align-items: center;
  overflow: hidden;

  border-radius: 0 3px 3px 0;
  transition: background-color 0.2s;

  border-left: 4px solid ${({ theme }) => theme.colors.confirm};
  color: ${({ theme }) => theme.colors.confirm};

  position: relative;

  &:hover {
    background-color: ${({ theme }) => theme.colors.dark};
    cursor: pointer;
  }

  &::after {
    content: '';

    width: 32px;
    height: 32px;

    position: absolute;
    top: 50%;
    left: 90%;
    transform: translate(-50%, -50%);

    background-image: url(${`${ArrowRight}`});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const ListHeader = styled.h2`
  padding-bottom: 16px;
  padding-left: 8px;

  border-left: 4px solid ${({ theme }) => theme.colors.confirm};

  @media all and (min-width: 2560px) {
    font-size: 32px;
  }
`;

export const UserSubInfo = styled.div`
  width: 100%;

  padding-left: 8px;
  margin-top: 4px;
  line-height: 1.2;

  h3 {
    display: inline-block;
    width: 75%;

    color: ${({ theme }) => theme.colors.light};
    font-size: 16px;
    font-weight: bold;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    @media all and (min-width: 2560px) {
      font-size: 24px;
    }
  }

  p {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.lightGrey};

    @media all and (min-width: 2560px) {
      font-size: 16px;
    }
  }
`;
