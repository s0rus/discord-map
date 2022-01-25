const express = require('express');
const cors = require('cors');
const url = require('url');
const axios = require('axios');
const helmet = require('helmet');
require('dotenv').config();
const mongoose = require('mongoose');

const middlewares = require('./middlewares');
const users = require('./api/users');

const app = express();

mongoose.connect(process.env.DB_CONNECTION);

app.use(helmet());
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 1337;
const BASE_URL = 'https://discord.com/api/v8';

app.get('/', (req, res) => {
  res.json({
    message: 'MAPA GORYLI API 🦍',
  });
});

app.get('/auth/:code', async (req, res, next) => {
  if (req.params.code) {
    try {
      const params = new url.URLSearchParams({
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        grant_type: 'authorization_code',
        code: req.params.code.toString(),
        redirect_uri:
          process.env.NODE_ENV === 'production' ? process.env.REDIRECT_URL : `http://192.168.1.50:3000/login`,
      });

      const response = await axios.post(`${BASE_URL}/oauth2/token`, params.toString(), {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
        },
      });
      res.send(response.data);
    } catch (error) {
      next(error);
    }
  }
});

app.get('/guilds/:ACCESS_TOKEN', async (req, res, next) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/@me/guilds`, {
      headers: {
        Authorization: `Bearer ${req.params.ACCESS_TOKEN}`,
      },
    });

    res.json(response.data);
  } catch (error) {
    next(error);
  }
});

app.get('/userinfo/:ACCESS_TOKEN', async (req, res, next) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/@me`, {
      headers: {
        Authorization: `Bearer ${req.params.ACCESS_TOKEN}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    next(error);
  }
});

app.use('/api/users/', users);
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

app.listen(PORT, () => {
  console.log(`Listening on https://mapa-goryli-api.herokuapp.com/:${PORT}`);
});
