import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Container, Wrapper } from './Error.styles';
import Susge from '../../assets/icons/susge.webp';
import Button from '../../components/Button/Button';

const Error = ({ accessToken, setAccessToken }) => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    document.cookie = `access_token=${accessToken}; max-age=0; path=/`;
    setAccessToken(null);
    navigate('/login');
  };

  const NotFound = () => {
    return (
      <Container>
        <img src={Susge} alt='Susge' />
        <h1>CZEGO TU SZUKASZ?</h1>
        <Link to='/'>POWRÓT</Link>
      </Container>
    );
  };

  const NotAGorilla = () => {
    return (
      <Container>
        <img src={Susge} alt='Susge' />
        <h1>NAWET NIE JESTEŚ SZABLUCHEM</h1>
        <p>Wejdź na serwer, wbij poziom co najmniej 'Dusiciel' i wróć tutaj.</p>
        <Button isPrimary onClick={handleLogout}>
          POWRÓT
        </Button>
      </Container>
    );
  };

  const UnderLeveled = () => {
    return (
      <Container>
        <img src={Susge} alt='Susge' />
        <h1>CO SIE GAPISZ NOWOBULSKI</h1>
        <p>Wbij poziom co najmniej 'Dusiciel' i wróć tutaj.</p>
        <Button isPrimary onClick={handleLogout}>
          POWRÓT
        </Button>
      </Container>
    );
  };

  const ErrorMessage = () => {
    switch (state) {
      case 'NOT_A_GORILLA':
        return <NotAGorilla />;
      case 'INSUFFICIENT_LEVEL':
        return <UnderLeveled />;
      default:
        return <NotFound />;
    }
  };

  useEffect(() => {
    if (state === 'NOT_A_GORILLA') {
      document.cookie = `access_token=${accessToken}; max-age=0; path=/`;
      setAccessToken(null);
    }
  }, [state, accessToken, setAccessToken]);

  return <Wrapper>{<ErrorMessage />}</Wrapper>;
};

export default Error;
