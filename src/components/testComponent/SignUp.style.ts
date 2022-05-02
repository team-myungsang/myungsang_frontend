import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #f0f0f0;
`;

export const BackBtn = styled.div`
  background: #c4c4c4;
  position: absolute;
  padding: 12px;
  left: 12px;
  top: 12px;
  cursor: pointer;
`;

export const Form = styled.form`
  margin: 50px 10px;
`;

export const InputWrap = styled.label`
  display: flex;
  flex-direction: column;
  margin: 40px 0px;
  > input {
    outline: none;
    border: none;
    background: #e5e5e5;
    padding: 10px;
    margin: 4px 0;
  }
  > .good {
    color: blue;
  }
  > .bad {
    color: red;
  }
`;

export const SignUpBtn = styled.input`
  display: block;
  width: 100%;
  outline: none;
  border: none;
  background: #c4c4c4;
  padding: 20px;
  cursor: pointer;
`;

export const SignUpModalOuter = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  font-weight: 400;
  z-index: 1;
`;

export const SignUpModal = styled.div`
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

export const SignUpModalYesOrNo = styled.div`
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

export const LoginModalOuter = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  font-weight: 400;
  z-index: 1;
`;

export const LoginModal = styled.div`
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
