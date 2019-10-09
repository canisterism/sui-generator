import React, { FC } from 'react';
import { Form, TextArea } from 'semantic-ui-react';

export interface setsuTextareaProps {
  textValue?: string;
  textChange: (text: string) => void;
}

const setsuTextarea: FC<setsuTextareaProps> = ({
  textValue = '',
  textChange = () => {}
}) => (
  <Form>
    <h1>{textValue}</h1>
    <TextArea
      onChange={
        (e: React.FormEvent<HTMLTextAreaElement>) =>
          console.log(textChange(e.currentTarget.value))
        // console.log(textChange)
        // textChange(e.currentTarget.value)
      }
      value={textValue}
    />
  </Form>
);

export default setsuTextarea;
