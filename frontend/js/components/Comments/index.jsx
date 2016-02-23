"use strict";

import React from "react";

export default class extends React.Component {

  constructor() {
    super();
    this.state = {
      showed: false
    };
  }

  toggleComments() {
    const self = this;

    return function(e) {
      e.preventDefault();
      self.setState({
        showed: !self.state.showed
      });
    };
  }

  render() {
    let comments = this.props.comments.map((comment) =>
      <li key={comment.id}>
        {comment.text}
      </li>
    );
    let showedStyle = (this.state.showed) ? null : {display: "none"};

    return (
      <div>
        <p><a onClick={this.toggleComments()} href="#">show comments</a></p>
        <ul style={showedStyle}>{comments}</ul>
      </div>
    );
  }

};
