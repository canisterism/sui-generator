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
  x: number;
  y: number;
}

export const translateXandY = (
  fontSize: number,
  textValue: string
): translateValues => {
  const lines = textValue.split('\n');
  const lastLine = lines[lines.length - 1];
  const x = (fontSize / 2) * lastLine.length;

  // <text>がbaseとするラインと<image>がbaseとするラインが違うためにsemanticなロジックで書けない
  // 間に合わせ感が否めないけど一旦これで
  const y = -1 * fontSize + (lines.length * fontSize) / 1.65;

  return { x: x, y: y };
};

const translate = (params: translateValues): string =>
  `translate(${params.x} ${params.y})`;

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
