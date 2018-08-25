import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';


class SearchBooks extends Component {
    state = {
        query: '',
        foundBooks: [],
    }

    updateQuery = (query) => {
        this.setState(()=>({
            query
        }))
        // console.log(this.state.query)
    }

    findingBooks = (query) => {
        // console.log(query);
        BooksAPI.search(query).then((foundBooks) => {

            if (Array.isArray(foundBooks)) {
                this.setState({foundBooks})
            } else {
                this.setState({foundBooks: []})
            }
        })    
    }

    handleChange = (event) => {
        this.updateQuery(event.target.value);
        this.findingBooks(event.target.value);
    }


    render(){
        const { handleBookShelfChange } = this.props;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                
                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input 
                            type="text" 
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={this.handleChange}
                        />
                
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.foundBooks.length && this.state.foundBooks.map(book => (
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
}

export default SearchBooks;