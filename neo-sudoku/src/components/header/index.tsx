import React from 'react';
import styles from './styles.module.css';
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import actions from '../../redux/actions/auth';

const Header: React.FunctionComponent<{ logout: Function}> = ({ logout }) => {
    const loggedIn : boolean = useSelector((state: any) => !!state ? 
    state.auth.loggedIn : false);

    const handleLogout = () => {
        logout();
        document.cookie = 'x-auth-token=';
    }

    return (<header className={styles['header']}>
        <section className={styles['header-section']}>
            <h1>NeoSudoku</h1>
            <nav className={styles['nav-bar']}>
                <ul className={styles['nav-bar-ul']}>

                    <li className={styles['nav-bar-ul-li']}><Link className={styles['nav-bar-ul-li-a']} to="/getStarted">Getting started</Link></li>
                    <li className={styles['nav-bar-ul-li']}><Link className={styles['nav-bar-ul-li-a']} to="/articles?page=1">Useful tips and articles</Link></li>
                    <li className={styles['nav-bar-ul-li']}><Link className={styles['nav-bar-ul-li-a']} to="/sudokuSolver">Sudoku solver</Link></li>
                    {loggedIn ? (<>
                        <li className={styles['nav-bar-ul-li']}>
                            <div className={styles['dropdown']}>
                                <Link className={styles['nav-bar-ul-li-a']} to="#">New game</Link>
                                <div className={styles["dropdown-content"]}>
                                    <Link className={styles['nav-bar-ul-li-a']} to="/newGame?diff=easy">Easy</Link>
                                    <Link className={styles['nav-bar-ul-li-a']} to="/newGame?diff=medium">Medium</Link>
                                    <Link className={styles['nav-bar-ul-li-a']} to="/newGame?diff=hard">Hard</Link>
                                    <Link className={styles['nav-bar-ul-li-a']} to="/newGame?diff=expert">Expert</Link>
                                </div>
                            </div>
                        </li>
                        <li className={styles['nav-bar-ul-li']}><Link className={styles['nav-bar-ul-li-a']} to="/profile">My profile</Link></li>
                        <li className={styles['nav-bar-ul-li']}><Link className={styles['nav-bar-ul-li-a']} to="/"
                        onClick={handleLogout}>Logout</Link></li></>) :
                        (<><li className={styles['nav-bar-ul-li']}><Link className={styles['nav-bar-ul-li-a']} to="/login">Sign in</Link></li>
                            <li className={styles['nav-bar-ul-li']}><Link className={styles['nav-bar-ul-li-a']} to="/register">Register</Link></li></>)}

                </ul>
            </nav>
        </section>

    </header>);
}

export default connect(null, (dispatch) => {
    return {
        logout: () => dispatch(actions.logout())
    }
})(Header);