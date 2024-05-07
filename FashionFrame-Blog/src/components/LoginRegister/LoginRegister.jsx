import { useState } from 'react';
import { useForm } from 'react-hook-form';
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
  const [action, setAction] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    formState: { errors: errorsLogin },
  } = useForm();

  const {
    register: registerRegister,
    handleSubmit: handleSubmitRegister,
    formState: { errors: errorsRegister },
  } = useForm();

  const registerLink = () => {
    setAction('active');
  };

  const loginLink = () => {
    setAction('');
  };

  const handleLogin = async (formData) => {
    const { username, password_md5 } = formData;
    const response = await fetch('https://api-fashion-frame.vercel.app/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password_md5 }),
    });
    const data = await response.json();
    if (response.status === 200) {
      localStorage.setItem('token', data.token);
      login(data.token, { id: data.id, username: data.username, role: data.role });
      navigate('/home');
    } else {
      alert(data.message);
    }
  };

  const handleRegister = async (formData) => {
    const { username, email, password_md5 } = formData;
    const response = await fetch('https://api-fashion-frame.vercel.app/register', {
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
          <form onSubmit={handleSubmitLogin(handleLogin)}>
            <h1>Login</h1>
            <Input
              type="text"
              placeholder="Username"
              icon={FaUser}
              {...registerLogin('username', { required: 'Username is required' })}
            />
            {errorsLogin.username && <span>{errorsRegister.username.message}</span>}
            <Input
              type="password"
              placeholder="Password"
              icon={FaLock}
              {...registerLogin('password_md5', { required: 'Password is required' })}
            />
            {errorsLogin.password_md5 && <span>{errorsRegister.password_md5.message}</span>}
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
          <form onSubmit={handleSubmitRegister(handleRegister)}>
            <h1>Register</h1>
            <Input
              type="text"
              placeholder="Username"
              icon={FaUser}
              {...registerRegister('username', { required: 'Username is required' })}
            />
            <Input
              type="email"
              placeholder="Email"
              icon={FaEnvelope}
              {...registerRegister('email', { required: 'Email is required' })}
            />
            <Input
              type="password"
              placeholder="Password"
              icon={FaLock}
              {...registerRegister('password_md5', { required: 'Password is required' })}
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
