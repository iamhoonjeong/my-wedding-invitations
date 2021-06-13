import React from 'react';
import styled from 'styled-components';

interface TitleProps {
  text: string;
}

const Text = styled.h1`
  font-weight: bold;
`;

function Title({ text }: TitleProps) {
  return <Text>{text}</Text>;
}

export default Title;
