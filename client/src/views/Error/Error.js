import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Wrapper } from './Error.styles';
import Susge from '../../assets/icons/susge.webp';

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
      <p>Wejdź na serwer, wbij poziom większy niż nowobuła i wróć tutaj.</p>
      <Link to='/'>POWRÓT</Link>
    </Container>
  );
};

const Error = ({ accessToken, setAccessToken }) => {
  const { state } = useLocation();

  useEffect(() => {
    if (state === 'NOT_A_GORILLA') {
      document.cookie = `access_token=${accessToken}; max-age=0; path=/`;
      setAccessToken(null);
    }
  }, [state, accessToken, setAccessToken]);

  return <Wrapper>{state === 'NOT_A_GORILLA' ? <NotAGorilla /> : <NotFound />}</Wrapper>;
};

export default Error;
