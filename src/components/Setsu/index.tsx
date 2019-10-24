import React, { FC } from 'react';
import { Button, Header, Container } from 'semantic-ui-react';
import Helmet from 'react-helmet';

export type SetsuProps = {
  src: string;
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

const Setsu: FC<SetsuProps> = ({ src }) => {
  return (
    <>
      <Helmet
        meta={[
          { property: 'og:image', content: src },
          { property: 'og:url', content: src } // TODO
        ]}
      />
      <Button>DO IT</Button>
      <Container>
        <img src={src} style={style.img} alt='' />
      </Container>
    </>
  );
};

export default Setsu;
