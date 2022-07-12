import React, { useRef, useState } from 'react';
import defaultImg from '../../Assets/unknownImage.png';
import CustomizedRatings from '../UI/rating';
import Selector from '../UI/selector';
import styles from './BookList.module.css';

const Booklist = ({ card, saveCard, deleteCard }) => {
  const { url, title, author, status, rate, comment, bookId } = card;

  const commentRef = useRef();

  const [rating, setRating] = useState(rate ? rate : 0);
  const [readingStatus, setReadingStatus] = useState(
    status ? status : '독서 현황'
  );
  const [editable, setEditable] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const onDelete = () => {
    deleteCard(card);
  };

  const onSave = (event) => {
    event.preventDefault();
    const newcard = {
      ...card,
      status: readingStatus,
      rate: rating * 1,
      comment: commentRef.current.value || '',
    };
    saveCard(newcard);
  };

  const handleEdit = (event) => {
    if (editable) {
      setEditable(false);
      event.target.innerHTML = 'edit';
      setDisabled(true);
      onSave(event);
    } else {
      event.target.innerHTML = 'save';
      setEditable(true);
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
        <Selector
          title={readingStatus}
          list={['to read', 'reading', 'done']}
          disabled={disabled}
          callback={setReadingStatus}
        />
        <CustomizedRatings
          id={bookId}
          disabled={disabled}
          getValue={getValue}
          preValue={rating}
        />

        <textarea
          name='comment'
          className={styles.comment}
          ref={commentRef}
          disabled={disabled}
          defaultValue={comment ? comment : ''}
        />
      </div>
      <button className={styles.saveBtn} onClick={handleEdit}>
        save
      </button>
    </div>
  );
};

export default Booklist;
