import React, { FC, Suspense } from 'react';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import Helmet from 'react-helmet';
import TextToClipBoard from '../TextToClipboard';
const TweetButton = React.lazy(() => import('../../containers/TweetButton'));

export type SetsuProps = {
  isProcessing: boolean;
  src: string;
  path: string;
};

const style = {
  container: {
    marginTop: '3rem',
    color: '#eee',
    textAlign: 'center',
    flex: 1
  },
  messageContainer: {
    margin: '1rem 0'
  },
  div: {
    margin: '5rem',
    textAlign: 'center'
  },
  img: {
    border: ' 3px solid #eee',
    boxSizing: 'border-box' as 'border-box',
    width: '80%',
    maxWidth: '80%',
    height: 'auto'
  }
};

const Setsu: FC<SetsuProps> = ({ isProcessing, src, path }) => {
  const url = `https://www.sui-generator.tech${path}`;
  return (
    <>
      <Helmet
        meta={[
          { property: 'twitter:image', content: src },
          {
            property: 'twitter:url',
            content: url
          }
        ]}
      />
      <Dimmer active={isProcessing}>
        <Loader content='Loading...'></Loader>
      </Dimmer>
      <Suspense fallback={''}>
        <Container style={style.container}>
          <img src={src} style={style.img} alt='' />
          <Container style={style.messageContainer}>
            <p>あなただけの「説」画像が完成しました。</p>
            <p>早速SNSでシェアしましょう！</p>
          </Container>
          <TextToClipBoard value={url} />
          <TweetButton />
        </Container>
      </Suspense>
    </>
  );
};

export default Setsu;
