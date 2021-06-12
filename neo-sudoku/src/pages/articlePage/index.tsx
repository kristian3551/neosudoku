import React, { useEffect, useState } from "react";
import Header from '../../components/header';
import Article from '../../components/article';
import articlesApi from "../../services/articles";
import { useParams } from 'react-router-dom';

type ArticleType = {
    title: string; 
    imageURL: string; 
    content: Array<{
    type: 'heading' | 'paragraph';
    content: string;
}>;
};

const ArticlePage = () => {
    const [article, setArticle] = useState<ArticleType>({
        title: '',
        imageURL: '',
        content: []
    });
    const { articleId } : { articleId: string; } = useParams();
    useEffect(() => {
        articlesApi.getOne(articleId)
            .then((e: any) => e.json())
            .then(article => {
                setArticle(article);
            })
    }, []);

    return (<>
        <Header/>
        <Article title={article.title} imageURL={article.imageURL} 
        content={article.content}/>
    </>)
}

export default ArticlePage;