import React from 'react';
import styles from './styles.module.css';
import ProfilePicture from '../profilePicture';

interface Props {
    username: string;
    firstName: string;
    lastName: string;
    profileImageURL: string;
}

// "https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg"

const CredentialsSection : React.FunctionComponent<Props> = ({username, firstName, lastName, profileImageURL}) => {
    return (<section className={styles["credentials-section"]}>
    <ProfilePicture imageURL={profileImageURL}/>
    <h1 className={`${styles['position-below-img']} ${styles['underline']}`}>{username} ({firstName} {lastName})</h1>
    </section>);
}

export default CredentialsSection;