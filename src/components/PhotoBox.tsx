import React, { useState, useEffect, MouseEvent } from 'react';
import styled from 'styled-components';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

import one from '../static/image/one.png';
import two from '../static/image/two.png';
import three from '../static/image/three.png';
import four from '../static/image/four.png';

interface PhotoBoxProps {
  changePhoto?: (e: any) => void;
  photoNumber?: number | undefined;
}

const Container = styled.div`
  align-items: center;
  display: flex;
  max-height: 400px;
  justify-content: space-between;
  opacity: 0;
  position: relative;
  flex: 1;
  width: 100%;
`;

const ButtonWrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: center;
  padding: 0;
`;

const TurnButton = styled.button`
  border: 0;
  height: 100%;
  min-height: 100%;
  min-width: 100%;
  padding: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0);
`;

const PhotoWrap = styled.div<any>`
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  height: 400px;
  margin: 0 0.8rem;
  width: 100%;
  background-image: url(${one});
  background-image: ${(props) => `url(${props.photo})`};
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  transition: 500ms;
`;

function PhotoBox({ changePhoto }: PhotoBoxProps) {
  const [photoNumber, setPhotoNumber] = useState(0);
  const photos = [one, two, three, four];
  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.className.includes('left') && photoNumber > 0) {
      setPhotoNumber((prev) => prev - 1);
    } else if (
      e.currentTarget.className.includes('right') &&
      photoNumber < photos.length - 1
    ) {
      setPhotoNumber((prev) => prev + 1);
      const img = new Image();
      img.src = photos[photoNumber + 1];
    }
  };

  useEffect(() => {
    if (photoNumber < photos.length - 1) {
      const img = new Image();
      img.src = photos[photoNumber + 1];
    }
  }, [photoNumber]);

  const animatedItem: any = useScrollFadeIn();

  return (
    <Container {...animatedItem}>
      <ButtonWrap className="left" onClick={onClick}>
        <TurnButton value="left" onClick={changePhoto}>
          <BsChevronCompactLeft size={40} color={'white'} />
        </TurnButton>
      </ButtonWrap>
      <PhotoWrap photo={photos[photoNumber]}></PhotoWrap>
      <ButtonWrap className="right" onClick={onClick}>
        <TurnButton value="right" onClick={changePhoto}>
          <BsChevronCompactRight size={40} color={'white'} />
        </TurnButton>
      </ButtonWrap>
    </Container>
  );
}

export default PhotoBox;
