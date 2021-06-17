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
  height: 100%;
  justify-content: center;
  overflow: hidden;
  transition: 1s;
  width: 100%;
  &.fadeOut {
    opacity: 0;
  }
`;

const Button = styled.button`
  background-color: white;
  border: 0;
  border-radius: 16px;
  box-shadow: 2px 2px 12px;
  color: #72694b;
  font-size: 1.6rem;
  font-weight: normal;
  height: 38px;
  width: 200px;
`;

function Splash({ onChangeSplash }: SplashProps) {
  const [transition, setTransition] = useState(false);
  const [blockButton, setBlockButton] = useState(false);

  const onClick = () => {
    onChangeSplash();
    setTransition((prev) => !prev);
    setBlockButton((prev) => !prev);
    setTimeout(() => {
      setBlockButton((prev) => !prev);
    }, 1000);
  };

  return (
    <Container className={cn({ fadeOut: transition })}>
      <Button onClick={onClick} disabled={blockButton}>
        Wedding
      </Button>
    </Container>
  );
}

export default Splash;
