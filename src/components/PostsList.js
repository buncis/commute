import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getErrorMessage, getIsFetching } from '../reducers';

class PostsList extends Component {
  componentDidMount() { 
    this.props.fetchPosts();
  }
  
  render() {
    const { isFetching, posts, errorMessage } = this.props;
    if (isFetching && !posts.length){
      return (<h2>LOADING</h2>);
    }
    if (errorMessage && !posts.length) {
      return (<h2>{errorMessage}</h2>);
    }
    return (
      <ul>          
        {posts.map(post => (
            <li key={post.id}>
              {post.title} {post.content} {post.status? "udah" : "belom"}
            </li>
          ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    errorMessage: getErrorMessage(state),
    isFetching: getIsFetching(state),
  };
};

PostsList = connect(
  mapStateToProps,
  actions
)((PostsList));

export default PostsList;