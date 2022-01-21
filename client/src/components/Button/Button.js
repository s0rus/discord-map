import styled from 'styled-components';
import React from 'react';

const StyledButton = styled.button`
  background-color: ${({ theme, isPrimary }) => (isPrimary ? theme.colors.confirm : 'transparent')};
  color: ${({ theme }) => theme.colors.light};
  border: 0;
  padding: 8px 16px;
  border-radius: 3px;
  appearance: none;
  cursor: pointer;

  &:hover {
    text-decoration: ${({ isPrimary }) => (isPrimary ? 'none' : 'underline')};
    background-color: ${({ isPrimary, theme }) => (isPrimary ? theme.colors.confirmHover : 'transparent')};
  }
`;

export const Button = (props) => {
  return (
    <StyledButton isPrimary={props.isPrimary} {...props}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
