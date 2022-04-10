import { Navigate } from 'react-router-dom';
import './SearchBar.css';
import logo from '../../../Assets/icon.png';

const SearchBar = (props) => {
  if (!props.loggedIn) {
    console.log('Not logged in ');
    return <Navigate to='/' />;
  }

  return (
    <form onSubmit={props.submit} className='search_bar'>
      <input type='search' id='search' onKeyPress={props.search} />
      <img src={logo} alt='search-logo' className='search_logo' />
    </form>
  );
};
export default SearchBar;
