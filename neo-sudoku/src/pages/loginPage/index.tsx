import React from 'react';
import Header from '../../components/header';
import LoginForm from '../../components/loginForm';

const LoginPage : React.FunctionComponent = () => {
    return (<>
        <Header/>
        <main>
            <LoginForm/>
        </main>
    </>)
}

export default LoginPage;