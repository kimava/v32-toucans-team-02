import React from 'react';
import defaultImg from '../../../Assets/unknownImage.png';
import './SearchedList.css';

const ListItem = ({ item, googleBooks, onAdd }) => {
  const list = googleBooks.trimList(item);
  const { id, title, author, thumbnail, imgUrl } = list;

  const handleClick = () => {
    onAdd(id, title, author, imgUrl);
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
      <button className='add_btn' onClick={handleClick}>
        Add to list
      </button>
    </li>
  );
};

export default ListItem;
