import styled from 'styled-components';

export const SFeed = styled.div`
  width: 100%;
  height: 380px;
  padding: 20px 0;
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
      img {
        width: 2.5px;
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
    padding: 10px 15px 20px;
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
          margin: 0 4px 3px;
        }
      }
    }
  }
`;
