import React from 'react';
import ListItem from './ListItem';
import './SearchedList.css';

const SearchedList = ({ bookList, googleBooks, onAdd }) => {
  return (
    <ul className='list_container'>
      {bookList &&
        bookList.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            googleBooks={googleBooks}
            onAdd={onAdd}
          />
        ))}
    </ul>
  );
};

export default SearchedList;
