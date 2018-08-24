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
* @description Changes Book location between shelves
* @param {object} book - the book object
* @param {string} shelf - can be one of the values: ('currentlyReading', 'wantToRead', 'wantToRead' and 'none')
*/
  handleBookShelfChange = (book, shelf) => {
    
    let updatedBooks = this.state.books.filter(b => b.id !== book.id)
    let newBookStatus = updatedBooks.concat(book)
    book.shelf = shelf
    this.setState({books: newBookStatus})

    BooksAPI.update(book, shelf)  

  }
  
  render() {
    console.log(this.state.books)
    return (
      <div className="app">
        <Route exact path='/' render={() => (
            <BookList
              books={this.state.books}
              handleBookShelfChange={this.handleBookShelfChange}
            />
          )}
        />
        <Route path='/search' render={() => (
            <SearchBooks
              books={this.state.books}
              handleBookShelfChange={this.handleBookShelfChange}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp;