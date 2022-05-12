import { roundedButtonCss } from '@styles/roundedButton';
import styled from 'styled-components';

export const SSelectUploadTypeOfFeedModalContent = styled.div`
  padding: 15px 0;
  .title {
    text-align: center;
    font-weight: 600;
    font-size: 15px;
    line-height: 16px;

    margin-bottom: 30px;
  }

  .uploadButtonsWrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;

    gap: 30px;

    svg {
      width: 22px;
      height: 22px;
      path {
        fill: white;
      }
    }

    .iconWrapper {
      width: 54px;
      height: 54px;
      background-color: black;
      border-radius: 50%;
      padding: 16px;
      margin-bottom: 15px;
    }

    .divider {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      height: 100%;
      width: 1px;
      background-color: #dfdfdf;
    }

    .uploadButton {
      display: flex;
      flex-direction: column;
      align-items: center;

      font-weight: 500;
      font-size: 13px;
      line-height: 16px;
      width: 100px;
    }
  }

  button {
    ${roundedButtonCss}

    background-color: #fff;
    border: 1px solid #c8c8c8;

    font-weight: 500;
    font-size: 14px;
    line-height: 16px;

    margin-top: 26px;
  }
`;
