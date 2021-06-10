import React, { useState } from 'react';
import styles from './styles.module.css';
import { useHistory } from 'react-router-dom';

type HandleChangeType = (e: React.ChangeEvent<HTMLInputElement>,
    type: 'username' | 'password' | 'firstName' 
    | 'lastName' | 'repeatPassword') => void;

const RegisterForm : React.FunctionComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const history = useHistory();

    const handleChange : HandleChangeType = (e, type) => {
        switch(type) {
            case 'username': setUsername(e.target.value); break;
            case 'password': setPassword(e.target.value); break;
            case 'firstName': setFirstName(e.target.value); break;
            case 'lastName': setLastName(e.target.value); break;
            case 'repeatPassword': setRepeatPassword(e.target.value); break;
        }
    } 

    const handleRegister : React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        history.push('/');
    }

    return (<form className={styles['form']} action="">
    <h1>Account register</h1>
    <div className={styles["name-div"]}>
        <div>
            <label >First name</label>
        <input type="text" placeholder="First name"
        onChange={(e) => handleChange(e, 'firstName')}/>
        </div>
        <div>
            <label >Last name</label>
        <input type="text" placeholder="First name"
        onChange={(e) => handleChange(e, 'lastName')}/>
        </div>
    </div>
    <div className={styles["credentials-div"]}>
        <label >Username</label>
        <input className={styles["input-margin"]} type="text" placeholder="Username"
        onChange={(e) => handleChange(e, 'username')}/>
        <label >Password</label>
        <input className={styles["input-margin"]} type="text" placeholder="Password"
        onChange={(e) => handleChange(e, 'password')}/>
        <label >Repeat password</label>
        <input type="text" placeholder="Repeat password"
        onChange={(e) => handleChange(e, 'repeatPassword')}/>
    </div>
    <button type="submit" onClick={handleRegister}>Sign up</button>

</form>);
}

export default RegisterForm;