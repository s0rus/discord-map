import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Header, LoginContent, Wrapper } from './DiscordLogin.styles';
import DiscordLoginButton from '../../components/DiscordLoginButton/DiscordLoginButton';
import HarambeMLADY from '../../assets/icons/harambemlady.webp';
import { ReactComponent as Arrow } from '../../assets/icons/arrow-right.svg';
import { errorMessages } from '../../utils/errorMessages';
import Button from '../../components/Button/Button';

const BASE_API_URL =
  process.env.REACT_APP_NODE_ENV === 'developement' ? 'http://192.168.1.50:1337' : process.env.REACT_APP_BASE_API_URL;

const DiscordLogin = ({ accessToken, setAccessToken }) => {
  const [isLoading, toggleLoading] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [error, setErorr] = useState(null);

  useEffect(() => {
    if (accessToken) {
      navigate('/');
    }
  }, [accessToken, navigate]);

  const getAuthInfo = async (code) => {
    const authInfoResponse = await axios.get(`${BASE_API_URL}/auth/${code}`);
    if (authInfoResponse.data) {
      return authInfoResponse.data;
    } else throw new Error();
  };

  useEffect(() => {
    const code = searchParams.get('code');
    if (code && !accessToken) {
      const handleAuth = async () => {
        try {
          toggleLoading(true);
          const authInfo = await getAuthInfo(code);
          const { access_token, expires_in } = authInfo;
          document.cookie = `access_token=${access_token}; max-age=${expires_in}; path=/mapagoryli`;
          setAccessToken(access_token);
          toggleLoading(false);
        } catch (error) {
          setErorr(errorMessages.authError);
          toggleLoading(false);
        }
      };

      handleAuth();
    }
  }, [accessToken, navigate, searchParams, setAccessToken]);

  const handleGoBack = async () => {
    await setErorr(null);
    navigate('/login');
  };

  return (
    <Wrapper>
      {error ? (
        <>
          <p>{error}</p>
          <Button isPrimary onClick={handleGoBack}>
            POWRÓT
          </Button>
        </>
      ) : accessToken || isLoading ? null : (
        <Container>
          <Header>
            <div>
              <img src={HarambeMLADY} alt='HarambeMLADY' />
              <h1>MAPA GORYLI</h1>
            </div>
          </Header>
          <LoginContent>
            <h2>Aby się zalogować musisz:</h2>
            <ul>
              <div>
                <li>
                  Należeć do discorda{' '}
                  <a href='https://discord.com/invite/szable' rel='noopener noreferrer' target='_blank'>
                    SZABLE <Arrow />
                  </a>
                </li>
                <li>
                  Mieć rangę co najmniej <span>Dusiciel</span>
                </li>
              </div>
            </ul>
            <DiscordLoginButton />
          </LoginContent>
        </Container>
      )}
    </Wrapper>
  );
};

export default DiscordLogin;
