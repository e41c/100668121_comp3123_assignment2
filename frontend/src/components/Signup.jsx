import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signupUser } from '../api'; // Import the signupUser function

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      // Assuming signupUser creates a new user and returns some user data or token
      const userData = await signupUser({ username, password });

      // Store session information (e.g., user token) in localStorage
      // For example, if signupUser returns a token, you can store it like this:
      localStorage.setItem('userToken', userData.token);

      // Redirect to the desired page after successful signup
      navigate('/login');
    } catch (error) {
      console.error('Signup failed:', error);
      // Handle the error or display a message to the user
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleSignup}>
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
