import React from 'react';
import styles from './styles.module.css';
import Header from '../../components/header';
import RatingsSection from '../../components/ratingsSection';
import LogSection from '../../components/logSection';
import CredentialsSection from '../../components/credentialsSection';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const ProfilePage : React.FunctionComponent<{ 
    user: {
        username: string;
        firstName: string;
        lastName: string;
        solvedSudokus: Array<any>;
        ratingsByType: {}
    };
    loggedIn: boolean;
 }> = ({ user, loggedIn }) => {
    return (<>
    {!loggedIn && (<Redirect to="/login"/>)}
        <Header/>
        <main className={styles['main']}>
            <CredentialsSection username={!!user ? user.username : ''}
            firstName={!!user ? user.firstName : ''} lastName={!!user ? user.lastName : ''} 
            profileImageURL="https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg"
            />
            <RatingsSection solvedSudokus={user.solvedSudokus} ratings={!!user ? user.ratingsByType : {}}/>
            <LogSection logs={!!user ? user.solvedSudokus: []}/>
        </main>
    </>)
}

export default connect((state: { auth: any}) => {
    return {
        user: state?.auth.user,
        loggedIn: state?.auth.loggedIn
    }
}, null)(ProfilePage);