import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getErrorMessage, getIsFetching } from '../reducers';

class PostsList extends Component {
  componentDidMount() { 
    this.props.fetchPosts();
  }
  
  render() {
    const { isFetching, posts, errorMessage, updatePost, deletePost } = this.props;
    if (isFetching && !posts.length){
      return (<h2>LOADING</h2>);
    }
    if (errorMessage && !posts.length) {
      return (<h2>{errorMessage}</h2>);
    }
    return (
      <ul>          
        {posts.map(post => (
            <li onClick={()=>updatePost(post.id)} key={post.id}>
              {post.title} {post.content} {post.status? "udah" : "belom"}
              <h2 onClick={()=>deletePost(post.id)}>HAPUS</h2>
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