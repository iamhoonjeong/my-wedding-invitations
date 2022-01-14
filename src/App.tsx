import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import GlobalStyle from './styles/globalStyle';
import './styles/App.scss';

import Splash from './containers/Splash';
import Content from './containers/Content';

// a
const NotiAvailMo = styled.div`
  font-weight: bold;
  font-size: 2.6rem;
  width: 100vw;
  height: 100vh;
`;

const WrapWrap: any = styled.div`
  background-color: ${(props: any) => props.backgroundColor};
  transition: 1s;
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
`;

const Wrap: any = styled.div`
  background-color: ${(props: any) => props.backgroundColor};
  display: flex;
  flex-direction: column;
  padding: 3.2rem 1rem 5rem 1rem;
  transition: 1s;
  font-family: 'Montserrat';
  font-weight: bold;
  overflow: hidden;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
`;

function App() {
  const [isMobile, setIsMobile] = useState(true);
  const [splash, setSplash] = useState(true);
  const onChangeSplash = () => {
    setTimeout(() => {
      setSplash((prev) => !prev);
    }, 1600);
  };

  // 모바일 체크 함수
  const checkMobile = () => {
    const user = window.navigator.userAgent;
    let isMobile = false;

    if (
      user.indexOf('iPhone') > -1 ||
      user.indexOf('Android') > -1 ||
      user.indexOf('iPad') > -1 ||
      user.indexOf('iPod') > -1
    ) {
      isMobile = true;
    }

    return isMobile;
  };

  useEffect(() => {
    setIsMobile(checkMobile());
  }, []);

  const [photoNumber, setPhotoNumber] = useState(0);
  const changePhoto = (e: any): any => {
    if (e.currentTarget.value === 'left' && photoNumber > 0)
      setPhotoNumber(photoNumber - 1);
    else if (
      e.currentTarget.value === 'right' &&
      photoNumber < COLOR.length - 1
    )
      setPhotoNumber(photoNumber + 1);
  };

  if (!isMobile)
    return (
      <>
        <NotiAvailMo>모바일 기기만 지원합니다.</NotiAvailMo>
      </>
    );

  return (
    <>
      <GlobalStyle />
      <WrapWrap backgroundColor={COLOR[photoNumber]}>
        {splash ? (
          <Splash splash onChangeSplash={onChangeSplash} />
        ) : (
          <Wrap backgroundColor={COLOR[photoNumber]}>
            <Content text="we're getting married!" getting animation />
            <Content
              text="place"
              link="http://naver.me/5zJozzqz"
              linkText="place information"
              place
              color={COLOR[photoNumber]}
            />
            <Content
              text="photograph"
              photo
              changePhoto={changePhoto}
              photoNumber={photoNumber}
            />
            <Content
              text="live video"
              liveVideo
              link="https://www.youtube.com/watch?v=XqkG988K0Lo"
              linkText="live video link"
            />
            <Content text="please" please />
          </Wrap>
        )}
      </WrapWrap>
    </>
  );
}

export default App;

const COLOR = [
  '#767050',
  '#c39378',
  '#c39378',
  '#c39378',
  '#d9b071',
  '#d9b071',
  '#767050',
];
