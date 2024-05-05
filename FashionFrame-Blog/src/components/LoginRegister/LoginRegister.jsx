import React, { useState } from 'react';
import '../../styles/LoginRegister.css';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Input from '../Input/Input';
import FormLink from '../FormLink/FormLink';
import CheckBoxWLabel from '../CheckBoxWLabel/CheckBoxWLabel';
import SuccessMessage from '../SuccessMessage/SuccessMessage';
import { useAuth } from '../../hooks/AuthContext';

export const LoginRegister = () => {
  const { login } = useAuth();

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password_md5, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [action, setAction] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const registerLink = () => {
    setAction('active');
  };

  const loginLink = () => {
    setAction('');
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password_md5 }),
    });
    const data = await response.json();
    if (response.status === 200) {
      localStorage.setItem('token', data.token);
      login(data.token, { username: data.username, role: data.role });
      navigate('/home');
    } else {
      alert(data.message);
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password_md5 }),
    });
    const data = await response.json();
    if (response.status === 201) {
      setSuccessMessage('Registration successful! Redirecting to login...');
      setTimeout(() => {
        loginLink();
      }, 3000);
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="login-register-page">
      <div className={`wrapper ${action}`}>
        {successMessage && <SuccessMessage message={successMessage} />}
        <div className="form-box login">
          <form onSubmit={handleLogin}>
            <h1>Login</h1>
            <Input
              type="text"
              placeholder="Username"
              icon={FaUser}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              icon={FaLock}
              value={password_md5}
              onChange={(e) => setPassword(e.target.value)}
            />
            <CheckBoxWLabel label="Remember me" isChecked />
            <button type="submit" className="buttonLR">
              Login
            </button>
            <FormLink
              message="Don’t have an account?"
              actionLink="#"
              actionText="Register"
              onClick={registerLink}
            />
          </form>
        </div>

        <div className="form-box register">
          <form onSubmit={handleRegister}>
            <h1>Register</h1>
            <Input
              type="text"
              placeholder="Username"
              icon={FaUser}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="email"
              placeholder="Email"
              icon={FaEnvelope}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              icon={FaLock}
              value={password_md5}
              onChange={(e) => setPassword(e.target.value)}
            />
            <CheckBoxWLabel label="I agree with terms & conditions" />
            <button type="submit" className="buttonLR">
              Register
            </button>
            <FormLink
              message="Already have an account?"
              actionLink="#"
              actionText="Login"
              onClick={loginLink}
            />
          </form>
        </div>
      </div>
    </div>
  );
};
