import React, { FC } from 'react';
import { Container } from 'semantic-ui-react';
import bgImage from '../styles/theme/default/assets/images/sui_image.png';
import font from '../styles/theme/default/assets/fonts/font.base64.js';
import SetsuTexts from '../containers/SetsuTexts';

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
        <image id='bgImage' href={bgImageUrl} width='100%' height='100%' />
        <SetsuTexts />
      </svg>
    </Container>
  );
};

export default SetsuPreview;
