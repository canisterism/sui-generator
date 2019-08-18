import React, { FC } from 'react';
import { Container, Form, TextArea } from 'semantic-ui-react';

export interface SetsuTextAreaProps {
  handleText: () => void;
}

const margin = { margin: '1rem 0', width: '30%' };
const SetsuTextArea: FC<SetsuTextAreaProps> = ({ handleText = () => {} }) => (
  <Container style={margin}>
    <Form>
      <TextArea onChange={handleText} />
    </Form>
  </Container>
);

export default SetsuTextArea;
