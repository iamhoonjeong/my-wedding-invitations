import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

interface SubTitleProps {
  text: string;
}

const Text = styled.h2`
  font-weight: bold;
  opacity: 0;
  transition: 0.5s;
  transition-delay: 0.3s;
  transform: translateX(20px);

  &.fadeIn {
    opacity: 1;
    transform: translateX(0);
  }
`;

function SubTitle({ text }: SubTitleProps) {
  const animatedItem: any = useScrollFadeIn();

  return <Text {...animatedItem}>{text}</Text>;
}

export default SubTitle;
