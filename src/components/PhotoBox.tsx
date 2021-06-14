import React, { useState } from 'react';
import styled from 'styled-components';
import cn from 'classnames';

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
  transition: 1s;

  &.animate {
    min-width: 1000vw;
    min-height: 1000vh;
    transition: 1s;
  }
`;

const PhotoWrap = styled.div`
  background-color: white;
  height: 400px;
  width: 400px;
  margin: 0 0.8rem;
`;

function PhotoBox() {
  const [animate, setAnimate] = useState(false);

  const onClick = () => {
    setAnimate((prev) => !prev);
  };
  return (
    <Container>
      <ButtonWrap>
        <TurnButton
          className={cn({ animate: animate })}
          onClick={onClick}
        ></TurnButton>
      </ButtonWrap>
      <PhotoWrap></PhotoWrap>
      <ButtonWrap>
        <TurnButton
          className={cn({ animate: animate })}
          onClick={onClick}
        ></TurnButton>
      </ButtonWrap>
    </Container>
  );
}

export default PhotoBox;
