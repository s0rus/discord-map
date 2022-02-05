import styled from 'styled-components';
import { Popup } from 'react-map-gl';
import Button from '../Button/Button';

export const ButtonBar = styled.div`
  padding: 16px 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 0 0 3px 3px;

  @media all and (min-width: 2560px) {
    button {
      font-size: 24px;
    }
  }
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

      @media all and (min-width: 2560px) {
        font-size: 24px;
      }
    }

    input {
      margin-bottom: 6px;
      border-color: ${({ errors, theme }) => errors.origin && theme.colors.error};
    }

    textarea {
      min-height: 100px;
      border-color: ${({ errors, theme }) => errors.about && theme.colors.error};

      @media all and (min-width: 2560px) {
        min-height: 200px;
      }

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

    @media all and (min-width: 2560px) {
      min-width: 450px;
    }
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

  @media all and (min-width: 2560px) {
    padding: 32px 24px;
    font-size: 24px;
  }

  h2 {
    font-size: 24px;
    text-align: center;
    margin-bottom: 16px;

    @media all and (min-width: 2560px) {
      font-size: 32px;
    }
  }

  div {
    background-color: ${({ theme }) => theme.colors.grey};
    border-radius: 3px;
    margin: 8px 0;
    padding: 4px;

    img {
      margin: 0;
    }

    @media all and (min-width: 2560px) {
      padding: 8px;
    }
  }

  label {
    @media all and (min-width: 2560px) {
      font-size: 24px;
    }

    p {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const ErrorWrapper = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-size: 14px;

  @media all and (min-width: 2560px) {
    font-size: 20px;
  }
`;

export const AboutLengthSpan = styled.span`
  color: ${({ theme }) => theme.colors.confirm};
  font-weight: bold;

  @media all and (min-width: 2560px) {
    font-size: 20px;
  }
`;

export const FormButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: width 0.2s ease-in-out;

  width: 100px;

  @media all and (min-width: 2560px) {
    width: 140px;
  }

  &[disabled] {
    width: 130px;

    @media all and (min-width: 2560px) {
      width: 170px;
    }
  }

  svg {
    width: 16px;
    height: 16px;

    margin-right: 8px;
  }
`;
