import React, { FC, useEffect } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from '../../reducers/index';
import Setsu, { SetsuProps } from '../../components/Setsu/index';
import { RouteComponentProps, withRouter } from 'react-router';
import { getSetsuUrl } from '../../actions/setsu';
interface StateProps {
  src: string;
  isProcessing: boolean;
}

interface DispatchProps {
  getSetsuUrl: (id: string) => void;
}

type EnhancedMembersProps = StateProps &
  SetsuProps &
  DispatchProps &
  RouteComponentProps<{ id: string }>;

const mapStateToProps = (state: RootState) => ({
  src: state.setsu.src,
  isProcessing: state.setsu.isProcessing
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getSetsuUrl: (id: string) => getSetsuUrl.start(id)
    },
    dispatch
  );

const SetsuContainer: FC<EnhancedMembersProps> = ({
  src,
  isProcessing,
  match,
  location,
  getSetsuUrl
}) => {
  useEffect(() => {
    getSetsuUrl(match.params.id);
  }, []);
  return (
    <>
      {/* TODO: Loading Animation */}
      <Setsu src={src} path={location.pathname} isProcessing={isProcessing} />
    </>
  );
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SetsuContainer)
);
