import { Button, TextField, Typography } from '@mui/material';
import React from 'react'

const RegisterPage = () => {

    return (
        <>
            <Typography variant="h2" fontFamily='Popins' textAlign='center'>Регистрация</Typography>
            <Typography variant="body1" marginBottom={3} fontFamily='Popins' textAlign='center'>Введите данные для регистрации</Typography>
            <TextField fullWidth={true} margin='normal' label="Name" variant="outlined" placeholder='Введите ваше имя'/>
            <TextField fullWidth={true} margin='normal' label="Username" variant="outlined" placeholder='Введите ваш username'/>
            <TextField fullWidth={true} margin='normal' label="Email" variant="outlined" placeholder='Введите ваш email'/>
            <TextField type='password' fullWidth={true} margin='normal' label="Password" variant="outlined" placeholder='Введите ваш пароль'/>
            <TextField type='password' fullWidth={true} margin='normal' label="Password" variant="outlined" placeholder='Повторите ваш пароль'/>
            <Button sx={{fontFamily:'Popins', marginTop: 2, marginBottom: 2, width: '60%'}} variant="contained">Регистрация</Button>
            <Typography variant="body1" sx={{fontFamily: 'Popins'}}>У вас есть аккаунт?<span className='incitingText'>Авторизация</span></Typography>
        </>
    );
};

export default RegisterPage;