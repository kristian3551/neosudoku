import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import ArticlesContainer from '../../components/articlesContainer';
import ArticleCard from '../../components/articleCard';
import articlesApi from '../../services/articles';
import { useLocation } from 'react-router-dom';

type ArticleType = {title: string; imageURL: string; content: string;};

const ArticlesPage = () => {
    const [articles, setArticles] = useState<React.SetStateAction<any[]>>([]);
    const { search } = useLocation();
    const page = search.split('=')[1];

    // React.SetStateAction<any[]>

    useEffect(() => {
        articlesApi.getAll(+page)
            .then((articles : React.SetStateAction<any[]>) => {
                setArticles(articles);
            })
            .catch(err => console.log(err));
    }, [])

    // type IRenderArticles = (articlesObj: Array<Object>) => React.ReactNode;

    const renderArticles = (articlesObj : any) => {
        return articlesObj.map((e : ArticleType, i : number) => {
            return <ArticleCard key={i} imageURL={e.imageURL} 
            title={e.title} content={e.content}/>
        });
    }

    return (<>
        <Header/>
        <ArticlesContainer>
            
        {/* <ArticleCard imageURL="https://sudoku.com/img/post-images/Sudoku.com-3-Things-Almost-All-Beginner-Sudoku-Players-Get-Wrong.jpg"
            title="4 Unexpected Reasons to Play Sudoku Daily"
            content="Sudoku is a fun, challenging, mentally stimulating game. Lots of people find that Sudoku can feel
            almost addictive – you want to keep playing it as much as possible, and the better you get, the more
            you enjoy the game.
            Sudoku is such a popular game in part because it’s so versatile. Anyone can play Sudoku, in any
            location, at almost any time. And if you make Sudoku a regular part of your routine, you will find
            that your life is a lot more fun.
            Here are a few reasons why you should play Sudoku daily:"
            /> */}
        {renderArticles(articles)}
        </ArticlesContainer>
    </>)
}

export default ArticlesPage;