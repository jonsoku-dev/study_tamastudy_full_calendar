import React, { Component } from 'react';
import NoticePresenter from './NoticePresenter';
import axios from 'axios';

export default class NoticeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res =>
      this.setState({
        posts: res.data,
      }),
    );
  }

  render() {
    const { posts } = this.state;
    return <NoticePresenter posts={posts} />;
  }
}
