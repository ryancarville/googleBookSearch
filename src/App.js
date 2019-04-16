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
			keyword: 'a',
			printType: '&printType=all',
			bookType: ''
		};

		this.printTypeFilter = this.printTypeFilter.bind(this);
		this.bookTypeFilter = this.bookTypeFilter.bind(this);
		this.keywordFilter = this.keywordFilter.bind(this);
	}

	runAPI() {
		const APIKey = 'AIzaSyCynQmybiH2DWuDtAUchiYustdJCqVk0Rw';
		let searchTerm = this.state.keyword;
		let printType = this.state.printType;
		let bookType = this.state.bookType;
		let url =
			'https://www.googleapis.com/books/v1/volumes?q=' +
			searchTerm +
			printType +
			bookType +
			'&maxResults=40&key=' +
			APIKey;
		const options = {
			method: 'GET'
		};
		console.log('API Ran');
		console.log(url);
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
		setTimeout(() => {
			this.runAPI();
		}, 200);
	}

	bookTypeFilter(filter) {
		this.setState({
			bookType: filter
		});
		setTimeout(() => {
			this.runAPI();
		}, 200);
	}

	keywordFilter(filter) {
		this.setState({
			keyword: filter
		});
		this.runAPI();
	}

	componentDidMount() {
		console.log('Component did mount');
		this.runAPI();
	}

	render() {
		console.log(this.state);

		return (
			<div className='App'>
				<Header />
				<SearchBar keywordSearch={this.keywordFilter} />
				<FilterBar
					bookFilter={this.bookTypeFilter}
					printFilter={this.printTypeFilter}
				/>
				<BookList list={this.state.books} err={this.state.error} />
			</div>
		);
	}
}

export default App;
