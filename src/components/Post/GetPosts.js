import React, { useState, useEffect } from 'react';
import './Post.css'

const GetPosts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://localhost:3003/api/posts', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QzIiwidXNlcmlkIjoiNjUwN2VmOTI0MjVmNDc0ZGQ5YTlhMGY5IiwiaWF0IjoxNjk1MDIxODQ2LCJleHAiOjE2OTUwMjU0NDZ9.AKRx9SQq8nEtRFkUapl45amviGH47FDQRQnbg-Qog6g'
          }
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.posts) {
          setPosts(data.posts);
        } else {
          setError('No posts found');
        }
      } catch (error) {
        setError(`Error: ${error.message}`);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>All Posts</h1>
      {error && <p className="error">{error}</p>}
      {posts.length > 0 ? (
        <div className="posts">
          {posts.map((post, index) => (
            <div key={index} className="post">
              <h2>{post.ImageID}</h2>
              <p>{post.Imagecaption}</p>
            </div>
          ))}
        </div>
      ) : (
        !error && <p>Error</p>
      )}
    </div>
  );
};

export default GetPosts;
