import React, { useEffect, useState } from "react";
import Header from '../../components/header';
import Article from '../../components/article';
import articlesApi from "../../services/articles";

const ArticlePage = () => {
    const [article, setArticle] = useState<{title: string; imageURL: string; content: Array<{
        type: 'heading' | 'paragraph';
        content: string;
    }>;}>({
        title: '',
        imageURL: '',
        content: []
    });

    useEffect(() => {
        articlesApi.getOne('60c2692d25076142c8606a5d')
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