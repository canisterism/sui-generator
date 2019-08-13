import React, { FC } from 'react';
import { TextArea } from 'semantic-ui-react';

export interface SetsuTextAreaProps {
  handleText: () => void;
}

const SetsuTextArea: FC<SetsuTextAreaProps> = ({ handleText = () => {} }) => (
  <>
    <TextArea onChange={handleText} />
  </>
);

export default SetsuTextArea;
