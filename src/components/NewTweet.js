import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddTweet } from '../actions/tweets';

class NewTweet extends Component {
  state = {
    text: ''
  };
  handleChange = e => {
    const text = e.target.value;

    this.setState(() => ({
      text
    }));
  };
  handleSubmit = e => {
    e.preventDefault();

    const { text } = this.state;
    const { id } = this.props;

    this.props.handleAddTweet(text, id);

    // console.log('New Tweet:', text);
    // console.log('ReplyingTo:', id);

    this.setState(() => ({
      text: ''
    }));
  };
  render() {
    const { text } = this.state;

    // todo: Redirect if submitted

    const tweetLeft = 280 - text.length;

    return (
      <div>
        <h3 className="center">
          {this.props.id ? 'Reply to tweet' : 'Compose new tweet'}
        </h3>
        <form className="new-tweet" onSubmit={this.handleSubmit}>
          <textarea
            placeholder="What's happening?"
            value={text}
            onChange={this.handleChange}
            className="textarea"
            maxLength={280}
          />
          {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>}
          <button className="btn" type="submit" disabled={text === ''}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const actionCreators = { handleAddTweet };

export default connect(
  null,
  actionCreators
)(NewTweet);
