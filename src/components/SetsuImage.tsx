import React, { FC } from 'react';
import setsu from '../styles/theme/default/assets/images/setsu.svg';
import { translateXandY, translateValues } from '../utils/imageCoverter';

export interface SetsuImageProps {
  xCenter: number;
  yCenter: number;
  width?: number;
  height?: number;
  fontSize: number;
  textValue: string;
}

export const translate = (params: translateValues): string =>
  `translate(${params.xShift} ${params.yShift})`;

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
