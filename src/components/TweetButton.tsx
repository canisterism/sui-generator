import React, { useEffect, FC } from 'react';

export interface TweetButtonProps {
  text: string;
}

export const TweetButton: FC<TweetButtonProps> = ({ text }) => {
  return (
    <a
      id='twitter-share-button'
      className='twitter-share-button'
      onClick={() =>
        window.open(
          'https://twitter.com/share?text=' +
            text +
            '説&url=https://www.sui-generator.tech&hashtags=説ジェネレーター',
          'popup',
          'width=600,height=250,scrollbars=no,resizable=no,left=400,top=300'
        )
      }>
      tweet
    </a>
  );
};

export default TweetButton;
