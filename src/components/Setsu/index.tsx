import React, { FC } from 'react';
import { Button, Header } from 'semantic-ui-react';
import Helmet from 'react-helmet';

export type SetsuProps = {
  src: string;
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
      <Header>id: {src}</Header>
      <img src={src} alt='' />
    </>
  );
};

export default Setsu;
