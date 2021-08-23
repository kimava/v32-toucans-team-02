import React from 'react';
import defaultImg from '../../Assets/unknownImage.png';

const Booklist = ({ card, deleteCard }) => {
  const { Url, title, author } = card;
  const onDelete = (event) => {
    deleteCard(card);
  };
  return (
    <div onClick={onDelete}>
      <img src={Url ? Url : defaultImg} />
      <h1>{title}</h1>
      <span>{author}</span>
    </div>
  );
};

export default Booklist;
