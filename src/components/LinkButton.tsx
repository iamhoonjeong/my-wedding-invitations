import React from 'react';
import styled from 'styled-components';

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
`;

function LinkButton({ link }: LinkButtonProps) {
  return (
    <Button href={link} target="_blank">
      ok
    </Button>
  );
}

export default LinkButton;
