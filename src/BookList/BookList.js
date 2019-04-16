import React, { Component } from 'react';
import './BookList.css';

class BookList extends Component {
	render() {
		const bookData = this.props.list;
		console.log(bookData);
		const books = Object.keys(bookData).map((book, i) => {
			return <li key={book.items[i].id}>{book.items[i].volumeInfo.title}</li>;
		});
		return <div className='bookList'>{books}</div>;
	}
}
export default BookList;
