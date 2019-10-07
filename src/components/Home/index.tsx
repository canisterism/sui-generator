import React, { FC, useState } from 'react';
import {
  Header,
  Container,
  Form,
  TextArea,
  Button,
  Icon
} from 'semantic-ui-react';
import { svgToPng } from '../../utils/Downloader';
import Preview from '../../components/Preview';
import TweetButton from '../../components/TweetButton';

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
  }
};

const Home: FC<{}> = () => {
  const [text, setText] = useState(
    'Webエンジニアの８割\n幼少期に\n迷路書いてた'
  );

  return (
    <div id='app' style={style.app}>
      <Header as='h1' style={style.header}>
        水曜日のダウンタウン
        <br /> 説ジェネレーター
      </Header>
      <Preview text={text} />
      <Container style={style.my1}>
        <Form>
          <TextArea
            onChange={(e: React.FormEvent<HTMLTextAreaElement>) => {
              setText(e.currentTarget.value);
            }}
            value={text}
            style={style.textarea}
          />
        </Form>
      </Container>
      <Button
        primary
        onClick={() => {
          const svg = document.getElementById('svg')!;
          const bgImage = document.getElementById(
            'bgImage'
          )! as HTMLImageElement;
          const setsuImage = document.getElementById(
            'setsu'
          )! as HTMLImageElement;
          svgToPng(svg, bgImage, setsuImage, text);
        }}>
        <Icon name='download' />
        ダウンロード
      </Button>
      <TweetButton text={text.replace(/(\r\n|\n|\r)/gm, '')} />
    </div>
  );
};

export default Home;
