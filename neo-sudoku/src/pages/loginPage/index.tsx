import React from 'react';
import Header from '../../components/header';
import LoginForm from '../../components/loginForm';
import { connect } from 'react-redux';
import MessageBox from '../../components/messageBox';

const LoginPage : React.FunctionComponent<{ messages: any;}> = ({ messages}) => {
    return (<>
        <Header/>
        {messages?.hasMessage && (<MessageBox messageType={messages.messageType}
            message={messages.message} />)}
        <main>
            <LoginForm/>
        </main>
    </>)
}

export default connect((state: any) => {
    return {
        messages: state?.messages
    }
}, null)(LoginPage);