import React, { FC } from 'react';
import setsu from '../styles/theme/default/assets/images/setsu.svg';

export interface SetsuImageProps {
  xCenter: number;
  yCenter: number;
  width?: number;
  height?: number;
  fontSize: number;
  textValue: string;
}

interface translateValues {
  xCenter: number;
  yCenter: number;
}

export const translateXandY = (
  fontSize: number,
  textValue: string
): translateValues => {
  const lines = textValue.split('\n');
  const lastLine = lines[lines.length - 1];
  const x = (fontSize / 2) * lastLine.length;

  const y = -1 * fontSize + (lines.length * fontSize) / 1.6;

  return { xCenter: x, yCenter: y };
};

const translate = (params: translateValues): string =>
  `translate(${params.xCenter} ${params.yCenter})`;

const SetsuImage: FC<SetsuImageProps> = ({
  xCenter,
  yCenter,
  fontSize,
  width = fontSize + 2,
  height = fontSize + 2,
  textValue
}) => (
  <image
    id='setsu-image'
    x={xCenter + '%'}
    y={yCenter + '%'}
    height={width + 'px'} // 画像の縦幅
    width={height + 'px'} // 画像の横幅
    transform={translate(translateXandY(fontSize, textValue))}
    href={setsu}
  />
);

export default SetsuImage;
