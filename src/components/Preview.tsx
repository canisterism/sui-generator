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
  const width: number = 700;
  const height: number = 470;
  const fontSize: number = 56;

  return (
    <Container textAlign='center'>
      <svg id='svg' width={width} height={height}>
        <defs>
          <style>
            {`@font-face {
                font-family: Kurobara Gothiic Black;
                src: url(${font}) format("truetype")
              }`}
          </style>
        </defs>
        <image id='bgImage' href={templateImage} width={width} height={height} />
        <SetsuText text={text} fontSize={fontSize} />
      </svg>
    </Container>
  );
};

export default Preview;
