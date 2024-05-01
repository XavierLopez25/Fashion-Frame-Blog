import React from 'react'
import '../../styles/LoginRegister.css'
import { FaUser } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'

export const LoginRegister = () => {


    const [action, setAction] = React.useState('');

    const registerLink = () => {
        setAction('active');
    }

    const loginLink = () => {
        setAction('');
    }

  return (
    <div className={`wrapper ${action}`}>
        <div className="form-box login">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required/>
                    <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required/>
                    <FaLock className='icon'/>
                </div>

                <div className="remember-forgot">
                    <label><input type='checkbox'/>Remember me</label>
                    <a href='#'>Forgot password?</a>
                </div>

                <button type='submit' className='buttonLR'>Login</button>

                <div className='register-link'>
                    <p>Don't have an account? <a href='#' onClick={registerLink}>Register</a></p>
                </div>
            </form>
        </div>

        <div className="form-box register">
            <form action="">
                <h1>Register</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required/>
                    <FaUser className='icon'/>
                </div>

                <div className="input-box">
                    <input type="email" placeholder='Email' required/>
                    <FaEnvelope className='icon'/>
                </div>

                <div className="input-box">
                    <input type="password" placeholder='Password' required/>
                    <FaLock className='icon'/>
                </div>

                <div className="remember-forgot">
                    <label><input type='checkbox'/>I agree with terms & conditions</label>
                </div>

                <button type='submit' className='buttonLR'>Register</button>

                <div className='register-link'>
                    <p>Already have an account? <a href='#' onClick={loginLink}>Login</a></p>
                </div>
            </form>
        </div>

    </div>
  )
}
