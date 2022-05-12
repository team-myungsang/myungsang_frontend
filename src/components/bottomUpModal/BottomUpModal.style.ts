import styled, { css, keyframes } from 'styled-components';

const openAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(400px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
  `;

const closeAnimation = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0px);
  }
  100% {
    opacity: 0;
    transform: translateY(400px);
  }
`;

export const SBottomUpModal = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  ${p =>
    p.visible
      ? css`
          animation: ${openAnimation} 0.4s forwards ease-in-out;
        `
      : css`
          animation: ${closeAnimation} 0.4s forwards ease-in-out;
        `}

  .modalWrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;

    padding: 15px;

    background-color: #fff;
    border-radius: 10px 10px 0 0;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
`;
