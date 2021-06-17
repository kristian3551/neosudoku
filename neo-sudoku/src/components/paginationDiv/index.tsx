import React, { useEffect, useMemo, useState } from 'react';
import styles from './styles.module.css';
import { Link, useLocation } from 'react-router-dom';
import articlesApi from '../../services/articles';

type RenderFC = (a: Array<number>) => React.ReactNode;

const createPaginationArray = (page: number, pages: number) => {
    let paginationArray : Array<any> = [];
    for(let i = 1; i <= pages; i++) paginationArray.push(i);
    if(page <= 3) paginationArray = paginationArray.slice(0, 6);
    else if(page >= pages - 3) paginationArray = paginationArray.slice((pages - 6) < 0 ? 0 : (pages - 6), pages);
    else paginationArray = paginationArray.slice(page - 3, page + 3);
    return paginationArray;
}

const PaginationDiv : React.FunctionComponent = () => {
    const { search } = useLocation();
    const [pages, setPages] = useState(0);
    const page : number = +search.split('=')[1];
    const activePageLink = page;
    
    useEffect(() => {
        articlesApi.getAll('all')
            .then(articles => {
                const pagesCalc = Math.ceil(articles.length / 4);
                setPages(pagesCalc);
            })
    }, []);

    const paginationArray = createPaginationArray(page, pages);

    const renderLinks : RenderFC = (arr) => {
        return arr.map((e,i) => {
            return (<Link className={`${styles['pagination-a']} ${e == activePageLink ? styles['active'] : ''}`} 
            key={e} to={`/articles?page=${e}`}>{e}</Link>)
        })
    }

    return (<div className={styles['flex-container']}>
    <div className={styles["pagination"]}>
        <Link className={styles['pagination-a']} to={`/articles?page=${page - 1}`}>&laquo;</Link>
        {renderLinks(paginationArray)}
        <Link className={styles['pagination-a']} to={`/articles?page=${page + 1}`}>&raquo;</Link>
      </div>
</div>)
}

export default PaginationDiv;