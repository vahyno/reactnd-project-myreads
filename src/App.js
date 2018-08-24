import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import BookList from './components/BookList';
import SearchBooks from './components/SearchBooks';
import './App.css';

class BooksApp extends Component {
  state = {
    books: [],
  }

  componentDidMount(){
    BooksAPI.getAll()
      .then(books => {
        // console.log(books);
        this.setState(() => ({
          books,
        }))
      })  
  }
/**
* @description Represents a book
* @param {string} title - The title of the book
* @param {string} author - The author of the book
*/  
  
  render() {
    console.log(this.state.books)
    return (
      <div className="app">
        <Route exact path='/' render={() => (
            <BookList
              books={this.state.books}
            />
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