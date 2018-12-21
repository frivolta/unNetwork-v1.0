import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-router-dom';
import PostForm from './PostForm';
import Spinner from '../Common/Spinner';

class Post extends Component {
  render() {
    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <PostForm/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Post;