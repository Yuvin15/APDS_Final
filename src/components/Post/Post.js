import React from 'react';
import './Post.css'; 

const Post = ({ post }) => (
  <article className="post">
    <h2 className="post-title">{post.title}</h2>
    <p className="post-meta">Department: {post.department} | Author: {post.author}, {post.designation}</p>
    <p className="post-info">{post.info}</p>
  </article>
);

export default Post;
