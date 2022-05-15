import { roundedButtonCss } from '@styles/roundedButton';
import styled from 'styled-components';

export const SUploadPage = styled.div`
  background-color: #000;

  .uploadPage__Header {
    padding: 15px;
  }

  form {
    padding: 30px 15px;
    background-color: #fff;

    label {
      font-weight: 600;
      font-size: 13px;
      line-height: 16px;
    }

    input,
    textarea {
      margin-top: 10px;
      margin-bottom: 20px;
      padding: 8px 15px;
      width: 100%;
      border: 1px solid #eaeaea;
      outline: 0;

      font-weight: 400;
      font-size: 13px;
      line-height: 22px;
      letter-spacing: -0.03em;
      color: #5b5b5b;
    }

    textarea {
      min-height: 120px;
      resize: none;
    }

    button {
      margin-top: 40px;
      ${roundedButtonCss};
      background-color: ${p => p.theme.color.orange};

      color: #fff;

      &:disabled {
        background-color: #9e9e9e;
      }
    }

    #video,
    #thumbnail {
      display: none;
    }

    .thumbnailBox {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 10px;
      width: 158px;
      height: 112px;
      background-color: #fff6f4;
      border: 1px dashed #ff876c;
      margin-bottom: 20px;

      svg {
        width: 22px;
        height: 22px;
      }

      img {
        width: auto;
        height: 100%;
      }

      &.isImg {
        border: none;
        background-color: #000;
        svg {
          display: none;
        }
      }
    }

    .videoBox {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 164px;
      margin-top: 10px;
      margin-bottom: 20px;

      background-color: #fff6f4;
      border: 1px solid #ff876c;

      svg {
        width: 54px;
        height: 54px;
      }

      &.isFile {
        border: 0;
        svg {
          display: none;
        }
        video {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .backButton {
    width: 24px;
    height: 24px;

    path {
      fill: #fff;
    }
  }

  .title {
    font-weight: 600;
    font-size: 22px;
    line-height: 31px;
    color: #fff;
  }

  .categoriesWrapper {
    margin-top: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;

    .categoryItem {
      padding: 5px 12px;
      border-radius: 10px;
      border: 1px solid #eaeaea;
      font-weight: 600;
      font-size: 12px;
      line-height: 14px;
      word-break: keep-all;

      &.selected {
        border: none;
        border: 1px solid #ff613f;
        background-color: #ff613f;
        color: #fff;
      }
    }
  }
`;
