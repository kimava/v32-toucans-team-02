import React from 'react';
import './SearchBar.css';
import logo from '../../../Assets/icon.png';

class SearchBar extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.submit} className='search_bar'>
        <input type='search' id='search' onKeyPress={this.props.search} />
        <img src={logo} alt='search-logo' className='search_logo' />
      </form>
    );
  }
}
export default SearchBar;
