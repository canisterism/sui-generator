import React, { FC } from 'react';
import { Header, Button } from 'semantic-ui-react';
import SetsuPreview from '../../containers/SetsuPreview';
import SetsuTextarea from '../../containers/SetsuTextarea';
import { Link } from 'react-router-dom';

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
  return (
    <div id='app' style={style.app}>
      <Header as='h1' style={style.header}>
        水曜日のダウンタウン
        <br /> 説ジェネレーター
      </Header>
      <SetsuPreview />
      <SetsuTextarea />
      <Link to={`/setsu/${1}`}>
        <Button primary>完成！</Button>
      </Link>
      {/*<Container style={style.my1}>
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
        secondary
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
      <Link to={`/setsu/${1}`}>
        <Button primary>完成！</Button>
      </Link> */}
    </div>
  );
};

export default Home;
