import React, { useState } from 'react';
import styled from 'styled-components';

import GlobalStyle from './styles/globalStyle';
import './styles/App.scss';

import Splash from './containers/Splash';
import Content from './containers/Content';

import { introduce } from './text/firstSection';

const Wrap: any = styled.div`
  background-color: ${(props: any) => props.backgroundColor};
  display: flex;
  flex-direction: column;
  padding: 2.2rem 1rem;
  transition: 1s;
  font-family: 'Montserrat';
  font-weight: bold;
`;

function App() {
  const [splash, setSplash] = useState(true);
  const onChangeSplash = () => {
    setTimeout(() => {
      setSplash((prev) => !prev);
    }, 1000);
  };

  const [photoNumber, setPhotoNumber] = useState(0);
  const changePhoto = (e: any) => {
    if (e.currentTarget.value === 'left' && photoNumber > 0)
      setPhotoNumber(photoNumber - 1);
    else if (
      e.currentTarget.value === 'right' &&
      photoNumber < COLOR.length - 1
    )
      setPhotoNumber(photoNumber + 1);
  };

  return (
    <>
      <GlobalStyle />
      {splash ? (
        <Splash splash onChangeSplash={onChangeSplash} />
      ) : (
        <Wrap backgroundColor={COLOR[photoNumber]}>
          <Content text="we are getting married!" introduce={introduce} />
          <Content text="Place" link="http://naver.me/5zJozzqz" />
          <Content text="Photo" photo changePhoto={changePhoto} />
          <Content text="Please" />
        </Wrap>
      )}
    </>
  );
}

export default App;

const COLOR = [
  '#72694b',
  '#02343F',
  '#07553B',
  '#50586C',
  '#815854',
  '#DDA94B',
];
