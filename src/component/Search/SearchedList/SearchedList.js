import React from 'react';
import ListItem from './ListItem';
import './SearchedList.css';

const SearchedList = ({ bookList }) => {
  return (
    <ul className='list_container'>
      {bookList &&
        bookList.map((item) => <ListItem key={item.id} item={item} />)}
    </ul>
  );
};

export default SearchedList;
