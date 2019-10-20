import React, { FC, useEffect } from 'react';
import { Header, Button } from 'semantic-ui-react';
import SetsuPreview from '../../containers/SetsuPreview';
import SetsuTextarea from '../../containers/SetsuTextarea';
import { Link } from 'react-router-dom';
import { pngTobase64 } from '../../utils/imageCoverter';
import setsuImage from '../../styles/theme/default/assets/images/sui_image.png';
import { store } from '../../index';
import { changeBgImage } from '../../actions/setsu';

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
  useEffect(() => {
    pngTobase64(setsuImage).then(base64 => {
      console.log(base64);
      store.dispatch(changeBgImage(base64));
    });
  });
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
    </div>
  );
};

export default Home;
