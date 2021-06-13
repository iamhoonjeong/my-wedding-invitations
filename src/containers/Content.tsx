import React from 'react';
import styled from 'styled-components';

import SubTitle from '../components/SubTitle';
import LinkButton from '../components/LinkButton';

interface ContentProps {
  text: string;
  link?: string;
}

const Container = styled.div`
  height: 500px;
`;

function Content({ text, link }: ContentProps) {
  return (
    <Container>
      <SubTitle text={text} />
      {link && <LinkButton link={link} />}
    </Container>
  );
}

export default Content;
