import styled from 'styled-components';
import { Popup } from 'react-map-gl';

export const ButtonBar = styled.div`
  padding: 16px 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 0 0 3px 3px;
`;

export const FormWrapper = styled.form`
  label {
    display: block;
    margin: 20px 0;

    input,
    textarea {
      width: 100%;
      padding: 4px 8px;

      font-size: 16px;
      color: ${({ theme }) => theme.colors.light};
      background-color: transparent;
      border: 2px solid ${({ theme }) => theme.colors.grey};
      border-radius: 3px;
      appearance: none;
      resize: none;

      &:focus {
        background-color: ${({ theme }) => theme.colors.grey};
        border-color: ${({ theme }) => theme.colors.confirm};
        outline: none;
      }
    }

    input {
      margin-bottom: 6px;
      border-color: ${({ errors, theme }) => errors.origin && theme.colors.error};
    }

    textarea {
      min-height: 100px;
      border-color: ${({ errors, theme }) => errors.about && theme.colors.error};

      &::-webkit-scrollbar {
        width: 8px;
        cursor: default !important;
      }

      &::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.colors.grey};
      }

      &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.confirm};
        border-radius: 20px;
      }
    }
  }

  label:last-child {
    margin-bottom: 0;
  }

  button {
    display: none;
  }
`;

export const NewGorillaForm = styled(Popup)`
  div.mapboxgl-popup-content {
    border-radius: 3px;
    padding: 0;
    min-width: 300px;
    background-color: ${({ theme }) => theme.colors.dark};
    cursor: default;
  }

  &.mapboxgl-popup-anchor-top .mapboxgl-popup-tip,
  &.mapboxgl-popup-anchor-top-left .mapboxgl-popup-tip {
    border-bottom-color: ${({ theme }) => theme.colors.dark};
  }

  &.mapboxgl-popup-anchor-left .mapboxgl-popup-tip {
    border-right-color: ${({ theme }) => theme.colors.dark};
  }

  &.mapboxgl-popup-anchor-right .mapboxgl-popup-tip {
    border-left-color: ${({ theme }) => theme.colors.dark};
  }

  &.mapboxgl-popup-anchor-top-right .mapboxgl-popup-tip {
    border-bottom-color: ${({ theme }) => theme.colors.dark};
  }

  &.mapboxgl-popup-anchor-bottom-right .mapboxgl-popup-tip,
  &.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip,
  &.mapboxgl-popup-anchor-bottom-left .mapboxgl-popup-tip {
    border-top-color: ${({ theme }) => theme.colors.grey};
  }
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

  label {
    p {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const ErrorWrapper = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-size: 14px;
`;

export const AboutLengthSpan = styled.span`
  color: ${({ theme }) => theme.colors.confirm};
  font-weight: bold;
`;
