import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navigation/Navbar';
import Post from './components/Post/Post'; 
import SearchBox from './components/SearchBar/SearchBar'; 

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
  return (
    <div className="App">
      <Navbar />
      <header className="main-headings">Welcome to the wannabe Government Blog site</header>
      <header className="App-header">
        <SearchBox /> 
      </header>
      <main>
        {postData.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </main>
    </div>
  );
}

export default App;
