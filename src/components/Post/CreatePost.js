import React, { useState } from 'react';
import './Post.css'

function CreatePost({ onClose, onPostCreate }) {
  
  // Below are the fields in the db
  const [imageId, setImageId] = useState('');
  const [imageCaption, setImageCaption] = useState('');
  const [likes, setLikes] = useState(0);
  const [postSaved, setPostSaved] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);

  // This is the actual code to create the post
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
      setAlertMessage("Created Successfully. Please reload the page.");      
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
      {alertMessage && <div className="alert1">{alertMessage}</div>}
    </div>
  );
}

export default CreatePost;
