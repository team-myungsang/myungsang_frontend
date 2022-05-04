import styled from 'styled-components';

export const SHeader = styled.div<{ step: number }>`
  > .backBtn {
    margin: 18px;
    cursor: pointer;
  }
  > .bar {
    height: 2px;
    background: #dfdfdf;
    > .per {
      width: ${props => (props.step / 3) * 100}%;
      height: 2px;
      background: #ff613f;
    }
  }
`;

export const SSignUpModalOuter = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  font-weight: 400;
  z-index: 1;
`;

export const SSignUpModal = styled.div`
  position: fixed;
  width: 330px;
  height: 115px;
  left: calc(50% - 331px / 2);
  top: calc(50% - 115px / 2 - 0.5px);
  background-color: white;
  border-radius: 7px;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
  }
`;

export const SSignUpModalYesOrNo = styled.div`
  > button {
    padding: 0;
    background: white;
    outline: none;
    border: none;
    width: 50%;
    height: 100%;
    cursor: pointer;
    border-top: 1px solid #cfcfcf;
    &.rightBtn {
      border-left: 1px solid #cfcfcf;
      border-radius: 0 0 7px 0;
    }
    &.leftBtn {
      border-radius: 0 0 0 7px;
    }
  }
`;
