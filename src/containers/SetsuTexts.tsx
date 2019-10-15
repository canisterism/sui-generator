import { connect } from 'react-redux';
import setsuTexts from '../components/SetsuTexts';
import { RootState } from '../reducers/index';

interface StateProps {
  text: string;
  fontSize: number;
}

export const mapStateToProps = (state: RootState): StateProps => ({
  text: state.setsu.textValue,
  fontSize: state.setsu.fontSize
});

export default connect(mapStateToProps)(setsuTexts);
