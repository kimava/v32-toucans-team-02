import React, { useRef, useState } from 'react';
import defaultImg from '../../Assets/unknownImage.png';
import CustomizedRatings from '../UI/rating';
import styles from './BookList.module.css';

const Booklist = ({ key, card, deleteCard, addCard }) => {
  const statusRef = useRef();
  const commentRef = useRef();
  const [rating, setRating] = useState(null);
  const [toggle, setToggle] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const { Url, title, author, status, rate, comment } = card;
  const onDelete = (event) => {
    deleteCard(card);
  };
  const onSave = (event) => {
    event.preventDefault();
    const newcard = {
      ...card,
      status: statusRef.current.value || '',
      rate: rating || 0,
      comment: commentRef.current.value || '',
    };
    addCard(newcard);
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
    setRating(value);
  };

  return (
    <div className={styles.container}>
      <button className={styles.deleteBtn} onClick={onDelete}>
        <i class='fas fa-times'></i>
      </button>
      <img src={Url ? Url : defaultImg} className={styles.thumb} />
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
        <CustomizedRatings key={key} getValue={getValue} preValue={rate} />

        <textarea
          name='comment'
          className={styles.comment}
          ref={commentRef}
          disabled={disabled}
        >
          {comment ? comment : ''}
        </textarea>
        <button className={styles.saveBtn} onClick={handleToggle}>
          save
        </button>
      </div>
    </div>
  );
};

export default Booklist;
