import React, { FC } from 'react';
import SetsuText from './SetsuText';
import SetsuImage from '../containers/SetsuImage';

export interface SetsuTextsProps {
  textValue: string;
  fontSize: number;
  lineSpace: number;
}

const SetsuTexts: FC<SetsuTextsProps> = ({
  textValue = '',
  fontSize,
  lineSpace
}) => {
  const lines: string[] = textValue.split('\n');
  const firstDy: number = fontSize - (fontSize / 2) * lines.length;

  const Texts: JSX.Element[] = lines.map((text: string, i: number) => {
    if (i !== lines.length - 1) {
      return (
        <SetsuText
          key={i}
          value={text}
          dy={firstDy + (fontSize + lineSpace) * i}
          fontSize={fontSize + 'px'}
        />
      );
    } else {
      return (
        <svg key={i}>
          <SetsuText
            value={text}
            dy={firstDy + (fontSize + lineSpace) * i}
            fontSize={fontSize + 'px'}
          />
          <SetsuImage />
        </svg>
      );
    }
  });
  return <svg textAnchor='middle'>{Texts}</svg>;
};

export default SetsuTexts;
