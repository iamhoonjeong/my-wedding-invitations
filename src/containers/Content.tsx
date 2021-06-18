import React from 'react';
import styled from 'styled-components';

import SubTitle from '../components/SubTitle';
import LinkButton from '../components/LinkButton';
import PhotoBox from '../components/PhotoBox';

interface ContentProps {
  link?: string;
  photo?: boolean;
  text: string;
  changePhoto?: (e: any) => void;
}

const Container = styled.div`
  font-family: 'Montserrat' !important;
  height: 600px;
`;

function Content({ text, link, photo, changePhoto }: ContentProps) {
  return (
    <Container>
      <SubTitle text={text} />
      {photo && <PhotoBox changePhoto={changePhoto} />}
      {link && <LinkButton link={link} />}
    </Container>
  );
}

export default Content;
