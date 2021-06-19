import React from 'react';
import styled from 'styled-components';

import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

interface LinkButtonProps {
  link?: string;
  color: string | undefined;
}

const Button = styled.a<any>`
  align-items: center;
  background-color: white;
  border-radius: 8px;
  color: black;
  text-decoration: none;
  display: flex;
  font-weight: normal;
  height: 52px;
  justify-content: center;
  opacity: 0;
  position: relative;
  padding: 0 1rem;
`;

function LinkButton({ link, color }: LinkButtonProps) {
  const animatedItem: any = useScrollFadeIn();

  return (
    <Button href={link} target="_blank" {...animatedItem}>
      place information
    </Button>
  );
}

export default React.memo(LinkButton);
