import React, { useState, useEffect } from 'react';
import './Post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

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
        console.log(data);
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

  const handleDelete = async (Imageid) => {
    try {
      const response = await fetch('https://localhost:3003/api/posts/delete', {  
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QzIiwidXNlcmlkIjoiNjUwN2VmOTI0MjVmNDc0ZGQ5YTlhMGY5IiwiaWF0IjoxNjk1MDIxODQ2LCJleHAiOjE2OTUwMjU0NDZ9.AKRx9SQq8nEtRFkUapl45amviGH47FDQRQnbg-Qog6g'
          },
        body: JSON.stringify({ Imageid })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result.message); 

      setPosts(posts.filter(post => post.ImageID !== Imageid));

    } catch (error) {
      console.error('There was an error deleting the post:', error);
      setError(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h1 className='main-headings'>All Posts</h1>
      {error && <p className="error-main-headings">{error}</p>}
      {posts.length > 0 ? (
        <div className="posts">
          {posts.map((post) => ( 
            <div key={post.Imageid} className="post">
              <h2>{post.Imageid}</h2>
              <div className="post-content">
                <p>{post.Imagecaption}</p>
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  onClick={() => handleDelete(post.Imageid)}
                  className="delete-icon"
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className='error-main-headings'>No posts to display. Try refreshing the page.</p>
      )}
    </div>
  );
};

export default GetPosts;
