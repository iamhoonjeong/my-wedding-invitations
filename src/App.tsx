import React, { useState } from 'react';
import styled from 'styled-components';

import GlobalStyle from './styles/globalStyle';
import './styles/App.scss';

import Splash from './containers/Splash';
import Content from './containers/Content';

const Wrap: any = styled.div`
  background-color: ${(props: any) => props.backgroundColor};
  display: flex;
  flex-direction: column;
  padding: 1rem;
  transition: 1s;
`;

function App() {
  const [splash, setSplash] = useState(true);
  const onChangeSplash = () => {
    setTimeout(() => {
      setSplash((prev) => !prev);
    }, 1000);
  };

  const [photoNumber, setPhotoNumber] = useState(0);
  const color = ['red', 'blue', 'pink'];
  const changePhoto = (e: any) => {
    if (e.currentTarget.value === 'left' && photoNumber > 0)
      setPhotoNumber(photoNumber - 1);
    else if (e.currentTarget.value === 'right' && photoNumber < 2)
      setPhotoNumber(photoNumber + 1);
  };

  return (
    <>
      <GlobalStyle />
      {splash ? (
        <Splash splash onChangeSplash={onChangeSplash} />
      ) : (
        <Wrap backgroundColor={color[photoNumber]}>
          <Content text="Place" link="http://naver.me/5zJozzqz" />
          <Content text="Photo" photo changePhoto={changePhoto} />
          <Content text="Please" />
        </Wrap>
      )}
    </>
  );
}

export default App;
