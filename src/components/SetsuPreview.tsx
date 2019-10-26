import React, { FC, Suspense } from 'react';
import font from '../styles/theme/default/assets/fonts/font.base64.js';
import bgImage from '../styles/theme/default/assets/images/sui_image.png';
const SetsuTexts = React.lazy(() => import('../containers/SetsuTexts'));

export interface PreviewProps {
  bgImageUrl?: any; // fixme
  width: number;
  height: number;
}
const style = {
  svg: {
    border: ' 3px solid #eee',
    boxSizing: 'border-box' as 'border-box'
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
      <Suspense fallback={''}>
        <SetsuTexts />
      </Suspense>
    </svg>
  );
};

export default SetsuPreview;
