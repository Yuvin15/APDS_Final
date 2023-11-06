import React, { useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Navbar from './components/Navigation/Navbar';
import { CreatePost, Post } from './components/Post/Post';
import SearchBox from './components/SearchBar/SearchBar';
import Signup from './components/Signup/Signup';

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

  return (
    <div className="App">
      <Navbar />
      <header className="main-headings">
        Welcome to the wannabe Government Blog site
      </header>
      <Login/>
      <header className="App-header">
        <SearchBox />  
      </header>
      <div className='button-container'>
      <button className='button-margin custom-button large-button' onClick={() => setShowCreatePost(true)}>Create a New Post</button>
      <p>&nbsp;</p>
      {showCreatePost && (
        <CreatePost onClose={() => setShowCreatePost(false)} />
      )}
      </div>
      <p>
      &nbsp;
      </p>
      <main>
        {postData.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </main>
      <div className="App">
      <Signup />
      </div>
    </div>
  );
}

export default App;
