import React from 'react';
import styles from './styles.module.css';

const Header: React.FunctionComponent = () => {
    return (<header className={styles['header']}>
        <section className={styles['header-section']}>
            <h1>NeoSudoku</h1>
            <nav className={styles['nav-bar']}>
                <ul className={styles['nav-bar-ul']}>

                    <li className={styles['nav-bar-ul-li']}><a className={styles['nav-bar-ul-li-a']} href="#">Getting started</a></li>
                    <li className={styles['nav-bar-ul-li']}><a className={styles['nav-bar-ul-li-a']} href="#">Useful tips and articles</a></li>
                    <li className={styles['nav-bar-ul-li']}><a className={styles['nav-bar-ul-li-a']} href="#">Sudoku solver</a></li>
                    {false ? (<>
                        <li className={styles['nav-bar-ul-li']}>
                            <div className={styles['dropdown']}>
                                <a className={styles['nav-bar-ul-li-a']} href="#">New game</a>
                                <div className={styles["dropdown-content"]}>
                                    <a className={styles['nav-bar-ul-li-a']} href="#">Easy</a>
                                    <a className={styles['nav-bar-ul-li-a']} href="#">Medium</a>
                                    <a className={styles['nav-bar-ul-li-a']} href="#">Hard</a>
                                    <a className={styles['nav-bar-ul-li-a']} href="#">Expert</a>
                                </div>
                            </div>
                        </li>
                        <li className={styles['nav-bar-ul-li']}><a className={styles['nav-bar-ul-li-a']} href="#">My profile</a></li>
                        <li className={styles['nav-bar-ul-li']}><a className={styles['nav-bar-ul-li-a']} href="#">Logout</a></li></>) :
                        (<><li className={styles['nav-bar-ul-li']}><a className={styles['nav-bar-ul-li-a']} href="#">Sign in</a></li>
                            <li className={styles['nav-bar-ul-li']}><a className={styles['nav-bar-ul-li-a']} href="#">Register</a></li></>)}

                </ul>
            </nav>
        </section>

    </header>);
}

export default Header;