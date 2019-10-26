import React, { FC } from 'react';
import { Divider, Segment } from 'semantic-ui-react';

const style = {
  segment: {
    padding: 'auto 0',
    margin: '2rem 0 0',
    borderRadius: '0',
    fontSize: '0.8rem'
  },
  p: {}
};

const SetsuFooter: FC = () => (
  <>
    <Segment inverted style={style.segment} textAlign='center'>
      <p>sui-generator powered by 黒バラゴシック</p>
      <p>author: @canisterism</p>
    </Segment>
  </>
);

export default SetsuFooter;
