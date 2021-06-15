import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import cn from 'classnames';

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
  transition: 300ms ease-out;

  &.animate {
    animation-name: animate;
    animation-duration: 1.5s;
  }

  @keyframes animate {
    50% {
      min-width: 300vw;
      min-height: 300vh;
      width: 300vw;
      height: 300vh;
    }

    100% {
      min-height: 100%;
      min-width: 100%;
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
    let value = e.currentTarget.value;
    onChangePhoto(value);
    setTimeout(() => {}, 1000);
  };

  return (
    <Container>
      <ButtonWrap>
        <TurnButton
          value="left"
          className={cn({ animate: changePhoto.left })}
          onClick={onClick}
        ></TurnButton>
      </ButtonWrap>
      <PhotoWrap></PhotoWrap>
      <ButtonWrap>
        <TurnButton
          value="right"
          className={cn({ animate: changePhoto.right })}
          onClick={onClick}
        ></TurnButton>
      </ButtonWrap>
    </Container>
  );
}

export default PhotoBox;
