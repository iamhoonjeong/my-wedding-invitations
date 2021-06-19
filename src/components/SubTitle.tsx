import React from 'react';
import styled from 'styled-components';

import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

interface SubTitleProps {
  text: string;
}

const Text = styled.h2`
  display: flex;
  justify-content: center;
  font-weight: bold;
  line-height: 2.2rem;
  letter-spacing: -0.4px;
  margin-bottom: 1.6rem;
  opacity: 0;
  position: relative;
  text-align: center;
  width: 100%;
`;

function SubTitle({ text }: SubTitleProps) {
  const animatedItem: any = useScrollFadeIn();

  return <Text {...animatedItem}>{text}</Text>;
}

export default SubTitle;
