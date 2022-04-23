import React from 'react';
import defaultImg from '../../../Assets/unknownImage.png';
import './SearchedList.css';

const ListItem = ({ item: { volumeInfo } }) => {
  return (
    <li className='book_card'>
      <img
        className='book_img'
        src={
          volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : defaultImg
        }
        alt={volumeInfo.title}
      />
      <p>{volumeInfo.title}</p>
      <p className='book_author'>
        {volumeInfo.authors ? volumeInfo.authors : 'unknown'}
      </p>
      <button className='add_btn'>Add to list</button>
    </li>
  );
};

export default ListItem;
