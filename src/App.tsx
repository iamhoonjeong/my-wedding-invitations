import React from 'react';
import styled from 'styled-components';

import GlobalStyle from './styles/globalStyle';
import './styles/App.scss';

import Title from './components/Title';
import Content from './containers/Content';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat';
  font-weight: normal;
  padding: 1rem;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrap>
        <Title text="Wedding" />
        <Content text="Place" link="http://naver.me/5zJozzqz" />
        <Content text="Photo" photo />
        <Content text="Please" />
      </Wrap>
    </>
  );
}

export default App;
