import React, { FC } from 'react';
import { Container } from 'semantic-ui-react';
import template from '../styles/theme/default/assets/images/sui_image.png';
import font from '../styles/theme/default/assets/fonts/font.base64.js';
import SetsuText from './SetsuText';

export interface PreviewProps {
  templateImage?: any; // fixme
  text?: string;
  setsuImage?: any; //fixme
}

const Preview: FC<PreviewProps> = ({ templateImage = template, text }) => {
  const width: number = 1500;
  const height: number = 800;
  const fontSize: number = 116;

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
          href={templateImage}
          // viewBox={'0 0 ' + width + ' ' + height}
          width='100%'
          height='100%'
        />
        <SetsuText text={text} fontSize={fontSize} />
      </svg>
    </Container>
  );
};

export default Preview;
