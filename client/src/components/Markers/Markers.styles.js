import styled from 'styled-components';
export const MarkerImage = styled.img`
  width: 48px;
  height: 48px;

  background-color: ${({ theme }) => theme.colors.dark};
  border: 2px solid ${({ theme }) => theme.colors.light};
  border-radius: 50%;
  cursor: pointer;
`;
