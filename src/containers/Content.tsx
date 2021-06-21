import React from 'react';
import styled from 'styled-components';

import SubTitle from '../components/SubTitle';
import SubText from '../components/SubText';
import LinkButton from '../components/LinkButton';
import PhotoBox from '../components/PhotoBox';
import AnimationBox from '../components/AnimationBox';

interface ContentProps {
  link?: string;
  photo?: boolean;
  text: string;
  color?: string;
  changePhoto?: (e: any) => void;
  getting?: boolean;
  place?: boolean;
  please?: boolean;
  photoNumber?: number | undefined;
  animation?: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Montserrat' !important;
  margin-bottom: 12rem;
`;

function Content({
  text,
  color,
  getting,
  place,
  please,
  link,
  photo,
  changePhoto,
  photoNumber,
  animation,
}: ContentProps) {
  return (
    <Container>
      <SubTitle text={text} />
      {getting && <SubText getting />}
      {place && <SubText place />}
      {please && <SubText please />}
      {photo && (
        <PhotoBox changePhoto={changePhoto} photoNumber={photoNumber} />
      )}
      {link && <LinkButton link={link} color={color} />}
      {animation && <AnimationBox></AnimationBox>}
    </Container>
  );
}

export default Content;
