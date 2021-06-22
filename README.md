# NeoSudoku

## Overview

The application is designed to extend the well-known sudoku game to a whole new level. The main concept is used by big platforms like Lichess (It's web app for competitive chess! Check it out!). The advantages __NeoSudoku__ offers are:  
1. Enhanced solving experience. Integrated rating system
    
    *This gives the opportunity to compete with others and increase rating points for every type of sudokus out there.*

    > Make sure you press the __*Finish*__ button after solving each sudoku. There is a __*Surrender*__ button which if pressed decreases the current sudoku rating by a certain amount of rating points

    Implemented sudoku functionality includes __hint__ and __history__
    
2. An integrated sudoku solver where every user (logged in or not) can easily type sudoku and get its solution instantly 

3. Articles with tips and useful information about sudoku solving  

   *There is a separated page for reading articles (there is a pagination component used for navigating through the published articles)*

4. Profile page where each player looks at their stats for every sudoku type. The solved sudokus history is stored in a log section, sorted by dates.

## Running the project (server and client)

   1. Open __*neo-sudoku*__ folder in terminal and type `npm install` to install all dependencies.  
        - Do The same thing for __*server*__  
   2. Open __*neo-sudoku*__ in terminal and type `npm start`
   3. Open __*server*__ in terminal and type `npm run nodemon` to run it with __nodemon__
   4. Wait for create-react-app to start the project automatically (or open `localhost:3000`)
   5. THAT'S IT!!!
   
## Dependencies
1. Client-side
    - [ReactJS](https://reactjs.org/) and [Create-React-App](https://github.com/facebook/create-react-app)
    - [Redux](https://redux.js.org/) and [React-Redux](https://react-redux.js.org)
    - [TypeScript](https://www.typescriptlang.org/)
2. Server-side
    - [Express](https://expressjs.com/)
    - MongoDB with [Mongoose](https://mongoosejs.com/)

| ReactJS logo  | NodeJS logo |
| ----------- | ----------- |
| ![ReactJS logo](https://banner2.cleanpng.com/20180604/pol/kisspng-react-javascript-angularjs-ionic-atom-5b154be6709500.6532453515281223424611.jpg) | ![Express logo](https://www.kindpng.com/picc/m/656-6568580_nodejs-logo-png-transparent-node-js-icon-png.png)       |

