import React, { Component } from 'react';
import './FilterBar.css';

class FilterBar extends Component {
	render() {
		return (
			<div className='filterbar'>
				<form
					className='filterPrint dropMenu'
					onChange={e => {
						this.props.printFilter(e.target.value);
					}}>
					<label htmlFor='printFilter'>Print Type:</label>
					<select>
						<optgroup label='printFilter' name='printFilter'>
							<option value='&printType=all'>All</option>
							<option value='&printType=books'>Books</option>
							<option value='&printType=magazines'>Magazines</option>
						</optgroup>
					</select>
				</form>
				<form
					className='filterBook dropMenu'
					onChange={e => {
						this.props.bookFilter(e.target.value);
					}}>
					<label htmlFor='bookFilter'>Book Type:</label>
					<select>
						<optgroup label='bookFilter' name='bookFilter'>
							<option value=''>No Filter</option>
							<option value='&filter=free-ebooks'>Free ebook</option>
						</optgroup>
					</select>
				</form>
			</div>
		);
	}
}
export default FilterBar;
