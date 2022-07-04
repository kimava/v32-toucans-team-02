import React from 'react';
import defaultImg from '../../../Assets/unknownImage.png';
import './SearchedList.css';

const ListItem = ({ item, onAdd }) => {
  const { id, title, author, thumbnail, date } = item;

  const handleClick = () => {
    onAdd(id, title, author, thumbnail);
  };

  return (
    <li className='book_card'>
      <img
        className='book_img'
        src={thumbnail ? thumbnail : defaultImg}
        alt={title}
      />
      <p>{title}</p>
      <p className='book_author'>{author}</p>
      <p className='book_date'>{date}</p>
      <button className='add_btn' onClick={handleClick}>
        Add to list
      </button>
    </li>
  );
};

export default ListItem;
