import React, {Component} from 'react';
import {Route} from 'react-router-dom';
// import * as BooksAPI from './BooksAPI'
import BookList from './components/BookList';
import SearchBooks from './components/SearchBooks';
import './App.css';

class BooksApp extends Component {
  
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
            <BookList />
          )}
        />
        <Route path='/search' render={() => (
            <SearchBooks />
          )}
        />
      </div>
    )
  }
}

export default BooksApp;