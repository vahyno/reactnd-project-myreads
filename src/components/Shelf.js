import React from 'react';
import Book from './Book';

const Shelf = (props) => {
    const { books, shelfName, handleBookShelfChange } = props
    // console.log('Shelf => Books props',books)
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfName}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map(book => (
                        <li key={book.id}>
                            <Book 
                                book={book} 
                                handleBookShelfChange={handleBookShelfChange}
                            />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default Shelf;