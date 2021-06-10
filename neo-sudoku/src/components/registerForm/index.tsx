import React from 'react';
import styles from './styles.module.css';

type HandleChangeType = (e: React.ChangeEvent<HTMLInputElement>,
    type: 'username' | 'password' | 'firstName' 
    | 'lastName' | 'repeatPassword') => void;

const RegisterForm : React.FunctionComponent = () => {
    const [username, setUsername] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [firstName, setFirstName] = React.useState<string>('');

    const handleChange : HandleChangeType = (e, type) => {
        switch(type) {
            case 'username': setUsername(e.target.value); break;
            case 'password': setPassword(e.target.value); break;
            case 'firstName': setFirstName(e.target.value); break;
            case 'lastName': setFirstName(e.target.value); break;
        }
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
            <label >First name</label>
        <input type="text" placeholder="First name"
        onChange={(e) => handleChange(e, 'lastName')}/>
        </div>
    </div>
    <div className={styles["credentials-div"]}>
        <label >Username</label>
        <input className={styles["firstInput"]} type="text" placeholder="Username"
        onChange={(e) => handleChange(e, 'username')}/>
        <label >Password</label>
        <input type="text" placeholder="Password"
        onChange={(e) => handleChange(e, 'username')}/>
        <input type="text" placeholder="Repeat password"
        onChange={(e) => handleChange(e, 'username')}/>
    </div>
    <button type="submit">Sign up</button>

</form>);
}

export default RegisterForm;