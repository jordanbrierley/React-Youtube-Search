// import react because the return function calls React.createElement
import React, { Component } from 'react';

// define functional component
// const SearchBar = () => {
// 	return <input />; 
// };

// define class based component
class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	} 

	render() {
		return (
			<div className="search-bar">
				<input
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	onInputChange(term){
		this.setState({ term })
		this.props.onSearchTermChange(term);
	}

	
}

// allows the export of this component so others can import
export default SearchBar;
