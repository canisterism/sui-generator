import React, { useState } from 'react';
import { Header, Container, Form, TextArea, Button } from 'semantic-ui-react';
import { svgToPng } from './utils/Downloader';
import Preview from './components/Preview';
import TweetButton from './components/TweetButton';
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

export const download = (src: string, filename = 'setsu.png') => {
  const link = document.createElement('a');
  link.href = src;
  link.download = filename;
  link.click();
};

const App: React.FC = () => {
  const [text, setText] = useState(
    'Webエンジニアの８割\n幼少期に \n迷路書いてた'
  );

  return (
    <Container id='app' textAlign='center'>
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
          svgToPng(svg, bgImage, setsuImage);
        }}
      >
        ダウンロード
      </Button>
      <TweetButton />
    </Container>
  );
};

export default App;
