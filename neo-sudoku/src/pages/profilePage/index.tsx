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
    /*
    { 'classical': 2000,
            'irregular (6x6)': 1500, 'irregular (8x8)': 1600}*/
    return (<>
    {!loggedIn && (<Redirect to="/login"/>)}
        <Header/>
        <main className={styles['main']}>
            <CredentialsSection username={!!user ? user.username : ''}
            firstName={!!user ? user.firstName : ''} lastName={!!user ? user.lastName : ''} 
            profileImageURL="https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg"
            />
            <RatingsSection ratings={!!user ? user.ratingsByType : {}}/>
            <LogSection logs={[{date: '9 JUNE 2021', countOfSudokus: 6, ratePts: 20},
        {date: '10 JUNE 2021', countOfSudokus: 5, ratePts: 15},
        {date: '11 JUNE 2021', countOfSudokus: 10, ratePts: 30}]}/>
        </main>
    </>)
}

export default connect((state: { auth: any}) => {
    return {
        user: !!state ? state.auth.user: {
            username: '',
            firstName: '',
            lastName: '',
            ratingsByType: {}
        },
        loggedIn: !!state ? state.auth.loggedIn : false
    }
}, null)(ProfilePage);