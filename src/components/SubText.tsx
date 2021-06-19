import React from 'react';
import styled from 'styled-components';

import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

interface SubTextProps {
  semiAndI?: string;
  startIntroduce?: string;
}

const Text = styled.div`
  font-size: 1.1rem;
  font-weight: 100;
  text-align: center;
  margin-bottom: 0.26rem;
  opacity: 0;
  position: relative;
  width: 100%;
  line-height: 1.2rem;
  word-wrap: break-word;
`;

function SubText({ semiAndI, startIntroduce }: SubTextProps) {
  const animatedItem: any = useScrollFadeIn();

  return (
    <>
      {semiAndI && <Text {...animatedItem}>{semiAndI}</Text>}
      {startIntroduce && <Text {...animatedItem}>{startIntroduce}</Text>}
    </>
  );
}

export default SubText;
