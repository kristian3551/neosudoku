import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import ArticlesContainer from '../../components/articlesContainer';
import ArticleCard from '../../components/articleCard';
import articlesApi from '../../services/articles';
import { useLocation } from 'react-router-dom';

type ArticleType = {title: string; imageURL: string; content: Array<any>;
    _id: string;};

const ArticlesPage = () => {
    const [articles, setArticles] = useState<ArticleType[]>([]);
    const { search } = useLocation();
    const page = search.split('=')[1];

    useEffect(() => {
        articlesApi.getAll(+page)
            .then((articles : ArticleType[]) => {
                setArticles(articles);
            })
            .catch(err => console.log(err));
    }, [])

    // type IRenderArticles = (articlesObj: Array<Object>) => React.ReactNode;

    const renderArticles = (articlesObj : any) => {
        return articlesObj.map((e : ArticleType, i : number) => {
            return <ArticleCard key={i} imageURL={e.imageURL} 
            title={e.title} content={e.content} id={e._id}/>
        });
    }

    return (<>
        <Header/>
        <ArticlesContainer>
            {renderArticles(articles)}
        </ArticlesContainer>
    </>)
}

export default ArticlesPage;