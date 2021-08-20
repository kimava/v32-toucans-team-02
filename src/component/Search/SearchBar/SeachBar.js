import React from 'react'
import './SearchBar.css'


class SearchBar extends React.Component {
   
    render (){
        return (
            <form onSubmit={this.props.submit} className='search_bar' >
                <input type='search' id="search" onKeyPress={this.props.search}  />
            </form>
        )
    }
}
export default SearchBar