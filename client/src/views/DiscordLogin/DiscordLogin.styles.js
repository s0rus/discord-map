import styled from 'styled-components';
import MapImage from '../../assets/icons/map.webp';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
`;

export const Header = styled.div`
  width: 100%;
  padding: 16px 8px 4px 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: url(${MapImage}) ${({ theme }) => theme.colors.grey};
  background-repeat: no-repeat;
  background-size: 150%;
  background-position: 50%;

  div {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    img {
      width: 64px;
      height: 64px;
    }

    h1 {
      font-size: 36px;
    }
  }
`;

export const LoginContent = styled.div`
  padding: 16px 32px;
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 3px;
  border: 2px solid ${({ theme }) => theme.colors.confirm};

  ul {
    margin-bottom: 16px;

    list-style-type: none;
    position: relative;
    display: flex;
    align-items: center;

    &::before {
      width: 24px;
      height: 36px;
      content: '';
      display: block;

      border-radius: 8px 0 0 8px;
      border-top: 3px solid ${({ theme }) => theme.colors.confirm};
      border-bottom: 3px solid ${({ theme }) => theme.colors.confirm};
      border-left: 3px solid ${({ theme }) => theme.colors.confirm};
    }

    div {
      margin-left: 8px;
      li {
        line-height: 2;
        display: flex;

        span {
          margin-left: 8px;

          color: ${({ theme }) => theme.colors.green};
          display: flex;
          align-items: center;

          &::before {
            content: '';
            width: 8px;
            height: 8px;
            margin-right: 4px;

            display: inline-block;
            background-color: ${({ theme }) => theme.colors.green};
            border-radius: 50%;
          }
        }

        a {
          margin-left: 8px;
          font-weight: bold;

          display: flex;
          align-items: center;
          justify-content: center;

          &:hover {
            text-decoration: underline;
          }

          svg {
            transform: rotate(-45deg);

            path {
              stroke: ${({ theme }) => theme.colors.light};
            }
          }
        }
      }
    }
  }

  h2 {
    margin: 16px 0 4px 0;

    font-size: 20px;
  }
`;
