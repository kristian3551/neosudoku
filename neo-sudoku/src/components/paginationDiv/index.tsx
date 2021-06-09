import React from 'react';
import styles from './styles.module.css';

type RenderFC = (a: Array<number>) => React.ReactNode;

const PaginationDiv : React.FunctionComponent = () => {
    const activePageLink = 2;
    const renderLinks : RenderFC = (arr) => {
        return arr.map((e,i) => {
            return (<a className={`${styles['pagination-a']} ${e == activePageLink ? styles['active'] : ''}`} key={e} href="#">{e}</a>)
        })
    }

    return (<div className={styles['flex-container']}>
    <div className={styles["pagination"]}>
        <a className={styles['pagination-a']} href="#">&laquo;</a>
        {renderLinks([1,2,3,4,5,6])}
        <a className={styles['pagination-a']} href="#">&raquo;</a>
      </div>
</div>)
}

export default PaginationDiv;