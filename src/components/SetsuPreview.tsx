import React, { FC } from 'react';
import bgImage from '../styles/theme/default/assets/images/sui_image.png';
import font from '../styles/theme/default/assets/fonts/font.base64.js';
import SetsuTexts from '../containers/SetsuTexts';

export interface PreviewProps {
  bgImageUrl?: any; // fixme
  width: number;
  height: number;
}
const style = {
  svg: {
    border: ' 3px solid #eee',
    boxSizing: 'content-box' as 'content-box'
  }
};

const SetsuPreview: FC<PreviewProps> = ({
  bgImageUrl = bgImage,
  width,
  height
}) => {
  return (
    <svg id='svg' viewBox={'0 0 ' + width + ' ' + height} style={style.svg}>
      <defs>
        <style>
          {`@font-face {
                font-family: Kurobara Gothiic Black;
                src: url(${font}) format("truetype")
              }`}
        </style>
      </defs>
      <image id='bg-image' href={bgImageUrl} width='100%' height='100%' />
      <SetsuTexts />
    </svg>
  );
};

export default SetsuPreview;
