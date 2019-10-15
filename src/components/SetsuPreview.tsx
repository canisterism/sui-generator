import React, { FC } from 'react';
import { Container } from 'semantic-ui-react';
import bgImage from '../styles/theme/default/assets/images/sui_image.png';
import font from '../styles/theme/default/assets/fonts/font.base64.js';
import SetsuText from './SetsuText';

export interface PreviewProps {
  bgImageUrl?: any; // fixme
  width: number;
  height: number;
}

const SetsuPreview: FC<PreviewProps> = ({
  bgImageUrl = bgImage,
  width,
  height
}) => {
  return (
    <Container textAlign='center'>
      <svg id='svg' viewBox={'0 0 ' + width + ' ' + height}>
        <defs>
          <style>
            {`@font-face {
                font-family: Kurobara Gothiic Black;
                src: url(${font}) format("truetype")
              }`}
          </style>
        </defs>
        <image
          id='bgImage'
          href={bgImageUrl}
          // viewBox={'0 0 ' + width + ' ' + height}
          width='100%'
          height='100%'
        />
        {/* <SetsuText /> */}
      </svg>
    </Container>
  );
};

export default SetsuPreview;
