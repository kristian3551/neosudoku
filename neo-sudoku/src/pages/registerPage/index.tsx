import React from 'react';
import Header from '../../components/header';
import RegisterForm from '../../components/registerForm';
import MessageBox from '../../components/messageBox';
import { connect } from 'react-redux';

const RegisterPage: React.FunctionComponent<{ messages: any }> = ({ messages }) => {
    return (<>
        <Header />
        {messages?.hasMessage && (<MessageBox messageType={messages.messageType}
            message={messages.message} />)}
        <main>
            <RegisterForm />
        </main>
    </>)
}

export default connect((state: any) => {
    return {
        messages: state?.messages
    }
}, null)(RegisterPage);