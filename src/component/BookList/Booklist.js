import React, { useRef, useState } from 'react';
import defaultImg from '../../Assets/unknownImage.png';
import CustomizedRatings from '../UI/rating';
import styles from './BookList.module.css';

const Booklist = ({ card, saveCard, deleteCard }) => {
  const statusRef = useRef();
  const commentRef = useRef();

  const [rating, setRating] = useState(0);
  const [toggle, setToggle] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const { url, title, author, status, rate, comment, bookId } = card;

  const onDelete = () => {
    deleteCard(card);
  };

  const onSave = (event) => {
    event.preventDefault();
    const newcard = {
      ...card,
      status: statusRef.current.value || '',
      rate: rating * 1,
      comment: commentRef.current.value || '',
    };
    saveCard(newcard);
  };

  const handleToggle = (event) => {
    if (toggle) {
      setToggle(false);
      event.target.innerHTML = 'edit';
      setDisabled(true);
      onSave(event);
    } else {
      event.target.innerHTML = 'save';
      setToggle(true);
      setDisabled(false);
    }
  };

  const getValue = (value) => {
    const number = value * 1;
    setRating(number);
  };

  return (
    <div className={styles.container}>
      <button className={styles.deleteBtn} onClick={onDelete}>
        <i className='fas fa-times'></i>
      </button>
      <img src={url ? url : defaultImg} alt={title} className={styles.thumb} />
      <h1 className={styles.title}>{title}</h1>
      <span className={styles.author}>{author}</span>

      <div className={styles.editor}>
        <select
          name='status'
          className={styles.selector}
          ref={statusRef}
          defaultValue={status ? status : null}
        >
          <option value='toRead'>to read</option>
          <option value='reading'>reading</option>
          <option value='read'>done</option>
        </select>
        <CustomizedRatings
          id={bookId}
          getValue={getValue}
          preValue={rate ? rate : rating}
        />

        <textarea
          name='comment'
          className={styles.comment}
          ref={commentRef}
          disabled={disabled}
          defaultValue={comment ? comment : ''}
        />

        <button className={styles.saveBtn} onClick={handleToggle}>
          save
        </button>
      </div>
    </div>
  );
};

export default Booklist;
