import React from 'react';
import styled from 'styled-components';

interface SubTitleProps {
  text: string;
}

const Text = styled.h2`
  font-weight: bold;
`;

function SubTitle({ text }: SubTitleProps) {
  return <Text>{text}</Text>;
}

export default SubTitle;
