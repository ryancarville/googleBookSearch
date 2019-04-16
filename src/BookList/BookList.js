import React, { Component } from 'react';
import './BookList.css';

class BookList extends Component {
	render() {
		console.log(this.props);
		const books = this.props.list.map((book, i) => {
			return <li key={i}>{book.items[i].id}</li>;
		});
		return <div className='bookList'>{books}</div>;
	}
}
export default BookList;
