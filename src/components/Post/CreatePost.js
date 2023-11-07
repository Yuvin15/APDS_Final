import React, { useState } from 'react';
import './Post.css'

function CreatePost({ onClose, onPostCreate }) {
  
  const [imageId, setImageId] = useState('');
  const [imageCaption, setImageCaption] = useState('');
  const [likes, setLikes] = useState(0);
  const [postSaved, setPostSaved] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    const post = {
      Imageid: imageId,
      Imagecaption: imageCaption,
      likes: likes,
      PostSaved: postSaved
    };
    if (onPostCreate) {
      console.log("working");
      alert("Success");      
      onPostCreate(post);
    }
  };

  return (
    <div className='create-post-container'>
      <h2>Create a new Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='imageId' className='inputLabels'>Title</label>
        <input 
          id='imageId'
          className='inputField' 
          type="text"
          value={imageId}
          onChange={(e) => setImageId(e.target.value)}
        />
        
        <label htmlFor='imageCaption' className='inputLabels'>Description</label>
        <input 
          id='imageCaption'
          className='inputField' 
          type="text"
          value={imageCaption}
          onChange={(e) => setImageCaption(e.target.value)}
        />
        <p>&nbsp;</p>
        <button type='submit' className='custom-button'>Submit Post</button>
        <p>
          &nbsp;
        </p>
        <button type='button' className='custom-button' onClick={onClose}>Close</button>
      </form>
    </div>
  );
}

export default CreatePost;
