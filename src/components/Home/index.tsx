import React, { FC } from 'react';
import { Button, Message, Container, Divider } from 'semantic-ui-react';
import SetsuPreview from '../../containers/SetsuPreview';
import SetsuTextarea from '../../containers/SetsuTextarea';

const style = {
  app: {
    maxWidth: '875px',
    minWidth: '320px',
    textAlign: 'center' as 'center',
    paddingBottom: '1rem',
    margin: '2rem auto 1rem'
  },
  my1: {
    margin: '1rem 0'
  },
  button: {
    marginTop: '1rem',
    fontSize: '1.2rem',
    width: '70%'
    // backgroundColor: '#17E9e0'
  }
};

export interface HomeProps {
  isProcessing: Boolean;
  error: Boolean;
  errorMessage?: string;
  onClickComplete: () => void;
}

const Home: FC<HomeProps> = ({
  isProcessing,
  error,
  errorMessage,
  onClickComplete
}) => {
  const errorDialog = error ? (
    <Message negative>
      <Message.Header> エラーが発生しました。</Message.Header>
      <p>{errorMessage}</p>
    </Message>
  ) : (
    ''
  );

  return (
    <div id='app' style={style.app}>
      <Container textAlign='center'>
        {errorDialog}
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
      </Container>
    </div>
  );
};

export default Home;
