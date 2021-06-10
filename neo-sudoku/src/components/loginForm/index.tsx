import React from 'react';
import styles from './styles.module.css';

type HandleChangeType = (e: React.ChangeEvent<HTMLInputElement>,
    type: 'username' | 'password') => void;

const LoginForm : React.FunctionComponent = () => {
    const [username, setUsername] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');

    const handleChange : HandleChangeType = (e, type) => {
        switch(type) {
            case 'username': setUsername(e.target.value); break;
            case 'password': setPassword(e.target.value); break;
        }
    } 

    return (<form className={styles['form']} action="">
    <h1>Account login</h1>

    <div>
        <label>Username</label>
        <input className={styles["firstInput"]} type="text" placeholder="Username"
        onChange={(e) => handleChange(e, 'username')}/>


        <label>Password</label>
        <input type="password" placeholder="Password"
        onChange={(e) => handleChange(e, 'password')}/>
    </div>
    <button type="submit">Sign in</button>

</form>);
}

export default LoginForm;