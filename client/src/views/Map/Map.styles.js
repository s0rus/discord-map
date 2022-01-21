import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const NewGorillaContent = styled.div`
  padding: 16px 12px;

  h2 {
    font-size: 24px;
    text-align: center;
    margin-bottom: 16px;
  }

  div {
    background-color: ${({ theme }) => theme.colors.grey};
    border-radius: 3px;
    margin: 8px 0;
    img {
      margin: 0;
    }
  }
`;
