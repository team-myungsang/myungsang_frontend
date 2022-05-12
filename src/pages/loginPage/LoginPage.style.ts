import { roundedButtonCss } from '@styles/roundedButton';
import styled from 'styled-components';

export const SLoginPageWrapper = styled.div`
  padding: 15px;
  color: ${p => p.theme.color.black};

  label {
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;

    margin-bottom: 10px;
  }

  input {
    width: 100%;
    height: 2rem;
    padding: 10px;
    outline: 0;
    border: 0;
    border-bottom: 1px solid ${p => p.theme.color.black};

    font-weight: 400;
    font-size: 13px;
    line-height: 13px;

    &:placeholder-shown {
      border-bottom: 1px solid #c8c8c8;
    }
  }

  button {
    ${roundedButtonCss}
    margin-top: 1rem;
    color: #fff;
    background-color: ${p => p.theme.color.orange};

    &:disabled {
      background-color: #9e9e9e;
    }
  }

  a {
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;
    text-align: center;
    letter-spacing: -0.03em;
  }

  .backButton {
    width: 24px;
    height: 24px;
  }

  .logoWrapper {
    margin: 54px 0 10px;
    text-align: center;
  }

  .logo {
    margin: 0 auto;
    width: 133px;
    height: 21px;
  }

  .subTitle {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #5b5b5b;

    text-align: center;

    margin-bottom: 44px;
  }

  .inputWrapper {
    position: relative;
    margin: 10px 0 30px;

    svg {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);

      width: 17px;
      height: 17px;
    }
  }

  .signupWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;

    svg {
      margin-left: 5px;
      width: 13px;
      height: 13px;
    }
  }
`;
