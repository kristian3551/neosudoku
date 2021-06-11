import React from 'react';
import styles from './styles.module.css';

interface Props {
    title: string;
    imageURL: string;
    content: Array<{
        type: 'heading' | 'paragraph';
        content: string;
    }>;
}

const Article: React.FunctionComponent<Props> = ({ title, imageURL, content}) => {

    const renderContent = () => {
        return content.map((e, i) => {
            return e.type == 'heading' ? (<h2 key={i}>{e.content}</h2>)
            : (<p key={i}>{e.content}</p>);
        });
    }

    return (<main className={styles['main']}>
        <h1>{title}</h1>
        <img src={imageURL} alt="pic"/>
        {renderContent()}
    </main>)
}

export default Article;