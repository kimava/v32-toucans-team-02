import { Redirect } from 'react-router'
import './SearchBar.css'
import logo from '../../../Assets/book.png'


const  SearchBar=(props)=>{
    if(!props.loggedIn){
        console.log("Not logged in ")
        return <Redirect to='/' exact/>
     }

      
          return (
            <form onSubmit={props.submit} className='search_bar'>
              <input type='search' id='search' onKeyPress={props.search} />
              <img src={logo} alt='search-logo' className='search_logo' />
            </form>
          );
  }
export default SearchBar;
