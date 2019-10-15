import React, { FC } from 'react';
import setsu from '../styles/theme/default/assets/images/setsu.svg';

export interface SetsuImageProps {
  x: number;
  y: number;
  width?: number;
  height?: number;
  fontSize: number;
  texts: string;
}

interface translateValues {
  x: number;
  y: number;
}

export const translateXandY = (
  fontSize: number,
  texts: string
): translateValues => {
  const lines = texts.split('\n');
  const lastLine = lines[lines.length - 1];
  const x = (fontSize / 2) * lastLine.length;

  const y = -1 * fontSize + (lines.length * fontSize) / 1.6;

  return { x: x, y: y };
};

const translate = (params: translateValues): string =>
  `translate(${params.x} ${params.y})`;

const SetsuImage: FC<SetsuImageProps> = ({
  x,
  y,
  fontSize,
  width = fontSize + 2,
  height = fontSize + 2,
  texts
}) => (
  <image
    id='setsu-image'
    x={x + '%'}
    y={y + '%'}
    height={width + 'px'} // 画像の縦幅
    width={height + 'px'} // 画像の横幅
    transform={translate(translateXandY(fontSize, texts))}
    href={setsu}
  />
);

export default SetsuImage;
