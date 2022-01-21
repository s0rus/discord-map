import React from 'react';
import { ReactComponent as DiscordIcon } from '../../assets/icons/discord-icon.svg';
import { LinkSpan, Wrapper } from './DiscordLoginButton.styles';

const BASE_AUTH_URL =
  process.env.REACT_APP_NODE_ENV === 'developement'
    ? `https://discord.com/api/oauth2/authorize?client_id=${process.env.REACT_APP_DISCORD_CLIENT_ID}&redirect_uri=http%3A%2F%2F192.168.1.50%3A3000%2Flogin&response_type=code&scope=identify%20email%20guilds`
    : process.env.REACT_APP_AUTH_URL;

export const DiscordLoginButton = () => {
  return (
    <Wrapper href={BASE_AUTH_URL}>
      <DiscordIcon />
      <LinkSpan>ZALOGUJ SIĘ</LinkSpan>
    </Wrapper>
  );
};

export default DiscordLoginButton;
