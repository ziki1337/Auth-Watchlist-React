import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import LoginPage from './login';
import RegisterPage from './register';
import './style.css'
import { Box } from '@mui/material';
import { instance } from '../../utils/axios';
import { log } from 'console';
import { useAppDispatch } from '../../utils/hook';
import { login } from '../../store/slice/auth';
import { AppErrors } from '../../common/errors';

const AuthRootComponent: React.FC = (): JSX.Element => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [userName, setUsername] = useState('');
    const [firstName, setFirstname] = useState('');
    const dispatch = useAppDispatch();
    const navigate = useNavigate();


    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        if (location.pathname === '/login') {
            try {
                const userData = {
                    email,
                    password
                }
                const user = await instance.post('auth/login', userData);
                await dispatch(login(user.data))
                navigate( '/' )
                console.log(user.data);
            }
            catch (e) {
                return e;
            }
        }
        else {
            if(password === repeatPassword)
            {
                try {
                    const userData = {
                        firstName,
                        userName,
                        email,
                        password
                    }
                    const newUser = await instance.post('auth/register', userData);
                    await dispatch(login(newUser.data))
                    navigate( '/' )
                }
                catch(e) {
                    console.log(e);
                    return e;
                }
            }
            else {
                throw new Error(AppErrors.PasswordDoNotMutch);
            }
        }
    }
    const location = useLocation();
    return (
        <div className='root'>
            <form className="form" onSubmit={handleSubmit}>
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    flexDirection='column'
                    maxWidth={640}
                    margin='auto'
                    padding={5}
                    borderRadius={5}
                    boxShadow={'5px 5px 10px #ccc'}
                >
                {
                    location.pathname === "/login"
                         ? <LoginPage setEmail={setEmail} setPassword={setPassword} navigate={navigate}/> : location.pathname === "/register"
                             ? <RegisterPage 
                             setEmail={setEmail} 
                             setPassword={setPassword} 
                             setRepeatPassword={setRepeatPassword} 
                             setUsername={setUsername} 
                             setFirstname={setFirstname}
                             navigate={navigate}/> 
                             : null
                }
                </Box>
            </form>
        </div>
    )
    // return (location.pathname === "/login" ? <LoginPage /> : location.pathname === "/register" ? <RegisterPage /> : null);

};

export default AuthRootComponent;