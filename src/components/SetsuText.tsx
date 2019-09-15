import React, { FC } from 'react';
import setsu from '../styles/theme/default/assets/images/setsu.svg';

export interface TextProps {
  value: string;
  fontSize: string;
  dy: number;
  x?: string;
  y?: string;
}

export const TextDefaultProps = {
  x: '50%',
  y: '48%',
  fontFamily: 'Kurobara Gothiic Black'
};

const Text = (props: TextProps) => (
  <text {...TextDefaultProps} {...props}>
    {props.value}
  </text>
);
export interface SetsuTextProps {
  text?: string;
  fontSize: number;
}

const SetsuText: FC<SetsuTextProps> = ({ text = 'intial', fontSize }) => {
  const lines: string[] = text.split('\n');
  const firstDy: number = fontSize - ((fontSize - 8) / 2) * lines.length;

  const Texts: JSX.Element[] = lines.map((text: string, i: number) => {
    if (i === lines.length - 1) {
      return (
        <g key={i}>
          <Text
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
            // x: 文字数分だけフォントのサイズ半分だけズラす
            // y: 1行分 + 行数分ズラす
            transform={
              'translate(' +
              (fontSize / 2) * text.length +
              ' ' +
              (-56 + (lines.length * fontSize) / 1.4) +
              ')'
            }
            href={setsu}
          />
        </g>
      );
    } else {
      return (
        <Text
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

export default SetsuText;
