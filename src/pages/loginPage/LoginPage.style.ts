import styled from 'styled-components';

export const LoginPageWrapper = styled.div`
  padding: 1rem;
  color: ${p => p.theme.color.black};

  input {
    width: 100%;
    height: 2rem;
  }

  button {
    width: 100%;
    height: 2rem;
    border: 0;
    outline: none;
  }

  button[type='submit'] {
    margin-top: 1rem;
    background-color: ${p => p.theme.color.orange};
  }
  a {
    display: block;
    text-align: center;
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    border: 1px solid ${p => p.theme.color.black};
    text-decoration: none;
    color: ${p => p.theme.color.black};

    margin-top: 1rem;
  }

  .errMsg {
    color: ${p => p.theme.color.orange};
    margin: 5px 0;
  }
`;
