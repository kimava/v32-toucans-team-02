import React, { useContext, useState, useEffect } from 'react';
import './SearchWidget.css';
import { SearchContext } from '../../Pages/Search/search-context';
import img from '../../../Assets/unknownImage.png';
import { useHistory } from 'react-router';

const SearchWidget = ({ userId, cardRepo }) => {
  const bookResultContext = useContext(SearchContext);
  const [selectedList, setSelectedList] = useState([]);
  const history = useHistory();

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
  };

  const loadBooks = () => {
    let books = bookResultContext.resultBooks;
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

  return <div className='list_container'>{loadBooks()}</div>;
};

export default SearchWidget;
