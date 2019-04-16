import React, { Component } from 'react';
import './BookList.css';

class BookList extends Component {
	render() {
		const bookData = this.props.list;
		console.log(bookData);
		const books = bookData.map((book, i) => {
			return (
				<li key={book.id} className='bookListItem'>
					<img
						src={book.volumeInfo.imageLinks.thumbnail}
						alt={book.volumeInfo.title}
						className='bookImg'
					/>
					<h2>{book.volumeInfo.title}</h2>
					<p>
						{book.volumeInfo.subtitle} <br />
						Author: {book.volumeInfo.authors}
						<br />
						Price: {book.saleInfo.saleability}
						<br />
						Print Type: {book.volumeInfo.printType}
						<br />
						<a
							href={book.volumeInfo.previewLink}
							target='_blank'
							rel='noopener noreferrer'>
							Click to Preivew
						</a>
					</p>
				</li>
			);
		});
		return (
			<div className='bookListWrap'>
				<ul className='bookList'>{books}</ul>
			</div>
		);
	}
}
export default BookList;
