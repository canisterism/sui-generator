import React, { FC } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { RootState } from '../reducers/index';
import TweetButton from '../components/TweetButton';

interface StateProps {
  text: string;
}
const mapStateToProps = (state: RootState) => ({
  text: state.setsu.textValue.split('').join('')
});

type EnhancedMembersProps = StateProps & RouteComponentProps;

const TweetButtonContainer: FC<EnhancedMembersProps> = ({ text, location }) => (
  <>
    <TweetButton text={text} path={location.pathname} />
  </>
);

export default withRouter(connect(mapStateToProps)(TweetButtonContainer));
