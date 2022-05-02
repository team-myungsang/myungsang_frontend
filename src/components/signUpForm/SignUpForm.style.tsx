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
    margin: 40px 0px;

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
      outline: none;
      border: none;
      border-radius: 100%;
      color: white;
      background: #c4c4c4;
      position: absolute;
      right: 0;
      margin: 10px;
    }
    > .good {
      color: blue;
    }
    > .bad {
      color: red;
    }
  }
  > .signUpBtn {
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
