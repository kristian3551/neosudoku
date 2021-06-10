import React, { useEffect } from 'react';
import './App.css';
import GetStartedPage from './pages/getStartedPage';
import ArticlesPage from './pages/articlesPage';
import ArticlePage from './pages/articlePage';
import ProfilePage from './pages/profilePage';
import SudokuSolverPage from './pages/sudokuSolverPage';
import NewGamePage from './pages/newGamePage';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import authActions from './redux/actions/auth';
import userApi from './services/auth';

const App : React.FunctionComponent<{ login: Function;}> = ({ login }) => {

  // const getCookieValue = (name: string) => {
  //   if(!document.cookie) return;
  //   let arr : any = document.cookie.split('; ');
  //   arr = arr.map((e: string) => e.split('='));
  //   return arr.find((e: string) => e[0] === name)[1];
  // }

  // useEffect(() => {
  //     const token = getCookieValue('x-auth-token');
  //     if (!token) return;
  //     console.log(token);
  //     userApi.verify(token).then((e: any) => e.json())
  //     .then(user => {
  //       login(user);
  //     })
  // }, []);

  return (
    <div className="App">
        <Router>
            <Route exact path="/"><Redirect to="/getStarted"/></Route>
            <Route exact path="/getStarted" component={GetStartedPage}/>
            <Route exact path="/articles" component={ArticlesPage}/>
            <Route exact path="/article/:articleId" component={ArticlePage}/>
            <Route exact path="/profile" component={ProfilePage}/>
            <Route exact path="/sudokuSolver" component={SudokuSolverPage}/>
            <Route exact path="/newGame" component={NewGamePage}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/register" component={RegisterPage}/>
          </Router>
    </div>

  );
}

export default connect(null, (dispatch) => {
  return {
    login: (user: Object) => dispatch(authActions.login(user))
  }
})(App);
