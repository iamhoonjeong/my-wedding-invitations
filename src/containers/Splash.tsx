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
  flex-direction: column;
  height: 100%;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  width: 100%;
  &.transition {
    pointer-events: none;
  }
  & > * {
    margin-bottom: 0.36rem;
    text-shadow: 0 0 1rem rgba(114, 105, 75, 0.4);
  }
`;

const Title = styled.h2`
  font-family: 'Salome' !important;
  font-size: 3rem;
`;

const Date = styled.h3`
  font-family: 'Salome' !important;
  font-size: 2rem;
`;

const Time = styled(Date)``;

const Mention = styled.div`
  align-items: center;
  display: flex;
  font-weight: 100;
  justify-content: center;
  height: 16px;
  margin-bottom: 0;
  position: absolute;
  top: calc(100% - 16px - 1.4rem);
  width: 240px;
`;

const TransitionBox = styled.div`
  background-color: #72694b;
  bottom: 0;
  left: 0;
  position: fixed;
  width: 100%;
  z-index: 100;
  &.transition {
    animation: transition 0.8s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
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
        <Date>2021.10.9</Date>
        <Time>12:00pm</Time>
        <Mention>화면을 터치하세요</Mention>
      </Container>
      <TransitionBox className={cn({ transition })} />
    </>
  );
}

export default Splash;
