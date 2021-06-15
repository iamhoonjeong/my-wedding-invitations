import React from 'react';
import styled from 'styled-components';

import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

interface SubTitleProps {
  text: string;
}

const Text = styled.h2`
  display: block;
  width: 100%;
  font-weight: bold;
  opacity: 0;

  &.fadeIn {
    opacity: 1;
    animation: fadeIn 1s;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

function SubTitle({ text }: SubTitleProps) {
  const animatedItem: any = useScrollFadeIn();

  return <Text {...animatedItem}>{text}</Text>;
}

export default SubTitle;
