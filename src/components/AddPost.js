import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions';

const AddPost = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addPost(input.value));
          input.value = '';
        }}
      >
        <input ref={node => { input = node; }} />
        <button type="submit">
          Add Post
        </button>
      </form>
    </div>
  );
};

export default connect()(AddPost);
