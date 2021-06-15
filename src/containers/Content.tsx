import React, { useState, useRef } from 'react';
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
  height: 1200px;
`;

function Content({ text, link, photo }: ContentProps) {
  const [changePhoto, setChangePhoto] = useState<any>({
    left: false,
    right: false,
  });
  const changePhotoRef = useRef(changePhoto);
  const onChangePhoto = (e: string) => {
    setChangePhoto({
      ...changePhoto,
      [e]: !changePhoto[e],
    });
    setTimeout(() => {
      setChangePhoto(changePhotoRef.current);
    }, 1000);
  };

  return (
    <Container>
      <SubTitle text={text} />
      {photo && (
        <PhotoBox changePhoto={changePhoto} onChangePhoto={onChangePhoto} />
      )}
      {link && <LinkButton link={link} />}
    </Container>
  );
}

export default Content;
