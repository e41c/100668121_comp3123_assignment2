import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Assuming loginUser returns some user data or token upon successful login
      const userData = await loginUser({ username, password });

      // Store session information (e.g., user token) in localStorage
      // For example, if loginUser returns a token, you can store it like this:
      localStorage.setItem('userToken', userData.token);

      // Redirect to the desired page after successful login
      navigate('/employee-list');
    } catch (error) {
      console.error('Login failed:', error);
      // Handle the error or display a message to the user
    }
  };

  return (
    <div>
      <h2>Login</h2>
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
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
