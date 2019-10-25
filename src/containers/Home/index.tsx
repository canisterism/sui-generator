import React, { FC } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from '../../reducers/index';
import { complete } from '../../actions/setsu';
import Home, { HomeProps } from '../../components/Home/index';

interface StateProps {
  isProcessing: Boolean;
  error: Boolean;
}

interface DispatchProps {
  onClickComplete: () => void;
}

const mapStateToProps = (state: RootState): StateProps => ({
  isProcessing: state.setsu.isProcessing,
  error: state.setsu.error
});

const DispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      onClickComplete: () => complete.start()
    },
    dispatch
  );

type EnhancedHomeProps = HomeProps & StateProps & DispatchProps;

const HomeContainer: FC<EnhancedHomeProps> = ({
  isProcessing,
  error,
  onClickComplete
}) => (
  <>
    <Home
      isProcessing={isProcessing}
      error={error}
      onClickComplete={onClickComplete}
    />
  </>
);

export default connect(
  mapStateToProps,
  DispatchToProps
)(HomeContainer);
