import React, { Component } from 'react';
import BoardPresenter from './BoardPresenter';
import boards from './Board.json';
export default class BoardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards,
    };
  }
  // componentDidMount() {}
  render() {
    const { boards } = this.state;
    return <BoardPresenter boards={boards} />;
  }
}
