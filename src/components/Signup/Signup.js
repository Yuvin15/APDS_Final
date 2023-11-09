import React, { useState } from 'react';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (event) => {
    event.preventDefault(); 

    try {
      const response = await fetch('https://localhost:3003/api/users/signup', { //Backend URL
        method: 'POST', // Pushes to DB
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password }) // What it pushes
      });

      const data = await response.json();

      if (response.status === 201) {
        console.log('Signup successful', data); // Used for testing
      } else {
        console.error('Signup failed', data.error); // Used for testing
      }
    } catch (error) {
      console.error('There was an error!', error); // Used for testing
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
