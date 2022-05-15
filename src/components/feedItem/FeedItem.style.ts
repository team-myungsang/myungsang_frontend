import styled from 'styled-components';

export const SFeed = styled.div`
  position: relative;
  width: 100%;
  padding: 20px 0 15px;
  margin-bottom: 10px;
  color: ${p => p.theme.color.black};
  background-color: #fff;

  .feedHeader {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    padding-top: 0px;

    .avatar {
      margin-right: 8px;
      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
    }

    .nickName {
      font-size: 13px;
      line-height: 16px;
      font-weight: 600;
    }

    .moreBtn {
      flex: 1;
      text-align: right;
      svg {
        width: 25px;
        height: auto;
      }
    }
  }

  .feedThumb {
    width: 100%;
    height: 230px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .feedFooter {
    padding: 10px 15px 0px;
    .feedTitle {
      font-weight: 500;
      font-size: 13px;
      line-height: 18px;
      margin-bottom: 8px;
    }
    .feedInfoWrapper {
      display: flex;
      align-items: center;

      .feedInfoItem {
        display: flex;
        align-items: center;
        font-weight: 500;
        font-size: 11px;
        line-height: 16px;
        color: ${p => p.theme.color.gray01};
        &:not(:last-of-type):after {
          content: '';
          display: inline-block;
          width: 2px;
          height: 2px;
          background-color: #c4c4c4;
          margin: 0 4px;
        }
        svg {
          width: 14px;
          height: 14px;
          margin-right: 2px;
        }
        path {
          fill: ${p => p.theme.color.gray01};
        }
      }
    }
  }

  .editButton {
    position: absolute;
    top: 35px;
    right: 15px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(13, 13, 13, 0.7);
    border: 1px solid #3a3a3a;
    border-radius: 50%;
    backdrop-filter: blur(5px);

    svg {
      width: 22px;
      height: 22px;
      path {
        fill: #fff;
      }
    }
  }
`;
