import React, { FC } from 'react';

export interface TextProps {
  value: string;
  fontSize?: string;
  x?: string;
  y?: string;
  dy: number;
}

export const TextDefaultProps = {
  fontSize: '48px',
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
  text: string;
}

const SetsuText: FC<SetsuTextProps> = ({ text = 'initial text' }) => {
  const lines: string[] = text.split('\n');
  const firstDy: number = 48 - (48 / 2) * lines.length;

  const Texts: JSX.Element[] = lines.map((text: string, i: number) => (
    <Text key={i} value={text} dy={firstDy + 48 * i} />
  ));
  return <g textAnchor='middle'>{Texts}</g>;
};

export default SetsuText;
