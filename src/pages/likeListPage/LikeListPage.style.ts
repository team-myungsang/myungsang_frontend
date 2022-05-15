import styled from 'styled-components';

export const SLikeListPage = styled.div`
  margin-bottom: 50px;

  .likeList__Header {
    padding: 30px 15px;
    h1 {
      margin: 0;
      font-weight: 600;
      font-size: 22px;
      line-height: 16px;
    }
    .desc {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 10px;
      font-weight: 500;
      font-size: 13px;
      line-height: 10px;

      .videoCount {
        font-weight: 500;
        font-size: 11px;
        line-height: 14px;
        color: #5b5b5b;
      }
    }
  }
`;
