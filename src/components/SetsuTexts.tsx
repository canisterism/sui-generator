import React, { FC } from 'react';
import SetsuText from './SetsuText';
import setsu from '../styles/theme/default/assets/images/setsu.svg';

export interface SetsuTextsProps {
  text?: string;
  fontSize: number;
}

const SetsuTexts: FC<SetsuTextsProps> = ({ text = 'intial', fontSize }) => {
  const lines: string[] = text.split('\n');
  const firstDy: number = fontSize - ((fontSize - 8) / 2) * lines.length;

  const Texts: JSX.Element[] = lines.map((text: string, i: number) => {
    if (i === lines.length - 1) {
      return (
        <g key={i}>
          <SetsuText
            value={text}
            dy={firstDy + (fontSize + 8) * i}
            fontSize={fontSize + 'px'}
          />
          <image
            id='setsu'
            x='50%'
            y='48%'
            height={fontSize + 2 + 'px'} // 画像の縦幅
            width={fontSize + 2 + 'px'} // 画像の横幅
            transform={
              'translate(' +
              (fontSize / 2) * text.length + // x: 文字数分だけフォントのサイズ半分だけズラす
              ' ' +
              (-1 * fontSize + (lines.length * fontSize) / 1.6) + // y: 1行分 + 行数分ズラす
              ')'
            }
            href={setsu}
          />
        </g>
      );
    } else {
      return (
        <SetsuText
          key={i}
          value={text}
          dy={firstDy + (fontSize + 8) * i}
          fontSize={fontSize + 'px'}
        />
      );
    }
  });
  return <g textAnchor='middle'>{Texts}</g>;
};

export default SetsuTexts;
