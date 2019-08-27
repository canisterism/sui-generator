import React, { FC } from 'react';

export interface TextProps {
  key: number;
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

  const Texts: JSX.Element[] = lines.map((text: string, i: number) => (
    <Text
      key={i}
      value={text}
      dy={firstDy + (fontSize + 8) * i}
      fontSize={fontSize + 'px'}
    />
  ));
  return <g textAnchor='middle'>{Texts}</g>;
};

export default SetsuText;
