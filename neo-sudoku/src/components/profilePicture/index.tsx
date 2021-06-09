import React from 'react';
import styles from './styles.module.css';

interface Props {
    imageURL: string;
}

const ProfilePicture : React.FunctionComponent<Props> = ({imageURL}) => {
    return (<img className={styles['img']} src={imageURL} alt="profile-pic"/>)
}

export default ProfilePicture;