import styled from 'styled-components';

export const SSignUpForm = styled.form`
  font-weight: 500;
  margin: 50px 10px;
  > .title {
    line-height: 32px;
    font-size: 22px;
    font-family: Pretendard;
  }
  > .inputWrap {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    > input {
      font-size: 14px;
      font-weight: 500;
      outline: none;
      border: none;
      border-bottom: 2px #c8c8c8 solid;
      padding: 10px;
      margin: 4px 0;
      &.active {
        border-color: #0d0d0d;
      }
    }
    > .resetBtn {
      position: absolute;
      right: 0;
      margin: 10px;
    }
  }
  > .signUpBtn {
    margin-top: 30px;
    font-weight: 500;
    color: white;
    display: block;
    width: 100%;
    outline: none;
    border: none;
    border-radius: 100px;
    background: #9e9e9e;
    padding: 14px;
    cursor: pointer;
    font-size: 15px;
    &.active {
      background: #ff613f;
    }
  }
`;

export const SSignUpPasswordCheck = styled.div`
  display: flex;
  font-size: 14px;
  color: #c8c8c8;
  > div {
    font-size: 14px;
    display: flex;
    align-items: center;
    &:first-child {
      padding-right: 10px;
    }
    &.active {
      color: #ff613f;
      > svg > path {
        fill: #ff613f;
      }
    }
    > div {
      padding-right: 5px;
    }
  }
`;
