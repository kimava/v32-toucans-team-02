import React from 'react';

const Booklist = ({ card, deleteCard }) => {
  const { title, author } = card;
  const onDelete = (event) => {
    deleteCard(card);
  };
  return (
    <div onClick={onDelete}>
      <h1>{title}</h1>
      <span>{author}</span>
    </div>
  );
};

export default Booklist;
