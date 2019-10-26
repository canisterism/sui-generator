import React, { FC } from 'react';
import { Popup, Icon, Segment } from 'semantic-ui-react';

const style = {
  div: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '2.5rem',
    margin: '1rem'
  },
  input: {
    borderTopLeftRadius: '.28571429rem',
    borderBottomLeftRadius: '.28571429rem',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    maxWidth: '30rem',
    height: '2.5rem',
    display: 'block',
    color: '#999',
    borderRight: 'none'
  },
  segment: {
    padding: '0 0.5rem',
    margin: 0,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: '#03948E',
    cursor: 'pointer'
  }
};
interface TextToClipBoardProps {
  value: string;
}

const TextToClipBoard: FC<TextToClipBoardProps> = (
  params: TextToClipBoardProps
) => {
  let inputField: HTMLInputElement | null = null;
  const copyToClipBoard = () => {
    if (inputField) {
      inputField.select();
      document.execCommand('copy');
    }
  };
  return (
    <>
      <div style={style.div}>
        <input
          ref={input => {
            inputField = input;
          }}
          defaultValue={params.value}
          style={style.input}
        />
        <Popup
          size='small'
          on='click'
          content='コピーしました'
          trigger={
            <Segment style={style.segment} onClick={() => copyToClipBoard()}>
              <Icon name='copy'></Icon>
            </Segment>
          }
        />
      </div>
    </>
  );
};

export default TextToClipBoard;
