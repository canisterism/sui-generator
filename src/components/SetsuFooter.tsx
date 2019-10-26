import React, { FC } from 'react';
import { Divider, Segment } from 'semantic-ui-react';

const style = {
  segment: {
    padding: 'auto 0',
    margin: '2rem 0 0',
    borderRadius: '0',
    fontSize: '0.8rem',
    width: '100%',
    position: 'absolute',
    bottom: 0
  }
};

const SetsuFooter: FC = () => (
  <>
    <Segment inverted style={style.segment} textAlign='center'>
      <p>sui-generator powered by 黒バラゴシック</p>
      <p>
        author:
        <a href='https://twitter.com/canisterism' target='_blank'>
          @canisterism
        </a>
      </p>
    </Segment>
  </>
);

export default SetsuFooter;
