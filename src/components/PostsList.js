import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class PostsList extends Component {
  componentDidMount() { 
    this.props.fetchPosts();
  }
  
  render() {
    const { posts } = this.props;
    if (!posts.length){
      return (<h2>LOADING</h2>)
    }
    return (
      <ul>          
        {posts.map(post => (
            <li key={post.id}>
              {post.title} {post.content}
            </li>
          ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

PostsList = connect(
  mapStateToProps,
  actions
)((PostsList));

export default PostsList;