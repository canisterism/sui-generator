import React, { FC } from 'react';
import { Button, Icon } from 'semantic-ui-react';
export interface TweetButtonProps {
  text: string;
  path?: string;
}

export const TweetButton: FC<TweetButtonProps> = ({ text, path }) => {
  return (
    <Button
      color='twitter'
      onClick={() =>
        window.open(
          'https://twitter.com/share?text=' +
            text +
            `説&url=https://www.sui-generator.tech${path}&hashtags=説ジェネレーター`,
          'popup',
          'width=600,height=250,scrollbars=no,resizable=no,left=400,top=300'
        )
      }>
      <Icon name='twitter' />
      ツイート
    </Button>
  );
};

export default TweetButton;
