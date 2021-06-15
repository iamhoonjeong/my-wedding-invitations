import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { useState } from 'react';

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
`;

const ButtonWrap = styled.div`
  min-height: 2rem;
  min-width: 2rem;
  height: 2rem;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TurnButton = styled.button`
  border: 0;
  border-radius: 50%;
  min-height: 100%;
  min-width: 100%;
  height: 100%;
  width: 100%;
  background-color: white;
  transform-origin: center center;

  &.animate {
    animation-name: animation;
    animation-duration: 1s;
  }
  @keyframes animation {
    70% {
      transform: scale(100);
    }
    100% {
      width: 100%;
      height: 100%;
    }
  }
`;

const PhotoWrap = styled.div`
  background-color: white;
  height: 400px;
  width: 400px;
  margin: 0 0.8rem;
`;

function PhotoBox({ changePhoto, onChangePhoto }: PhotoBoxProps) {
  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    onChangePhoto(e.currentTarget.value);

    setBlockButton((prev) => !prev);
    setTimeout(() => {
      setBlockButton((prev) => !prev);
    }, 1000);
  };

  const [blockButton, setBlockButton] = useState(false);

  return (
    <Container>
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
