import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import { theme } from './assets/styles/Theme';
import DiscordLogin from './views/DiscordLogin/DiscordLogin';
import Error from './views/Error/Error';
import Map from './views/Map/Map';

const Root = () => {
  const [accessToken, setAccessToken] = useState(document.cookie.match('access_token')?.input.split('=')[1]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/' element={<Map accessToken={accessToken} setAccessToken={setAccessToken} />} />
          <Route path='/login' element={<DiscordLogin accessToken={accessToken} setAccessToken={setAccessToken} />} />
          <Route path='*' element={<Error accessToken={accessToken} setAccessToken={setAccessToken} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default Root;
