import React, { FC } from 'react';
import { Button, Header, Container } from 'semantic-ui-react';
import TweetButton from '../../containers/TweetButton';
import Helmet from 'react-helmet';

export type SetsuProps = {
  src: string;
  path: string;
};

const style = {
  div: {
    margin: '5rem',
    textAlign: 'center'
  },
  img: {
    width: '100%',
    maxWidth: '100%',
    height: 'auto'
  }
};

const Setsu: FC<SetsuProps> = ({ src, path }) => {
  return (
    <>
      <Helmet
        meta={[
          { property: 'twitter:image', content: src },
          {
            property: 'twitter:url',
            content: `https://www.sui-generator.tech${path}`
          } // TODO
        ]}
      />
      <Button>DO IT</Button>
      <Container>
        <img src={src} style={style.img} alt='' />
        <TweetButton />
      </Container>
    </>
  );
};

export default Setsu;
