import React from 'react';
import styles from './styles.module.css';
import Header from '../../components/header';
import RatingsSection from '../../components/ratingsSection';
import Log from '../../components/log';
import LogSection from '../../components/logSection';
import CredentialsSection from '../../components/credentialsSection';

const ProfilePage : React.FunctionComponent = () => {
    return (<>
        <Header/>
        <main className={styles['main']}>
            <CredentialsSection username="kristian3551"
            firstName="Kristian" lastName="Todorov" 
            profileImageURL="https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg"
            />
            <RatingsSection ratings={{ 'classical': 2000}}/>
            <LogSection logs={[{date: '9 JUNE 2021', countOfSudokus: 6, ratePts: 20},
        {date: '10 JUNE 2021', countOfSudokus: 5, ratePts: 15},
        {date: '11 JUNE 2021', countOfSudokus: 10, ratePts: 30}]}/>
        </main>
    </>)
}

export default ProfilePage;