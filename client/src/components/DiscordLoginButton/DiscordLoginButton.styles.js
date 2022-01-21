import styled from 'styled-components';

export const Wrapper = styled.a`
  padding: 4px 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.confirm};
  border-radius: 3px;

  transition: background-color 0.2s ease-in-out;

  svg {
    width: 32px;
    height: auto;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.confirmHover};
  }
`;

export const LinkSpan = styled.span`
  padding-left: 8px;
`;
