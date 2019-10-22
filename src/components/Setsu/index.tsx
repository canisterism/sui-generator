import React, { FC } from 'react';
import { Button, Header } from 'semantic-ui-react';

export type SetsuProps = {
  src: string;
};

const Setsu: FC<SetsuProps> = ({ src }) => {
  debugger;
  return (
    <>
      <Button>DO IT</Button>
      <Header>id: {src}</Header>
      <img src={src} alt='' />
    </>
  );
};

export default Setsu;
