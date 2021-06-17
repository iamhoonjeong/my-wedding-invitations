import React from 'react';
import styled from 'styled-components';

import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

interface SubTitleProps {
  text: string;
}

const Text = styled.h2`
  display: inline;
  font-weight: bold;
  opacity: 0;
  position: relative;
  width: 100%;
  will-change: scroll-position;
`;

function SubTitle({ text }: SubTitleProps) {
  const animatedItem: any = useScrollFadeIn();

  return <Text {...animatedItem}>{text}</Text>;
}

export default SubTitle;
