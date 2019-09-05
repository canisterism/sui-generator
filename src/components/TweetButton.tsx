import React, { useEffect } from "react";
export const TweetButton = () => {
  useEffect(() => {
    //@ts-ignore
    twttr.widgets.load(document.getElementById('twitter-share-button'))
  }, [])

  return (
    <a id='twitter-share-button' href='https://twitter.com/share?ref_src=twsrc%5Etfw' className='twitter-share-button' data-show-count='false'>
      画像をツイート
    </a>
  )
}

export default TweetButton;
