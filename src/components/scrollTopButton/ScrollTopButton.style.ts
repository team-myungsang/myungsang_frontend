import styled from 'styled-components';

export const SScrollTopButton = styled.div`
  position: fixed;
  bottom: 66px;
  right: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 28px;
  height: 28px;
  border-radius: 10px;

  background-color: ${p => p.theme.color.black};

  svg {
    width: 18px;
    height: 18px;

    path {
      fill: #fff;
    }
  }
`;
