import React from 'react';
import defaultImg from '../../Assets/unknownImage.png';
import CustomizedRatings from '../UI/rating';
import styles from './BookList.module.css';

const Booklist = ({ card, deleteCard }) => {
  const { Url, title, author } = card;
  const onDelete = (event) => {
    deleteCard(card);
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
        <select name='status' className={styles.selector}>
          <option value='toRead'>to read</option>
          <option value='reading'>reading</option>
          <option value='read'>done</option>
        </select>
        <CustomizedRatings />
        <textarea name='comment' value='' className={styles.comment}></textarea>
      </div>
    </div>
  );
};

export default Booklist;
