import React, { Component } from 'react';
import './BookList.css';

class BookList extends Component {
	render() {
		console.log(this.props);
		const books = this.props.list;
		return <div className='bookList'>{books.id}</div>;
	}
}
export default BookList;
