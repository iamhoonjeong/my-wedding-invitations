import React, { useState, useEffect } from 'react';
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
  width: 100%;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-family: 'Salome' !important;
`;

const TransitionBox = styled.div`
  background-color: white;
  bottom: 0;
  position: fixed;
  width: 100%;
  z-index: 100;
  &.transition {
    animation: transition 1s;
    animation-fill-mode: forwards;
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

  useEffect(() => {});

  return (
    <>
      <Container onClick={onClick}>
        <Title>Wedding</Title>
      </Container>
      <TransitionBox className={cn({ transition })} />
    </>
  );
}

export default Splash;
