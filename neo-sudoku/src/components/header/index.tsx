import React from 'react';
import styles from './styles.module.css';

const Header: React.FunctionComponent = () => {
    return (<header className={styles['header']}>
        <section className={styles['header-section']}>
            <h1>NeoSudoku</h1>
            <nav className={styles['nav-bar']}>
                <ul className={styles['nav-bar-ul']}>

                    <li className={styles['nav-bar-ul-li']}><a className={styles['nav-bar-ul-li-a']} href="/getStarted">Getting started</a></li>
                    <li className={styles['nav-bar-ul-li']}><a className={styles['nav-bar-ul-li-a']} href="/articles">Useful tips and articles</a></li>
                    <li className={styles['nav-bar-ul-li']}><a className={styles['nav-bar-ul-li-a']} href="/sudokuSolver">Sudoku solver</a></li>
                    {false ? (<>
                        <li className={styles['nav-bar-ul-li']}>
                            <div className={styles['dropdown']}>
                                <a className={styles['nav-bar-ul-li-a']} href="#">New game</a>
                                <div className={styles["dropdown-content"]}>
                                    <a className={styles['nav-bar-ul-li-a']} href="/newGame?diff=easy">Easy</a>
                                    <a className={styles['nav-bar-ul-li-a']} href="/newGame?diff=medium">Medium</a>
                                    <a className={styles['nav-bar-ul-li-a']} href="/newGame?diff=hard">Hard</a>
                                    <a className={styles['nav-bar-ul-li-a']} href="/newGame?diff=expert">Expert</a>
                                </div>
                            </div>
                        </li>
                        <li className={styles['nav-bar-ul-li']}><a className={styles['nav-bar-ul-li-a']} href="/profile">My profile</a></li>
                        <li className={styles['nav-bar-ul-li']}><a className={styles['nav-bar-ul-li-a']} href="/logout">Logout</a></li></>) :
                        (<><li className={styles['nav-bar-ul-li']}><a className={styles['nav-bar-ul-li-a']} href="/login">Sign in</a></li>
                            <li className={styles['nav-bar-ul-li']}><a className={styles['nav-bar-ul-li-a']} href="/register">Register</a></li></>)}

                </ul>
            </nav>
        </section>

    </header>);
}

export default Header;