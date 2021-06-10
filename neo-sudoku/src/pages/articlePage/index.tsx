import React from "react";
import Header from '../../components/header';
import Article from '../../components/article';

const ArticlePage = () => {
    return (<>
        <Header/>
        <Article title="3 Reasons to Play Sudoku Online Rather than on Paper"
        imageURL="https://sudoku.com/img/post-images/Sudoku-books.jpg"
        content={[{
            "type": "paragraph",
            "content": "However, with the rise of digital technology, as mobile phones got smarter and became capable of hosting mobile apps, Sudoku is now able to be played online or from smartphone apps, without any pencil or paper required. While some people surely miss the old ways of playing on paper – with the satisfaction of writing on paper and seeing the pencil markings fill the page – for the most part, it’s much easier and just better overall to play Sudoku online."
        },
        {
            "type": "paragraph",
            "content": "Here are a few reasons to play Sudoku online instead of the old-fashioned way:"
        },
        {
            "type": "heading",
            "content": "Convenience"
        },
        {
            "type": "paragraph",
            "content": "Playing Sudoku online is quite simply more convenient than on paper. Instead of carrying a Sudoku book or fumbling around with a newspaper, you can just go to a website or tap a mobile app and start playing Sudoku immediately. No need to get paper cuts or smudge your fingers with ink or pencil dust – you can play Sudoku from your phone or laptop at any time of day, in any location."
        },
        {
            "type": "heading",
            "content": "Variety"
        },
        {
            "type": "paragraph",
            "content": "Back in the old days, you had to wait for a new Sudoku puzzle to appear in the paper each day. Or you could buy books of Sudoku puzzles, but each book might only contain a few dozen puzzles – and what happens when you’ve solved them all? Playing Sudoku online gives you a much bigger variety of puzzles. Just by clicking “New Game,” you can immediately get a new puzzle on the screen, and the complex digital calculations of an online Sudoku game can give you almost an infinite amount of possible grids to play. You will never run out of Sudoku puzzles if you play Sudoku online."
        }]}/>
    </>)
}

export default ArticlePage;