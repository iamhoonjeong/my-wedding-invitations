import React from 'react';
import styled from 'styled-components';

import SubTitle from '../components/SubTitle';
import LinkButton from '../components/LinkButton';
import PhotoBox from '../components/PhotoBox';

interface ContentProps {
  text: string;
  link?: string;
  photo?: boolean;
}

const Container = styled.div`
  height: 500px;
`;

function Content({ text, link, photo }: ContentProps) {
  return (
    <Container>
      <SubTitle text={text} />
      {link && <LinkButton link={link} />}
      {photo && <PhotoBox />}
    </Container>
  );
}

export default Content;
