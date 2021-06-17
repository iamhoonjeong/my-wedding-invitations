import React, { useState, MouseEvent } from 'react';
import styled from 'styled-components';
import cn from 'classnames';

import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

interface PhotoBoxProps {
  changePhoto: {
    left: boolean;
    right: boolean;
  };
  onChangePhoto: (e: string) => void;
}

const Container = styled.div`
  align-items: center;
  display: flex;
  height: 400px;
  justify-content: space-between;
  opacity: 0;
  position: relative;
`;

const ButtonWrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 2rem;
  justify-content: center;
  min-height: 2rem;
  min-width: 2rem;
  width: 2rem;
`;

const TurnButton = styled.button`
  background-color: white;
  border: 0;
  border-radius: 50%;
  height: 100%;
  min-height: 100%;
  min-width: 100%;
  transform-origin: center center;
  width: 100%;
  &.animate {
    animation-duration: 1s;
    animation-name: animation;
  }
  @keyframes animation {
    70% {
      transform: scale(100);
    }
    100% {
      height: 100%;
      width: 100%;
    }
  }
`;

const PhotoWrap = styled.div`
  background-color: white;
  height: 400px;
  margin: 0 0.8rem;
  width: 400px;
`;

function PhotoBox({ changePhoto, onChangePhoto }: PhotoBoxProps) {
  const [blockButton, setBlockButton] = useState(false);

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    onChangePhoto(e.currentTarget.value);
    setBlockButton((prev) => !prev);
    setTimeout(() => {
      setBlockButton((prev) => !prev);
    }, 1000);
  };

  const animatedItem: any = useScrollFadeIn();

  return (
    <Container {...animatedItem}>
      <ButtonWrap>
        <TurnButton
          value="left"
          className={cn({ animate: changePhoto.left })}
          onClick={onClick}
          disabled={blockButton}
        ></TurnButton>
      </ButtonWrap>
      <PhotoWrap></PhotoWrap>
      <ButtonWrap>
        <TurnButton
          value="right"
          className={cn({ animate: changePhoto.right })}
          onClick={onClick}
          disabled={blockButton}
        ></TurnButton>
      </ButtonWrap>
    </Container>
  );
}

export default PhotoBox;
