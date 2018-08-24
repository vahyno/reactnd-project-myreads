import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Shelf from './Shelf';

class BookList extends Component {
    render(){
        const { books } = this.props
        return (
        <div>
           <div className="list-books">
             <div className="list-books-title">
               <h1>MyReads</h1>
             </div>
             <div className="list-books-content">
               <div>
                   <Shelf
                        shelfName='Currently Reading'
                        books={books.filter(book=> 'currentlyReading' === book.shelf)}
                   />
                   <Shelf
                        shelfName='Want to Read'
                        books={books.filter(book => 'wantToRead' === book.shelf)}
                   />
                   <Shelf
                        shelfName='Read'
                        books={books.filter(book => 'read' === book.shelf)}
                   />
               </div>
             </div>
             <div className="open-search">
               <Link to='/search'>Add a book</Link>
             </div>
           </div>
        </div>)
    }
}

export default BookList;