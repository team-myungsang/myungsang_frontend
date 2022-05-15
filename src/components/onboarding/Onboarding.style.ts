import styled, { css, keyframes } from 'styled-components';

const faceInAni = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
  `;

const faceOutAni = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const SOnboarding = styled.div<{ step: 1 | 2 }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  ${p =>
    p.step === 1
      ? css`
          animation: ${faceInAni} 0.4s forwards ease-in-out;
        `
      : css`
          animation: ${faceOutAni} 0.2s forwards ease-in-out;
          animation-delay: 1.8s;
        `}

  img {
    width: 100%;
  }
`;
