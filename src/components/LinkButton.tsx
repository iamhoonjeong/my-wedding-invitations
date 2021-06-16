import React from 'react';
import styled from 'styled-components';

import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

interface LinkButtonProps {
  link?: string;
}

const Button = styled.a`
  align-items: center;
  background-color: white;
  border-radius: 8px;
  color: #02343f;
  display: flex;
  height: 40px;
  justify-content: center;
  text-decoration: none;
  width: 120px;
  position: relative;
  opacity: 0;
`;

function LinkButton({ link }: LinkButtonProps) {
  const animatedItem: any = useScrollFadeIn();

  return (
    <Button href={link} target="_blank" {...animatedItem}>
      ok
    </Button>
  );
}

export default LinkButton;
