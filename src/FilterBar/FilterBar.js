import React, { Component } from 'react';
import './FilterBar.css';

class FilterBar extends Component {
	render() {
		return (
			<div className='filterbar'>
				<form className='filterPrint dropMenu'>
					<label htmlFor='printFilter'>Print Type:</label>
					<select>
						<optgroup label='printFilter' name='printFilter'>
							<option value='all'>All</option>
							<option value='softback'>Softback</option>
							<option value='hardback'>Hardback</option>
						</optgroup>
					</select>
				</form>
				<form className='filterBook dropMenu'>
					<label htmlFor='bookFilter'>Book Type:</label>
					<select>
						<optgroup label='bookFilter' name='bookFilter'>
							<option value=''>No Filter</option>
							<option value='softback'>Softback</option>
							<option value='hardback'>Hardback</option>
						</optgroup>
					</select>
				</form>
			</div>
		);
	}
}
export default FilterBar;
