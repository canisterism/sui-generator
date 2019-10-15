import React, { FC } from 'react';
import { Form, TextArea } from 'semantic-ui-react';

export interface setsuTextareaProps {
  textValue?: string;
  changeText: (text: string) => void;
}

const setsuTextarea: FC<setsuTextareaProps> = ({
  textValue = '',
  changeText = () => {}
}) => (
  <Form>
    <TextArea
      onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
        changeText(e.currentTarget.value)
      }
      value={textValue}
      style={{ textAlign: 'center' }}
    />
  </Form>
);

export default setsuTextarea;
