import { roundedButtonCss } from '@styles/roundedButton';
import { zIndexes } from '@styles/zIndexes';
import styled from 'styled-components';

export const SFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${zIndexes.Footer};

  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 48px;
  background-color: ${p => p.theme.color.black};
  box-shadow: 0px -3px 3px rgba(0, 0, 0, 0.15);

  .footerItem {
    display: flex;
    align-items: center;
    flex-direction: column;

    color: #fff;
    font-weight: 500;
    font-size: 10px;
    line-height: 16px;

    svg {
      width: 22px;
      height: 22px;
      path {
        fill: #fff;
      }
    }

    &.selected {
      color: ${p => p.theme.color.orange};

      path {
        fill: ${p => p.theme.color.orange};
      }
    }
  }

  .empty {
    width: 40px;
  }
`;

export const SUploadFeedButton = styled.div`
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${p => p.theme.color.orange};
  width: 40px;
  height: 40px;
  border-radius: 50%;

  svg {
    width: 22px;
    path {
      fill: #fff;
    }
  }
`;

export const SLoginModalContent = styled.div`
  .desc {
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: ${p => p.theme.color.black};
    margin: 15px 0 34px;
  }
  .loginButton {
    ${roundedButtonCss}
    background-color: ${p => p.theme.color.black};
    color: #ffffff;
    margin-bottom: 10px;
  }

  .closeButton {
    ${roundedButtonCss}
    border: 1px solid #c8c8c8;
    background-color: #fff;
    color: ${p => p.theme.color.black};
  }
`;
