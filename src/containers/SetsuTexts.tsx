import { connect } from 'react-redux';
import setsuTexts from '../components/SetsuTexts';
import { RootState } from '../reducers/index';

interface StateProps {
  textValue: string;
  fontSize: number;
  lineSpace: number;
}

export const mapStateToProps = (state: RootState): StateProps => ({
  textValue: state.setsu.textValue,
  fontSize: state.setsu.fontSize,
  lineSpace: state.setsu.lineSpace
});

export default connect(mapStateToProps)(setsuTexts);
