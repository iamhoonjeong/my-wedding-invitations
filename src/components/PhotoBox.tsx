import React, { useState, useEffect, MouseEvent, useCallback } from 'react';
import styled from 'styled-components';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

import one from '../static/image/one.png';
import two from '../static/image/two.png';
import three from '../static/image/three.png';
import four from '../static/image/four.png';
import five from '../static/image/five.png';
import six from '../static/image/six.png';
import seven from '../static/image/seven.png';

interface PhotoBoxProps {
  changePhoto?: any;
  photoNumber?: number | undefined;
}

const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: space-between;
  max-height: 440px;
  opacity: 0;
  position: relative;
  width: 100%;
`;

const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 373px;
  height: 440px;
  margin: 0 0.6rem;
  width: 100%;
`;

const PhotoWrap = styled.div<any>`
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  background-image: url(${one});
  background-image: ${(props) => `url(${props.photo})`};
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  transition: 300ms;
  width: 100%;
`;

const PhotoDesc = styled.div`
  align-items: center;
  display: flex;
  font-size: 0.8rem;
  font-weight: 100;
  justify-content: center;
  margin-top: 1rem;
`;

const ButtonWrap = styled.div<any>`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: center;
  padding: 0;
  position: relative;
  top: -20px;
`;

const TurnButton = styled.button<any>`
  border: 0;
  background-color: transparent;
  height: 200px;
  padding: 0;
  width: 100%;
`;

function PhotoBox({ changePhoto }: PhotoBoxProps) {
  const [photoNumber, setPhotoNumber] = useState(0);
  const photos = [two, three, four, five, six, seven, one];

  const onChangePhoto = useCallback(
    (e: MouseEvent<HTMLButtonElement>): void => {
      if (e.currentTarget.value === 'left' && photoNumber > 0) {
        changePhoto(e);
        setPhotoNumber((prev) => prev - 1);
      } else if (
        e.currentTarget.value === 'right' &&
        photoNumber < photos.length - 1
      ) {
        changePhoto(e);
        setPhotoNumber((prev) => prev + 1);
        const img = new Image();
        img.src = photos[photoNumber + 1];
      }
    },
    [changePhoto],
  );

  useEffect(() => {
    interface ImagesProps {
      src: string;
    }
    let images: ImagesProps[] = [];
    function preload(imgages: string[]): void {
      for (let i = 0; i < imgages.length; i++) {
        images[i] = new Image();
        images[i].src = imgages[i];
      }
    }

    preload([one, two, three, four, five, six, seven]);
  }, []);

  const animatedItem: any = useScrollFadeIn();

  return (
    <Container {...animatedItem}>
      <ButtonWrap>
        <TurnButton value="left" onClick={onChangePhoto}>
          <BsChevronCompactLeft size={40} color={'white'} />
        </TurnButton>
      </ButtonWrap>
      <PhotoContainer>
        <PhotoWrap photo={photos[photoNumber]}></PhotoWrap>
        <PhotoDesc>photo by Ina Jang</PhotoDesc>
      </PhotoContainer>
      <ButtonWrap>
        <TurnButton value="right" onClick={onChangePhoto}>
          <BsChevronCompactRight size={40} color={'white'} />
        </TurnButton>
      </ButtonWrap>
    </Container>
  );
}

export default PhotoBox;
