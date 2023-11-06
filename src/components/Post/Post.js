import React from 'react';
import './Post.css'; 

function StaticPost({ onClose }) {
  return (
    <div className='create-post-container'>
      <h2>Create a new Post</h2>
      <label className='inputLabels'>Enter the Post Title</label><input className='inputLabels' type={"text"}></input>
      <p>&nbsp;</p>
      <label className='inputLabels'>Enter the Department</label><input className='inputLabels' type={"text"}></input>
      <p>&nbsp;</p>
      <label className='inputLabels'>Enter the Description</label><input className='inputLabels' type={"text"}></input>
      <p>&nbsp;</p>
      <button className='custom-button' onClick={onClose}>Close</button>
    </div>
  );
}
const Post = ({ post }) => (
  <article className="post">
    <h2 className="post-title">{post.title}</h2>
    <p className="post-meta">Department: {post.department} | Author: {post.author}, {post.designation}</p>
    <p className="post-info">{post.info}</p>
  </article>
);

export { StaticPost, Post };
