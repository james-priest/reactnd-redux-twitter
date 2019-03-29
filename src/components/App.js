import React, { Component } from 'react';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import LoadingBar from 'react-redux-loading';
import NewTweet from './NewTweet';
import TweetPage from './TweetPage';

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }
  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true ? null : (
          <NewTweet />
          // <TweetPage match={{ params: { id: 'hbsc73kzqi75rg7v1e0i6a' } }} />
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  };
}

export default connect(
  mapStateToProps,
  { handleInitialData }
)(App);
