import React, { useState } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import photo from '../static/image/splash.png';
import LinkButton from '../components/LinkButton';

interface SplashProps {
  splash: boolean;
  onChangeSplash: () => void;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: url(${photo});
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  transition: 1s;
  overflow: hidden;

  &.fadeOut {
    opacity: 0;
  }
`;

const Button = styled.button`
  width: 200px;
  height: 38px;
  background-color: white;
  font-weight: normal;
  font-size: 1.6rem;
  border: 0;
  border-radius: 16px;
  box-shadow: 2px 2px 12px;
  color: #72694b;
`;

function Splash({ onChangeSplash }: SplashProps) {
  const [transition, setTransition] = useState(false);
  const onClick = () => {
    onChangeSplash();
    setTransition((prev) => !prev);
    setBlockButton((prev) => !prev);
    setTimeout(() => {
      setBlockButton((prev) => !prev);
    }, 1000);
  };

  const [blockButton, setBlockButton] = useState(false);
  return (
    <Container className={cn({ fadeOut: transition })}>
      <Button onClick={onClick} disabled={blockButton}>
        Wedding
      </Button>
    </Container>
  );
}

export default Splash;
