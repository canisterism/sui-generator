import { connect } from 'react-redux';

import SetsuPreview from '../components/SetsuPreview';
import { RootState } from '../reducers/index';

interface StateProps {
  // bgImageUrl: any; // fixme
  width: number;
  height: number;
}

const mapStateToProps = (state: RootState): StateProps => ({
  // bgImageUrl: state.setsu.bgImageUrl,
  width: state.setsu.width,
  height: state.setsu.height
});

export default connect(mapStateToProps)(SetsuPreview);
