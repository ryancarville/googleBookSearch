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
						onChange={e => {
							this.props.keywordSearch(e.target.value);
						}}
						placeholder='Enter Search Term Here'
					/>
				</form>
			</div>
		);
	}
}

export default SearchBar;
