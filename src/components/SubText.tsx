import React from 'react';
import styled from 'styled-components';

import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

import {
  semiAndI,
  startIntroduce,
  gettingMarried,
  semiParents,
  hoonParents,
} from '../text/information';
import {
  //
  placeName,
  placeInfo,
  placeExplain,
  parking,
} from '../text/place';
import {
  //
  pleaseDont,
  pleaseEnjoy,
} from '../text/please';
import { videoDesc, videoDesc2, videoDesc3 } from '../text/liveVideo';

interface SubTextProps {
  getting?: boolean;
  place?: boolean;
  please?: boolean;
  liveVideo?: boolean;
}

const Container = styled.div`
  opacity: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div<any>`
  font-size: 1.1rem;
  font-weight: 100;
  text-align: center;
  margin-bottom: ${(props) => (props.margin ? '1.8rem' : '0.4rem')};
  width: ${(props) => (props.width ? props.width : '100%')};
  letter-spacing: -0.2px;
  line-height: 1.4rem;
  word-wrap: break-word;
`;

function SubText({ getting, place, please, liveVideo }: SubTextProps) {
  const animatedItem: any = useScrollFadeIn();
  return (
    <Container {...animatedItem}>
      {getting && (
        <>
          <Text>{hoonParents}</Text>
          <Text margin>{semiParents}</Text>
          <Text>{semiAndI}</Text>
          <Text>{startIntroduce}</Text>
          <Text margin>{gettingMarried}</Text>
        </>
      )}
      {place && (
        <>
          <Text>{placeName}</Text>
          <Text margin>{placeInfo}</Text>
          <Text margin>{parking}</Text>
          <Text margin width={'80%'}>
            {placeExplain}
          </Text>
        </>
      )}
      {please && (
        <>
          <Text>{pleaseDont}</Text>
          <Text margin>{pleaseEnjoy}</Text>
          <Text>semi & hoon 💕</Text>
        </>
      )}
      {liveVideo && (
        <>
          <Text margin>
            {videoDesc.split('\n').map((text) => (
              <>
                {text}
                <br />
              </>
            ))}
          </Text>
          <Text margin>
            {videoDesc2.split('\n').map((text) => (
              <>
                {text}
                <br />
              </>
            ))}
          </Text>
          <Text margin>{videoDesc3}</Text>
        </>
      )}
    </Container>
  );
}

export default SubText;
