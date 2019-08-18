import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import Preview from './components/Preview';
import SetsuTextArea from './components/SetsuTextArea';
const style = {
  h1: {
    marginTop: '3rem'
  }
};

const App: React.FC = () => (
  <Container textAlign='center'>
    <Header as='h1' style={style.h1}>
      説ジェネレーター
    </Header>
    <Preview />
    <SetsuTextArea
      handleText={() => {
        return () => {};
      }}
    />
  </Container>
);

export default App;
