import React from 'react';
import styled from 'styled-components';

import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

const Box = styled.div`
  margin-top: 2.2rem;
  width: 100%;
  height: 200px;
  opacity: 0;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Oval = styled.span`
  position: absolute;
  width: 200px;
  height: 200px;
  border: 1px solid #fff;
  border-radius: 40% 60% 65% 35% / 40% 45% 55% 60%;
  &:nth-child(1) {
    animation: circle 6s linear infinite;
  }
  &:nth-child(2) {
    animation: circle 4s linear infinite;
    animation-direction: reverse;
  }
  &:nth-child(3) {
    animation: circle 10s linear infinite;
  }
  @keyframes circle {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

function AnimationBox() {
  const animatedItem: any = useScrollFadeIn();

  return (
    <Box {...animatedItem}>
      <Oval></Oval>
      <Oval></Oval>
      <Oval></Oval>
    </Box>
  );
}

export default AnimationBox;
