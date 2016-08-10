import React, { Component } from 'react';


class SearchBar extends Component {

	onInputChange(term) {
		this.props.onTermChange(term);
	}

  render() {
    return (
      <div className="search">
				<input className="author-form" onChange={e => this.onInputChange(e.target.value)} />
      </div>
    );
  }
}



export default SearchBar;