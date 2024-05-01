import React from 'react'
import '../../styles/LoginRegister.css'
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import Input from '../Input/Input'
import FormLink from '../FormLink/FormLink'
import CheckBoxWLabel from '../CheckBoxWLabel/CheckBoxWLabel'

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
                <Input type="text" placeholder="Username" icon={FaUser} />
                <Input type="password" placeholder="Password" icon={FaLock} />
                <CheckBoxWLabel label="Remember me" isChecked />
                <button type='submit' className='buttonLR'>Login</button>
                <FormLink message='Don’t have an account?' actionLink='#' actionText='Register' onClick={registerLink} />
            </form>
        </div>

        <div className="form-box register">
            <form action="">
                <h1>Register</h1>
                <Input type="text" placeholder="Username" icon={FaUser} />
                <Input type="email" placeholder="Email" icon={FaEnvelope} />
                <Input type="password" placeholder="Password" icon={FaLock} />
                <CheckBoxWLabel label="I agree with terms & conditions" />
                <button type='submit' className='buttonLR'>Register</button>
                <FormLink message="Already have an account?" actionLink="#" actionText="Login" onClick={loginLink} />
            </form>
        </div>

    </div>
  )
}
