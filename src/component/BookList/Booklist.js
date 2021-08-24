import React from 'react';
import defaultImg from '../../Assets/unknownImage.png';
import CustomizedRatings from '../UI/rating';

const Booklist = ({ card, deleteCard }) => {
  const { Url, title, author } = card;
  const onDelete = (event) => {
    deleteCard(card);
  };
  return (
    <div>
      <button onClick={onDelete}>X</button>
      <img src={Url ? Url : defaultImg} />
      <h1>{title}</h1>
      <span>{author}</span>
      <CustomizedRatings />
      <select name='status'>
        <option value='toRead'>to read</option>
        <option value='reading'>reading</option>
        <option value='read'>done</option>
      </select>
      <textarea name='comment' value=''></textarea>
    </div>
  );
};

export default Booklist;
