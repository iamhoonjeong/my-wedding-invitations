import React from 'react';
import styled from 'styled-components';

import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

interface LinkButtonProps {
  link?: string;
}

const Button = styled.a`
  align-self: center;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  color: #02343f;
  display: flex;
  font-weight: normal;
  height: 52px;
  justify-content: center;
  opacity: 0;
  position: relative;
  text-decoration: none;
  width: 50%;
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
