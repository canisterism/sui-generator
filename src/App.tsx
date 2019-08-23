import React, { useState } from 'react';
import { Header, Container, Form, TextArea } from 'semantic-ui-react';
import Preview from './components/Preview';
const style = {
  h1: {
    marginTop: '3rem'
  },
  my1: {
    margin: '1rem 0'
  },
  width30: {
    width: '30%'
  }
};

const App: React.FC = () => {
  const [text, setText] = useState('LINE1 \nLINE2 \nLINE3');

  return (
    <Container textAlign='center'>
      <Header as='h1' style={style.h1}>
        説ジェネレーター
      </Header>
      <Preview text={text} />
      <Container style={style.my1}>
        <Form>
          <TextArea
            onChange={(e: React.FormEvent<HTMLTextAreaElement>) => {
              setText(e.currentTarget.value);
            }}
            value={text}
            style={style.width30}
          />
        </Form>
      </Container>
    </Container>
  );
};

export default App;
