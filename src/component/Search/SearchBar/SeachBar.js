import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const onSubmit = (event) => {
    if (event.key === 'Enter') {
      const value = event.target.value;
      onSearch(value);
    }
  };

  return (
    <input
      type='search'
      id='search'
      placeholder='원하는 책을 검색하세요'
      onKeyPress={onSubmit}
    />
  );
};
export default SearchBar;
