import React, { FC } from 'react';
import { Form, TextArea } from 'semantic-ui-react';

export interface SetsuTextareaProps {
  textValue?: string;
  changeText: (text: string) => void;
}
const style = {
  textAlign: 'center' as 'center',
  width: '70%',
  marginTop: '0.8rem'
};
const SetsuTextarea: FC<SetsuTextareaProps> = ({
  textValue = '',
  changeText = () => {}
}) => (
  <Form>
    <TextArea
      onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
        changeText(e.currentTarget.value)
      }
      value={textValue}
      placeholder={''}
      style={style}
    />
  </Form>
);

export default SetsuTextarea;
// test
