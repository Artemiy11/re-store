import React from 'react';
import './bookListItem.css';

const bookListItem = ({ book }) => {
    const { author, title, price, coverImage } = book;
    return (
        <div className="book-wrapper">
            <img className="book-img" src={coverImage} alt="book"/>
            <div className="book-info">
                <a href="#" className="book-title">{title}</a>
                <span className="book-author">{author}</span>
                <span className="book-price">${price}</span>
                <button className="btn btn-info book-button">Add to card</button>
            </div>
        </div>
    ) 
};

export default bookListItem;