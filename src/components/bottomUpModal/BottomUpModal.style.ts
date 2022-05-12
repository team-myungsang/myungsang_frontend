import { zIndexes } from '@styles/zIndexes';
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

const openOverlayAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const closeOverlayAnimation = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const SBottomUpModal = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${zIndexes.Modal};

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

export const SOverlay = styled.div<{ visible: boolean }>`
  ${p =>
    p.visible
      ? css`
          animation: ${openOverlayAnimation} 0.2s forwards ease-in-out;
        `
      : css`
          animation: ${closeOverlayAnimation} 0.2s forwards ease-in-out;
        `}
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
`;
