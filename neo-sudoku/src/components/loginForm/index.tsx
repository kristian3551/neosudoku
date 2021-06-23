import React, { MouseEventHandler } from 'react';
import styles from './styles.module.css';
import { useHistory } from 'react-router-dom';
import userApi from '../../services/auth';
import { connect } from 'react-redux';
import authActions from '../../redux/actions/auth';
import sudokuActions from '../../redux/actions/sudoku';
import messagesActions from '../../redux/actions/messages';

type HandleChangeType = (e: React.ChangeEvent<HTMLInputElement>,
    type: 'username' | 'password') => void;

const LoginForm : React.FunctionComponent<{ login: Function, setCurrentSudoku: Function;
    setMessage: Function; }>
     = ({ login, setCurrentSudoku, setMessage }) => {
    const [username, setUsername] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const history = useHistory();

    const handleChange : HandleChangeType = (e, type) => {
        switch(type) {
            case 'username': setUsername(e.target.value); break;
            case 'password': setPassword(e.target.value); break;
        }
    } 

    const handleLogin : MouseEventHandler<HTMLButtonElement> = async (e) => {
        e.preventDefault();
        await userApi.login(username, password)
            .then((e: any) => {
                const token = e.headers.get('Authorization');
                document.cookie = `x-auth-token=${token}`;
                return e.json();
            })
            .then((user) => {
                login(user);
                if(user.currentSudoku?._id) {
                    setCurrentSudoku(user.currentSudoku);
                    setMessage('success', 'Successfully logged in!');
                    history.push('/');
                }
            })
            .catch(err => {
                setMessage('error', 'User does not exist')
            })
        
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
    <button type="submit" onClick={handleLogin}>Sign in</button>

</form>);
}

export default connect(null, (dispatch) => {
    return {
        login: (user: any) => dispatch(authActions.login(user)),
        setCurrentSudoku: (currentSudoku: any) => dispatch(sudokuActions.setSudoku(currentSudoku)),
        setMessage: (messageType: string, message: string) =>
            dispatch(messagesActions.setMessage(messageType, message))
    }
})(LoginForm);