import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 16px 16px 0px 16px;
`;

export const InformationContainer = styled.div`
  padding: 8px 4px;

  display: flex;
  align-items: center;

  border-radius: 3px;
  border: 2px solid ${({ theme }) => theme.colors.confirm};
  background-color: ${({ theme }) => theme.colors.dark};

  @media all and (min-width: 2560px) {
    font-size: 24px;
  }

  p {
    margin-left: 8px;
  }

  svg {
    width: 48px;
    height: 48px;
  }
`;
