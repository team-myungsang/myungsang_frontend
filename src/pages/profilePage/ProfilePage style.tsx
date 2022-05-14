import styled from 'styled-components';

export const SLayout = styled.div`
  background: black;
  height: 100vh;
`;

export const SProfileBox = styled.div`
  height: 228px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  > div:nth-child(2) {
    padding-top: 20px;
    font-size: 22px;
  }
  > div {
    position: relative;
    > svg {
      &:nth-child(2) {
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }
  }
`;

export const SForm = styled.form`
  background: white;
  height: 225px;
  border-radius: 15px;
  margin: 0 auto;
  padding: 15px;
  margin: 0 15px;
`;

export const SInputBox = styled.div`
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  > label {
    display: flex;
    flex-direction: column;
    font-weight: 600;
    font-size: 13px;
    padding-top: 20px;
    position: relative;
    > input {
      padding: 9px 11px;
      outline: none;
      border: 1px solid #eaeaea;
      margin-top: 10px;
    }
    > svg {
      position: absolute;
      right: 1px;
      bottom: 5px;
    }
  }
`;

export const SProfileAccountBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 600;
  line-height: 16px;
  > input {
    outline: none;
    border: none;
    padding: 15px 122px;
    border-radius: 100px;
    &:first-child {
      color: white;
      background: #9e9e9e;
      margin-bottom: 15px;
    }
    &:last-child {
      color: #9e9e9e;
      background: transparent;
      border: 1px solid #a8a8a8;
    }
  }
`;
