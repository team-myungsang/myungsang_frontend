import styled from 'styled-components';

export const SModalLayout = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: rgba(0, 0, 0, 0.25);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SModalBox = styled.div`
  height: 138px;
  width: 242px;
  background: white;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  > div {
    > input {
      font-family: Pretendard;
      font-size: 13px;
      font-weight: 500;
      padding: 5px 30px;
      border-radius: 50px;
      outline: none;
      margin: 2.5px;
      &:first-child {
        border: 1px solid #cecece;
        background: white;
      }
      &:last-child {
        border: none;
        background: #0d0d0d;
        color: white;
      }
    }
  }
`;
