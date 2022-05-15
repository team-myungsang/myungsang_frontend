import styled from 'styled-components';

export const SSignUpForm = styled.form`
  font-weight: 500;
  margin: 50px 10px;
  height: 500px;
  &.profileWrap {
    position: relative;
  }
  > .title {
    line-height: 32px;
    font-size: 22px;
    font-family: Pretendard;
    &.last {
      position: relative;
      top: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      > svg {
        margin-bottom: 28px;
      }
    }
    > .success {
      font-weight: bold;
      padding-bottom: 6px;
    }
    > .description {
      text-align: center;
      line-height: 20px;
      font-size: 13px;
    }
  }
  > .inputWrap {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    > input {
      font-size: 13px;
      font-weight: 500;
      font-family: Pretendard;
      outline: none;
      border: none;
      border-bottom: 2px #c8c8c8 solid;
      padding: 10px;
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
    font-weight: 600;
    color: white;
    display: block;
    width: 100%;
    outline: none;
    border: none;
    border-radius: 100px;
    background: #9e9e9e;
    padding: 14px;
    cursor: pointer;
    font-size: 14px;
    font-family: Pretendard;
    &.active {
      background: #ff613f;
    }
    &.profile {
      background: #0d0d0d;
      position: absolute;
      bottom: 0;
    }
  }
`;

export const SSignUpPasswordCheck = styled.div`
  display: flex;
  font-size: 14px;
  color: #c8c8c8;
  > div {
    padding-top: 10px;
    font-size: 11px;
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
