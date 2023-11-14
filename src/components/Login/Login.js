import React, { useState, useEffect } from 'react';
import './Login.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(true);
  const [alertMessage, setAlertMessage] = useState(null); 
  const [loginAttempts, setLoginAttempts] = useState(0); // Brute Force Protection
  const [isLockedOut, setIsLockedOut] = useState(false); // Brute Force Protection

  useEffect(() => {
    if (loginAttempts >= 3) {
      setIsLockedOut(true);
      setAlertMessage("Too many failed attempts. Please wait for 30 seconds.");
      const timer = setTimeout(() => {
        setLoginAttempts(0);
        setIsLockedOut(false);
        setAlertMessage(null);
      }, 
      30000); // 30 seconds lockout

      return () => clearTimeout(timer);
    }
  }, [loginAttempts]);
  const togglePopup = () => { // For the popup
    setShowPopup(!showPopup);
    setUsername(''); 
    setPassword(''); 
  };
// Below function is to handle the connection and do the sign up function
  const handleSignup = async (event) => {
    event.preventDefault(); 

    try {
      const response = await fetch('https://localhost:3003/api/users/signup', { // Backend url
        method: 'POST', // Post to push to db
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password }) // Pushes the username+password
      });
    // Gets the data from the api
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
  // Below function is to handle the connection and do the login function
  const handleLogin = async (event) => {
    event.preventDefault();
    if (isLockedOut) return; // Prevent login attempts during lockout

    try {
      const response = await fetch('https://localhost:3003/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      const data = await response.json();

      if (response.status === 200) {
        console.log('Login successful', data);
        localStorage.setItem('token', data.token);
        setShowPopup(false);
      } else {
        setLoginAttempts(attempts => attempts + 1);
        setAlertMessage("WRONG USERNAME AND/OR PASSWORD, PLEASE RETRY");
        console.error('Login failed', data.message);
      }
    } catch (error) {
      setLoginAttempts(attempts => attempts + 1);
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
              <button className='button' type="submit" disabled={isLockedOut}>Login</button>
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