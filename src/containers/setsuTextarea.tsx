import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { changeText } from '../actions/setsu';
import setsuTextarea from '../components/SetsuTextarea';
import { RootState } from '../reducers/index';

interface StateProps {
  textValue: string;
}

interface DispatchProps {
  changeText: (newText: string) => void;
}

// 参照したいStoreの値をコンポーネントのPropsにマッピングする
const mapStateToProps = (state: RootState): StateProps => ({
  textValue: state.setsu.textValue
});

// 発行したいActionを発行するAction Creator関数をPropsにマッピングする
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators({ changeText }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(setsuTextarea);
