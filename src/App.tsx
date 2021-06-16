import React, { useState } from 'react';
import styled from 'styled-components';

import GlobalStyle from './styles/globalStyle';
import './styles/App.scss';

import Splash from './containers/Splash';
import Content from './containers/Content';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

function App() {
  const [splash, setSplash] = useState(true);
  const onChangeSplash = () => {
    setTimeout(() => {
      setSplash((prev) => !prev);
    }, 1000);
  };

  return (
    <>
      <GlobalStyle />
      {splash ? (
        <Splash splash onChangeSplash={onChangeSplash} />
      ) : (
        <Wrap>
          <Content text="Place" link="http://naver.me/5zJozzqz" />
          <Content text="Photo" photo />
          <Content text="Please" />
        </Wrap>
      )}
    </>
  );
}

export default App;
