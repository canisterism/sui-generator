import React, { FC } from 'react';
import { Segment } from 'semantic-ui-react';

const style = {
  segment: {
    padding: 'auto 0',
    margin: '2rem 0 0',
    borderRadius: '0',
    fontSize: '1rem',
    width: '100%',
    position: 'relative',
    bottom: 0
  }
};

const SetsuFooter: FC = () => (
  <>
    <Segment inverted style={style.segment} textAlign='center'>
      <p>
        sui-generator powered by
        <a href='http://modi.jpn.org/font_kurobara-gothic.php'>
          黒バラゴシック
        </a>
      </p>
      <p>
        author:
        <a
          href='https://twitter.com/canisterism'
          target='_blank'
          rel='noopener noreferrer'>
          @canisterism
        </a>
      </p>
    </Segment>
  </>
);

export default SetsuFooter;
