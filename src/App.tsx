import React from 'react';
import styled from 'styled-components';

import GlobalStyle from './styles/globalStyle';
import './styles/App.scss';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat';
  font-weight: normal;
`;

const Title = styled.h1`
  font-weight: bold;
`;

const Desc = styled.span`
  font-weight: normal;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrap>
        <Title>Hi There?</Title>
        <Desc>description</Desc>
      </Wrap>
    </>
  );
}

export default App;
