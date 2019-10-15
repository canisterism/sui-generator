import React, { FC } from 'react';
import SetsuText from './SetsuText';
import SetsuImage from './SetsuImage';

export interface SetsuTextsProps {
  textValue: string;
  fontSize: number;
}

const SetsuTexts: FC<SetsuTextsProps> = ({ textValue = '', fontSize }) => {
  const lines: string[] = textValue.split('\n');
  const firstDy: number = fontSize - ((fontSize - 8) / 2) * lines.length;

  const Texts: JSX.Element[] = lines.map((text: string, i: number) => {
    if (i !== lines.length - 1) {
      return (
        <SetsuText
          key={i}
          value={text}
          dy={firstDy + (fontSize + 8) * i}
          fontSize={fontSize + 'px'}
        />
      );
    } else {
      return (
        <g key={i}>
          <SetsuText
            value={text}
            dy={firstDy + (fontSize + 8) * i}
            fontSize={fontSize + 'px'}
          />
          {/* <SetsuImage /> */}
        </g>
      );
    }
  });
  return <g textAnchor='middle'>{Texts}</g>;
};

export default SetsuTexts;
