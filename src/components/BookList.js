import React from 'react';
import {Link} from 'react-router-dom';
import Shelf from './Shelf';

const BookList = (props) => {
    const { books, handleBookShelfChange } = props
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
                    handleBookShelfChange={handleBookShelfChange}
                />
                <Shelf
                    shelfName='Want to Read'
                    books={books.filter(book => 'wantToRead' === book.shelf)}
                    handleBookShelfChange={handleBookShelfChange}
                />
                <Shelf
                    shelfName='Read'
                    books={books.filter(book => 'read' === book.shelf)}
                    handleBookShelfChange={handleBookShelfChange}
                />
            </div>
            </div>
            <div className="open-search">
            <Link to='/search'>Add a book</Link>
            </div>
        </div>
    </div>)
}

export default BookList;