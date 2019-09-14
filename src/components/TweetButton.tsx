import React, { useEffect, FC } from 'react';

export interface TweetButtonProps {
  text: string;
}

export const TweetButton: FC<TweetButtonProps> = ({ text }) => {
  useEffect(() => {
    //@ts-ignore
    twttr.widgets.load(document.getElementById('twitter-share-button'));
  }, []);
  return (
    <a
      id='twitter-share-button'
      href='https://twitter.com/share?ref_src=twsrc%5Etfw'
      className='twitter-share-button'
      data-show-count='false'
      data-text={text + '説'}
      data-url='https://www.sui-generator.tech'
      data-hashtags='説ジェネレーター'>
      tweet
    </a>
  );
};

export default TweetButton;
