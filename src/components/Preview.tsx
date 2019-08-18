import React, { FC } from 'react';
import { Container } from 'semantic-ui-react';
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
}) => {
  const width: number = 700;
  const height: number = 470;

  return (
    <Container textAlign='center'>
      <svg width={width} height={height}>
        <image href={templateImage} width={width} height={height} />
        <text> {text} </text>
        <image href={setsuImage} />
      </svg>
    </Container>
  );
};

export default Preview;
