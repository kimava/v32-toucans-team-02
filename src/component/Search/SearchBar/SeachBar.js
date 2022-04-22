import './SearchBar.css';
import logo from '../../../Assets/icon.png';

const SearchBar = ({ onSearch }) => {
  const onSubmit = (event) => {
    if (event.key === 'Enter') {
      const value = event.target.value;
      onSearch(value);
    }
  };

  return <input type='search' id='search' onKeyPress={onSubmit} />;
};
export default SearchBar;
