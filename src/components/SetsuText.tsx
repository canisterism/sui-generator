import React from 'react';

export interface SetsuTextProps {
  x?: string;
  y?: string;
  fontFamily?: string;
  value: string;
  fontSize: string;
  dy: number;
}

export const TextDefaultProps = {
  x: '50%',
  y: '48%',
  fontFamily: 'Kurobara Gothiic Black'
};

const SetsuText = (props: SetsuTextProps) => (
  <text {...TextDefaultProps} {...props}>
    {props.value}
  </text>
);

export default SetsuText;
