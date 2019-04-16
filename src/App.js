import React, { Component } from 'react';

import './App.css';
import Header from './Header/Header';
import SearchBar from './SearchBar/SearchBar';
import FilterBar from './FilterBar/FilterBar';
import BookList from './BookList/BookList';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			books: [],
			term: 'a',
			printType: 'all',
			bookType: ''
		};
		this.printTypeFilter = this.printTypeFilter.bind(this);
		this.bookTypeFilter = this.bookTypeFilter.bind(this);
	}

	componentDidMount() {
		const APIKey = 'AIzaSyCynQmybiH2DWuDtAUchiYustdJCqVk0Rw';
		const searchTerm = this.state.term;
		const printType = this.state.printType;
		const url =
			'https://www.googleapis.com/books/v1/volumes?q=' +
			searchTerm +
			'&printType=' +
			printType +
			'&maxResults=40&key=' +
			APIKey;
		const options = {
			method: 'GET'
		};
		console.log('Component did mount');
		fetch(url, options)
			.then(res => {
				if (!res.ok) {
					throw new Error('Something went wrong, please try again later.');
				}
				return res;
			})
			.then(res => res.json())
			.then(data => {
				const bookList = data.items;
				this.setState({
					books: bookList,
					error: null
				});
			})
			.catch(err => {
				this.setState({
					error: err.message
				});
			});
	}

	printTypeFilter(filter) {
		this.setState({
			printType: filter
		});
	}

	bookTypeFilter(filter) {
		this.setState({
			bookType: filter
		});
	}

	render() {
		console.log(this.state);
		return (
			<div className='App'>
				<Header />
				<SearchBar />
				<FilterBar
					bookFilter={this.bookTypeFilter}
					printFilter={this.printTypeFilter}
				/>
				<BookList list={this.state.books} />
			</div>
		);
	}
}

export default App;
