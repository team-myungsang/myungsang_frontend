import styled from 'styled-components';

export const SHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: 0.3s;
  transform: translateY(0px);
  &.hide {
    transform: translateY(-55px);
  }

  .top {
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${p => p.theme.color.black};
    backdrop-filter: blur(20px);
    .logo {
      width: 95px;
    }
  }
  .category {
    width: 100%;
    height: 48px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    overflow-x: auto;
    background-color: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(5px);

    .categoryItem {
      color: #fff;
      padding: 5px 12px;
      font-size: 12px;
      font-weight: 600;
      line-height: 14px;
      word-break: keep-all;
      &:not(:last-of-type) {
        margin-right: 10px;
      }

      &.selected {
        color: ${p => p.theme.color.black};
        background-color: #fff;
        border-radius: 15px;
      }
    }
  }
`;
