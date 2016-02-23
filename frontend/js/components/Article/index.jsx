"use strict";

import React from "react";
import Comments from "../Comments/";

export default class extends React.Component {

  selectTitle() {
    const self = this;

    return function(e) {
      e.preventDefault();
      self.props.selectHandler();
    };
  }

  render() {
    let comments = (this.props.article.comments)
      ? <Comments comments={this.props.article.comments} />
      : null;
    let selectedStyle = (this.props.selected) ? {color: "brown"} : null;
    let showedStyle = (this.props.showed) ? null : {display: "none"};

    return (
      <li>
        <h2
          onClick={this.props.toggleHandler}
          style={selectedStyle}
        >
          {this.props.article.title}
        </h2>
        <div style={showedStyle}>
          <p>{this.props.article.body}</p>
          <p><a onClick={this.selectTitle()} href="#">select</a></p>
          {comments}
        </div>
      </li>
    );
  }

};
