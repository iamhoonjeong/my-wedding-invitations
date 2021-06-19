import React from 'react';
import styled from 'styled-components';

import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

interface SubTextProps {
  introduce: string;
}

const Text = styled.div`
  font-size: 1.1rem;
  font-weight: 100;
  text-align: center;
  opacity: 0;
  position: relative;
  width: 100%;
  line-height: 1.2rem;
  word-wrap: break-word;
`;

function SubText({ introduce }: SubTextProps) {
  const animatedItem: any = useScrollFadeIn();

  return <Text {...animatedItem}>{introduce}</Text>;
}

export default SubText;
