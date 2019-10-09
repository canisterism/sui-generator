import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { textChange } from '../actions/setsuText';
import setsuTextarea from '../components/setsuTextarea';
import { RootState } from '../reducers/index';

interface StateProps {
  textValue: string;
}

interface DispatchProps {
  textChange: (newText: string) => void;
}

// 参照したいStoreの値をコンポーネントのPropsにマッピングする
const mapStateToProps = (state: RootState): StateProps => ({
  textValue: state.text.textValue
});

// 発行したいActionを発行するAction Creator関数をPropsにマッピングする
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators({ textChange }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(setsuTextarea);
