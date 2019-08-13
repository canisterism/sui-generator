import React, { FC } from 'react';
import template from '../styles/theme/default/assets/images/sui_image.svg';
import setsu from '../styles/theme/default/assets/images/setsu.svg';

export interface PreviewProps {
  templateImage?: any; // fixme
  text?: String;
  setsuImage?: any; //fixme
}

const Preview: FC<PreviewProps> = ({
  templateImage = template,
  text = 'テスト',
  setsuImage = setsu
}) => (
  <svg>
    <image href={templateImage} />
    <text> {text} </text>
    <image href={setsuImage} />
  </svg>
);

export default Preview;
