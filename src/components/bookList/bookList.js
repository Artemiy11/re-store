import React, { Component } from 'react';
import { connect } from 'react-redux';
import './bookList.css';
import BookListItem from '../bookListItem';
import { WithBookStoreService } from '../hoc';
import { booksLoaded } from '../../actions';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    componentDidMount() {
        const { bookStoreService, booksLoaded } = this.props;
        const data = bookStoreService.getBooks();

        booksLoaded(data);
    }

    render() {
        const { books } = this.props;
        return (
            <ul className="books">
                {
                    books.map(book => {
                        return <li key={book.id}><BookListItem book={book}/></li>
                    })
                }
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        books: state.books
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({booksLoaded}, dispatch);
};

export default WithBookStoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));