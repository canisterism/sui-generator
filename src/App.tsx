import React from 'react';
import { Header } from 'semantic-ui-react';
import Preview from './components/Preview';
import SetsuTextArea from './components/SetsuTextArea';
const style = {
  h1: {
    marginTop: '3rem'
  }
};

const App: React.FC = () => (
  <div className='container'>
    <Header as='h1' style={style.h1}>
      説ジェネレーター
    </Header>
    <Preview />
    <SetsuTextArea
      handleText={() => {
        return () => {};
      }}
    />
  </div>
);

export default App;
