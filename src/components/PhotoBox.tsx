import React from 'react';
import styled from 'styled-components';

import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

interface PhotoBoxProps {
  changePhoto?: (e: any) => void;
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
`;

const PhotoWrap = styled.div`
  background-color: white;
  height: 400px;
  margin: 0 0.8rem;
  width: 400px;
`;

function PhotoBox({ changePhoto }: PhotoBoxProps) {
  const animatedItem: any = useScrollFadeIn();

  return (
    <Container {...animatedItem}>
      <ButtonWrap>
        <TurnButton value="left" onClick={changePhoto}></TurnButton>
      </ButtonWrap>
      <PhotoWrap></PhotoWrap>
      <ButtonWrap>
        <TurnButton value="right" onClick={changePhoto}></TurnButton>
      </ButtonWrap>
    </Container>
  );
}

export default PhotoBox;
