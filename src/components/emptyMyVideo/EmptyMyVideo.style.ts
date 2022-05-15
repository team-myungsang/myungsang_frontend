import { roundedButtonCss } from '@styles/roundedButton';
import styled from 'styled-components';

export const SEmptyMyVideo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  .desc {
    padding-top: 200px;
    margin-bottom: 30px;

    font-weight: 500;
    font-size: 13px;
    line-height: 20px;

    text-align: center;
    letter-spacing: -0.01em;

    color: #5b5b5b;
  }

  button {
    ${roundedButtonCss};

    width: 158px;

    background-color: #ff613f;
    color: #f0f0f0;

    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
  }
`;
