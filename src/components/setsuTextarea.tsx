import React, { FC } from 'react';
import { Form, TextArea } from 'semantic-ui-react';

export interface SetsuTextareaProps {
  textValue?: string;
  changeText: (text: string) => void;
}

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
      style={{ textAlign: 'center' }}
    />
  </Form>
);

export default SetsuTextarea;
