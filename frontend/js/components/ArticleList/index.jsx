"use strict";

import React from "react";
import Article from "../Article/";

export default class extends React.Component {

  constructor() {
    super();
    this.state = {
      selected: {},
      showed: {}
    };
  }

  selectArticle(id) {
    const self = this;

    return function() {
      let newState = self.state;

      newState.selected[id] = !newState.selected[id];
      self.setState(newState);
    };
  }

  // Основное задание
  toggleArticle(id) {
    const self = this;

    return function() {
      let newState = self.state;

      newState.showed[id] = !newState.showed[id];
      self.setState(newState);
    };
  }

  // Опциональное задание
  // toggleArticle(id) {
  //   const self = this;
  //
  //   return function() {
  //
  //     self.setState({
  //       showed: {
  //         [id]: !self.state.showed[id]
  //       }
  //     });
  //   };
  // }

  render() {
    let articles = this.props.articles.map((item) =>
      <Article
        key={item.id}
        article={item}
        selectHandler={this.selectArticle(item.id)}
        toggleHandler={this.toggleArticle(item.id)}
        selected={this.state.selected[item.id]}
        showed={this.state.showed[item.id]}
      />
    );

    return (
      <ul>
        {articles}
      </ul>
    );
  }


};
