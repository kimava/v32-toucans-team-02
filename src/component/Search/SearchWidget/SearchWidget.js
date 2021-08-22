import React, { useContext, useState, useEffect } from 'react';
import './SearchWidget.css';
import { SearchContext } from '../../Pages/Search/search-context';
import img from '../../../Assets/unknownImage.png';
import { useHistory } from 'react-router';

const SearchWidget = ({ userId, cardRepo }) => {
  const bookResultContext = useContext(SearchContext);
  const [selectedList, setSelectedList] = useState([]);
  const history = useHistory();

  const trimList = (data) => {
    const title = data.title;
    const author = data.authors;
    const imgUrl = data.imageLinks?.smallThumbnail;
    const Url = imgUrl ? imgUrl : null;
    return { title, author, Url };
  };

  const handleList = (data) => {
    const info = trimList(data);
    setSelectedList((prevSelectedList) => {
      const updated = [...prevSelectedList, info];
      return updated;
    });
  };

  useEffect(() => {
    cardRepo.saveCard(userId, selectedList);
    console.log(selectedList);
  }, [selectedList]);

  const loadBooks = () => {
    let books = bookResultContext.resultBooks;
    let listElements = [];
    if (books) {
      for (let i in books) {
        let imgsrc = '/Assets/unknownImage.png';
        try {
          imgsrc = books[i].volumeInfo.imageLinks.smallThumbnail;
        } catch (err) {
          imgsrc = img;
        }
        let element = (
          <div key={i}>
            <img src={imgsrc} alt={books[i].volumeInfo.title} />
            <p>Title :{books[i].volumeInfo.title}</p>
            <p>Autor :{books[i].volumeInfo.authors}</p>
            <p>Published :{books[i].volumeInfo.publishedDate}</p>
            <button
              onClick={() => {
                handleList(books[i].volumeInfo);
              }}
            >
              ADD to list
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
