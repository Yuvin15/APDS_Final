import React, { useState } from 'react';
import './Login.css'

const Login = () => {
  const [username, setUsername] = useState(''); // Get the username
  const [password, setPassword] = useState(''); // Get the password
  const [showPopup, setShowPopup] = useState(true); // Get the popup
  const [alertMessage, setAlertMessage] = useState(null); // For custom alert message

  const togglePopup = () => { // For the popup
    setShowPopup(!showPopup);
    setUsername(''); 
    setPassword(''); 
  };
// Below function is to handle the connection and do the sign up function
  const handleSignup = async (event) => {
    event.preventDefault(); 

    try {
      const response = await fetch('https://localhost:3003/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
    // Gets the data from the api
      const data = await response.json();

      if (response.status === 201) {
        console.log('Signup successful', data);
      } else {
        console.error('Signup failed', data.error);
      }
    } catch (error) {
      console.error('There was an error!', error);
    }
  };
  // Below function is to handle the connection and do the login function
  const handleLogin = async (event) => {
    event.preventDefault(); 

    try {
      const response = await fetch('https://localhost:3003/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      // Gets the data from the api
      const data = await response.json();

      if (response.status === 200) {
        console.log('Login successful', data);
        localStorage.setItem('token', data.token);
        setShowPopup(false);
      } else {
        setAlertMessage("WRONG USERNAME AND/OR PASSWORD, PLEASE RETRY");
        console.error('Login failed', data.message);
      }
    } catch (error) {
      setAlertMessage("Error in logging in");
      console.error('There was an error!', error);
    }
  };

  return (
    <>
    {/* <div className='main-headings'>
        Welcome to the Wannabe Government Website
    </div> */}
      {showPopup && ( 
        <div className="login-backdrop">
          <div className="login-container">
          {alertMessage && <div className="alert">{alertMessage}</div>}
            <h2 className='main-headings'>Login</h2>
            <form onSubmit={handleLogin}>
              <div>
                <label className="username">Username</label>
                <p>
                </p>
                <input
                className="input"
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
                {/* &nbsp;     */}
              <div>
                <label className="password">Password</label>
                <p>
                </p>
                <input
                className="input"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button classname='button' type="submit">Login</button>
              <p>
              &nbsp;
              </p>
              <button className='button' onClick={handleSignup}>Sign Up</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;