import React from 'react';
import styles from './styles.module.css';

interface Props {
    imageURL: string;
    title: string;
    content: string;
}

const ArticleCard : React.FunctionComponent<Props> = ({ imageURL, title, content}) => {
    return (<article className={styles['article']}>
        <img className={styles['article-img']} src={imageURL} alt="pic"/>
        <h3>{title}</h3>
        <p>{content}</p>
        <a href="#">View article</a>
    </article>)
} 

export default ArticleCard;