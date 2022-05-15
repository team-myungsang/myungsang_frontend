import styled from 'styled-components';

export const SNotFoundPage = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${p => p.theme.color.orange};

  img {
    width: 200px;
    height: auto;
  }

  h1 {
    margin: 0;
    font-size: 48px;
    font-weight: 600;
  }
`;
