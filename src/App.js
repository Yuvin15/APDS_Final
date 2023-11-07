import React, { useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Navbar from './components/Navigation/Navbar';
import { StaticPost, Post } from './components/Post/Post';
import SearchBox from './components/SearchBar/SearchBar';
import CreatePost from './components/Post/CreatePost';
import GetPosts from './components/Post/GetPosts';

const postData = [ 
  { 
      department: "Web Tech", 
      title: "Top 7 JavaScript One liners", 
      author: "Amit Singh", 
      designation: "TCE", 
      info: `This post tells you about best approaches  
             to write single line codes in JavaScript.  
             Use this post as a quick guide to  
               short but important JS codes`, 
  }, 
  { 
      department: "DSA", 
      title: "Top Interview DSA Questions", 
      author: "Jatin Sharma", 
      designation: "TCE", 
      info: `No need to worry about technical round interviews  
             as this post will guide you step by step to  
             prepare for DSA round`, 
  },
  { 
    department: "DSA", 
    title: "Top Interview DSA Questions", 
    author: "Jatin Sharma", 
    designation: "TCE", 
    info: `No need to worry about technical round interviews  
           as this post will guide you step by step to  
           prepare for DSA round`, 
  },
  { 
      department: "Cotent", 
      title: "Best Antiviruses of 2023", 
      author: "Shobhit Sharma", 
      designation: "TCE", 
      info: `Worried about your PC safety? No Problem,  
             this post tells you about the best antiviruses  
             to choose in 2023`, 
  } 
] 

function App() {
  
  const [showCreatePost, setShowCreatePost] = useState(false);
  const handlePostCreate = async (newPost) => {
    try {
      const response = await fetch('https://localhost:3003/api/posts', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Post created successfully', data);
      } else {
        const errorData = await response.json();
        console.error('Failed to create post', errorData);
      }
    } catch (error) {
      console.error('There was an error creating the post', error);
    }
  };

  return (
    <div className="App">
      <header className="main-headings">
        Welcome to the wannabe Government Blog site
      </header>
      <Login />
      <header className="App-header">
        {/* <SearchBox />  */}
      </header>
      <div className='button-container'>
        <button className='button-margin custom-button large-button' onClick={() => setShowCreatePost(true)}>
          Create a New Post
        </button>
        {showCreatePost && (
          <CreatePost onClose={() => setShowCreatePost(false)} onPostCreate={handlePostCreate} />
        )}
      </div>
      <p>
          &nbsp;
        </p> 
      {/* <main>
        {postData.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </main> */}
      <GetPosts/>
    </div>
  );
}

export default App;