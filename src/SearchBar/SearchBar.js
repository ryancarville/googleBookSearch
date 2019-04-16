import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
	render() {
		return (
			<div className='searchBar'>
				<form className='searchBarForm'>
					<input
						type='text'
						name='textSearch'
						placeholder='Enter Search Term Here'
						onChange={e => {
							this.props.keywordSearch(e.target.value);
						}}
					/>
					<button type='submit'>Search</button>
				</form>
			</div>
		);
	}
}

export default SearchBar;
