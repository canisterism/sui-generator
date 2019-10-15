import { connect } from 'react-redux';
import SetsuImage, { SetsuImageProps } from '../components/SetsuImage';
import { RootState } from '../reducers/index';

const mapStateToProps = (state: RootState): SetsuImageProps => ({
  xCenter: state.setsu.xCenter,
  yCenter: state.setsu.yCenter,
  fontSize: state.setsu.fontSize,
  textValue: state.setsu.textValue
});

export default connect(mapStateToProps)(SetsuImage);
