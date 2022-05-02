import styled from 'styled-components';

export const SForm = styled.form`
  margin: 50px 10px;
`;

export const SInputWrap = styled.label`
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

export const SSignUpBtn = styled.input`
  display: block;
  width: 100%;
  outline: none;
  border: none;
  background: #c4c4c4;
  padding: 20px;
  cursor: pointer;
`;
