import React, { useState } from 'react';
import { Link } from "react-router-dom"; 
import axios from 'axios';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/login', { email, password });
      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      alert('Login successful!');
      window.location.href = '/users';
    } catch (error) {
      alert('Login failed: ' + (error.response?.data?.error || 'Unknown error'));
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
      <li><Link to="/">Início</Link></li>
    </div>
  );
}

export default SignIn;
