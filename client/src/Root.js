import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import { theme } from './assets/styles/Theme';
import { useWindowSize } from './utils/useWindowSize';
import DiscordLogin from './views/DiscordLogin/DiscordLogin';
import Error from './views/Error/Error';
import Map from './views/Map/Map';
import MobileUnsuported from './views/MobileUnsupported/MobileUnsuported';
import Unavailable from './views/Unavailable/Unavailable';

const Root = () => {
  const [accessToken, setAccessToken] = useState(document.cookie.match('access_token')?.input.split('=')[1]);
  const { width } = useWindowSize();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route
            path='/'
            element={width < 0 ? <Map accessToken={accessToken} setAccessToken={setAccessToken} /> : <Unavailable />}
          />
          <Route
            path='/login'
            element={
              width > 768 ? (
                <DiscordLogin accessToken={accessToken} setAccessToken={setAccessToken} />
              ) : (
                <MobileUnsuported />
              )
            }
          />
          <Route path='*' element={<Error accessToken={accessToken} setAccessToken={setAccessToken} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default Root;
