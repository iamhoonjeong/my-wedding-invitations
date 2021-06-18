import React, { useState } from 'react';
import styled from 'styled-components';
import cn from 'classnames';

import photo from '../static/image/splash.png';

interface SplashProps {
  onChangeSplash: () => void;
  splash: boolean;
}

const Container = styled.div`
  align-items: center;
  background-image: url(${photo});
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  font-family: 'Montserrat';
  height: 100%;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  width: 100%;
  &.transition {
    pointer-events: none;
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  font-family: 'Salome' !important;
`;

const TransitionBox = styled.div`
  background-color: #72694b;
  bottom: 0;
  position: fixed;
  width: 100%;
  z-index: 100;
  &.transition {
    animation: transition 1s;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
    touch-action: none;
  }
  @keyframes transition {
    from {
      height: 0;
    }
    to {
      height: 100%;
    }
  }
`;

function Splash({ onChangeSplash }: SplashProps) {
  const [transition, setTransition] = useState(false);
  const onClick = () => {
    onChangeSplash();
    setTransition((prev) => !prev);
  };

  return (
    <>
      <Container className={cn({ transition })} onClick={onClick}>
        <Title>Wedding</Title>
      </Container>
      <TransitionBox className={cn({ transition })} />
    </>
  );
}

export default Splash;
