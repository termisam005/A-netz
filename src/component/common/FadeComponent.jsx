import React from 'react';
import styled, { keyframes } from 'styled-components';

const bottom = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  50% {
    opacity: 0;
    transform: translate3d(0, 50%, 0);
  }
  100% {
    opacity: 1;
    transform: translateZ(0);
  }
`;
const right = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(30%, 0, 0);
  }
  50% {
    opacity: 0;
    transform: translate3d(15%, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translateZ(0);
  }
`;
const left = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(-30%, 0, 0);
  }
  50% {
    opacity: 0;
    transform: translate3d(-15%, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translateZ(0);
  }
`;

const FadeIn = styled.div`
  &.active {
    position: relative;
    animation: ${props => (props.direction == 'bottom' ? bottom : props.direction == 'left' ? left : right)}
      ${props => props.duration}s;
  }
`;


const FadeComponent = ({ duration, direction, children, isStart, className }) => {
    return (
      <FadeIn className={className + (isStart ? ' active' : '')} duration={duration} direction={direction}>
        {children}
      </FadeIn>
    );
  };

export default FadeComponent;
