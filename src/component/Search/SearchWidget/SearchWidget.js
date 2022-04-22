import React, { useState } from 'react';
import './SearchWidget.css';
import img from '../../../Assets/unknownImage.png';
import { useNavigate } from 'react-router-dom';

const SearchWidget = ({ userId, cardRepo, list }) => {
  const [selectedList, setSelectedList] = useState([]);
  const [close, setClose] = useState(false);
  const navigate = useNavigate();

  const trimList = (data, bookId) => {
    const id = bookId;
    const title = data.title;
    const author = data.authors;
    const imgUrl = data.imageLinks?.thumbnail;
    const Url = imgUrl ? imgUrl : null;
    return { id, title, author, Url };
  };

  const handleList = (data, id) => {
    const info = trimList(data, id);
    cardRepo.saveCard(userId, info.id, info);
    setSelectedList((prevSelectedList) => {
      const updated = [...prevSelectedList, info];
      return updated;
    });
    setClose(true);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    setClose(false);
    document.body.style.overflow = 'unset';
  };

  const handleMove = () => {
    navigate.push('/MyList');
  };

  const loadBooks = () => {
    let books = list;
    let listElements = [];
    if (books) {
      for (let i in books) {
        let imgsrc = '/Assets/unknownImage.png';
        try {
          imgsrc = books[i].volumeInfo.imageLinks.thumbnail;
        } catch (err) {
          imgsrc = img;
        }
        let element = (
          <div key={i} className='book_card'>
            <img
              src={imgsrc}
              alt={books[i].volumeInfo.title}
              className='book_img'
            />
            <p>{books[i].volumeInfo.title}</p>
            <p className='book_author'>
              {books[i].volumeInfo.authors
                ? books[i].volumeInfo.authors
                : 'unknown'}
            </p>
            <button
              className='add_btn'
              onClick={() => {
                handleList(books[i].volumeInfo, books[i].id);
              }}
            >
              Add to list
            </button>
          </div>
        );
        listElements.push(element);
      }
    }
    return listElements;
  };

  return (
    <div>
      <div className='list_container'>{loadBooks()}</div>
      {close && (
        <div className='popUp' onClick={handleClose}>
          <button className='popUp_close'>
            <i className='fas fa-times'></i>
          </button>
          <p className='popUp_comment'>we saved it to your list! 🎉</p>
          <div className='popUp_selector'>
            <button className='popUp_btn popUp_stay' onClick={handleClose}>
              keep searching
            </button>
            <button className='popUp_btn popUp_move' onClick={handleMove}>
              go to my list
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchWidget;
