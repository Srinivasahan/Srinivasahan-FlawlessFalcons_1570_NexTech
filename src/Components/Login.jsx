import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    // Regular expression to match PSG Tech email domains
    const psgTechEmailRegex = /^[a-zA-Z0-9._%+-]+@psg\.edu$/;

    if (psgTechEmailRegex.test(email)) {
      // Valid PSG Tech email domain
      // Here you would typically perform actual login/authentication
      alert(`Login successful! Role: ${role}`);
      setErrorMessage('');
    } else {
      // Invalid PSG Tech email domain
      setErrorMessage('Please enter a valid college email address');
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>
            Role:
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="student">Student</option>
              <option value="faculty">Faculty</option>
            </select>
          </label>
          <input
            type="email"
            placeholder="Enter your College email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Link to="/Homepage">
          <button type="submit">Login</button>
          </Link>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default Login;