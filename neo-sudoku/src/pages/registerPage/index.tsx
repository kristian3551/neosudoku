import React from 'react';
import Header from '../../components/header';
import RegisterForm from '../../components/registerForm';

const RegisterPage : React.FunctionComponent = () => {
    return (<>
        <Header/>
        <main>
            <RegisterForm/>
        </main>
    </>)
}

export default RegisterPage;