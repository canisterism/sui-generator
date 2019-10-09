export enum SetsuTextActionTypes {
  TEXTCHANGE = 'setsu/TEXTCHANGE'
}

export interface SetsuTextAction {
  type: SetsuTextActionTypes;
  text?: string;
}

export const textChange = (text: string): SetsuTextAction => ({
  type: SetsuTextActionTypes.TEXTCHANGE,
  text: text
});
