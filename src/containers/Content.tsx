import React from 'react';
import styled from 'styled-components';

import SubTitle from '../components/SubTitle';
import SubText from '../components/SubText';
import LinkButton from '../components/LinkButton';
import PhotoBox from '../components/PhotoBox';

interface ContentProps {
  link?: string;
  photo?: boolean;
  text: string;
  changePhoto?: (e: any) => void;
  introduce?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Montserrat' !important;
  height: 600px;
`;

function Content({ text, link, photo, introduce, changePhoto }: ContentProps) {
  return (
    <Container>
      <SubTitle text={text} />
      {photo && <PhotoBox changePhoto={changePhoto} />}
      {link && <LinkButton link={link} />}
      {introduce && <SubText introduce={introduce} />}
    </Container>
  );
}

export default Content;
