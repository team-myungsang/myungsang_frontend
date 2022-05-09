import styled from 'styled-components';

export const SFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

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
  }

  .empty {
    width: 40px;
  }
`;

export const SAddVideoButton = styled.div`
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
