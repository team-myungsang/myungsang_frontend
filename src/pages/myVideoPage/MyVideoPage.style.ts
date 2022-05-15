import { roundedButtonCss } from '@styles/roundedButton';
import styled from 'styled-components';

export const SMyVideoPageWrapper = styled.div`
  background-color: #f5f5f5;

  h1 {
    margin: 0;
    padding: 30px 15px 10px;
    background-color: #fff;
    font-weight: 600;
    font-size: 22px;
    line-height: 16px;
  }
`;

export const SEditFeedModalContent = styled.div`
  button {
    ${roundedButtonCss}
  }
  svg {
    width: 20px;
    height: 20px;
    path {
      fill: #fff;
    }
  }

  .editButton,
  .deleteButton {
    background-color: ${p => p.theme.color.black};

    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #fff;

    margin-bottom: 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;

    & div {
      width: 20px;
    }
  }

  .cancelButton {
    margin-top: 10px;
    background-color: #fff;
    border: 1px solid #c8c8c8;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
  }
`;
