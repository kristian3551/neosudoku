import React from 'react';
import styles from './styles.module.css';
import PaginationDiv from '../paginationDiv';

interface Props {
    children: React.ReactNode;
}

const ArticlesContainer : React.FC<Props> = ({ children }) => {
    return (<main className={styles['main']}>
        <h1 className={styles['main-h1']}>Sudoku articles</h1>
        <section className={styles['articles-section']}>
            {children}
        </section>
        <PaginationDiv/>
    </main>
    )
};

export default ArticlesContainer;