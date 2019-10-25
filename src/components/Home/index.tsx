import React, { FC } from 'react';
import { Header, Button } from 'semantic-ui-react';
import SetsuPreview from '../../containers/SetsuPreview';
import SetsuTextarea from '../../containers/SetsuTextarea';

const style = {
  app: {
    maxWidth: '875px',
    minWidth: '320px',
    textAlign: 'center' as 'center',
    paddingBottom: '1rem',
    margin: 'auto'
  },
  header: {
    fontFamily: 'Kurobara Gothiic Black',
    paddingTop: '2rem'
  },
  my1: {
    margin: '1rem 0'
  },
  textarea: {
    textAlign: 'center' as 'center',
    width: '70%'
  },
  button: {
    marginTop: '1rem',
    height: '3.5rem',
    fontSize: '1.2rem',
    width: '100%'
  }
};

export interface HomeProps {
  isProcessing: Boolean;
  error: Boolean;
  onClickComplete: () => void;
}

const Home: FC<HomeProps> = ({ isProcessing, error, onClickComplete }) => {
  return (
    <div id='app' style={style.app}>
      <Header as='h1' style={style.header}>
        水曜日のダウンタウン説ジェネレーター
      </Header>
      <SetsuPreview />
      <SetsuTextarea />
      <Button
        primary
        onClick={() => {
          onClickComplete();
        }}
        style={style.button}
        loading={isProcessing ? true : false}>
        完成！
      </Button>
    </div>
  );
};

export default Home;
