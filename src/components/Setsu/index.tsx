import React, { FC, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Button, Header } from 'semantic-ui-react';

type SetsuProps = {} & RouteComponentProps<{ id: string }>;

const Setsu: FC<SetsuProps> = ({ match }) => {
  const id = match.params.id;
  return (
    <>
      <Button>DO IT</Button>
      <Header>id: {id}</Header>
    </>
  );
};

export default withRouter(Setsu);
