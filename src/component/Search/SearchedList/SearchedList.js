import React from 'react';
import ListItem from './ListItem';
import './SearchedList.css';

const SearchedList = ({ bookList, onAdd }) => {
  return bookList ? (
    <ul className='list_container'>
      {bookList.map((item) => (
        <ListItem key={item.id} item={item} onAdd={onAdd} />
      ))}
    </ul>
  ) : (
    <p>no result found</p>
  );
};

export default SearchedList;
