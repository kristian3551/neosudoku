import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

type ContentType = {
    type: 'heading' | 'paragraph';
    content: string;
}

interface Props {
    imageURL: string;
    title: string;
    content: ContentType[];
    id: string;
}

const ArticleCard : React.FunctionComponent<Props> = ({ imageURL, title, content, id}) => {
    const renderContent = (contentArr: ContentType[]) => {
        return contentArr.map((e, i) => {
            return e.type == 'heading' ? (<h2 key={i}>{e.content}</h2>)
            : (<p key={i}>{e.content}</p>);
        });
    }
    return (<article className={styles['article']}>
        <img className={styles['article-img']} src={imageURL} alt="pic"/>
        <h3>{title}</h3>
        <p>{renderContent(content)}</p>
        <Link to={`/article/${id}`}>View article</Link>
    </article>)
} 

export default ArticleCard;