import React from 'react';
import Header from '../../components/header';
import GetStartedMain from '../../components/getStartedMain';
import { connect, useSelector } from 'react-redux';
import MessageBox from '../../components/messageBox';


const GetStartedPage: React.FunctionComponent<{}> = () => {
    const messages = useSelector((state: any) => state?.messages);
    return (<>
        <Header/>
        {messages?.hasMessage && (<MessageBox messageType={messages.messageType}
            message={messages.message} />)}
        <GetStartedMain/>
    </>)
}

export default GetStartedPage;