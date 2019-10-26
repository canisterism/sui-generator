import React, { FC, Suspense } from 'react';
import { Button, Message, Container, Dimmer, Loader } from 'semantic-ui-react';
import SetsuTextarea from '../../containers/SetsuTextarea';
const SetsuPreview = React.lazy(() => import('../../containers/SetsuPreview'));

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
  }
};

export interface HomeProps {
  isProcessing: boolean;
  error: boolean;
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
      <Dimmer active={isProcessing}>
        <Loader content='Loading...'></Loader>
      </Dimmer>
      <Container textAlign='center'>
        {errorDialog}
        <Suspense fallback={''}>
          <SetsuPreview />
        </Suspense>
        <SetsuTextarea />
        <Button
          primary
          onClick={() => {
            onClickComplete();
          }}
          style={style.button}>
          完成！
        </Button>
      </Container>
    </div>
  );
};

export default Home;
