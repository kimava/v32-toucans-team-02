import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import GoogleBooks from '../../component/Search/searchPresenter';
import Layout from '../../component/Layout/Layout';
import SearchBar from '../../component/Search/SearchBar/SeachBar';
import SearchedList from '../../component/Search/SearchedList/SearchedList';
import PopUp from '../../component/PopUp/PopUp';
import './SearchPage.css';

const client = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/volumes?q=',
});

const googleBooks = new GoogleBooks(client);

const Search = ({ loggedIn, authService, cardRepo }) => {
  const [userId, setUserId] = useState(null);
  const [bookList, setBookList] = useState([]);
  const [popUpOpen, setPopUpOpen] = useState(false);

  const navigate = useNavigate();

  // useEffect(() => {
  //   authService.getStatus(setUserId);
  // }, [authService]);

  const handleSearch = (value) => {
    googleBooks.search(value).then((results) => setBookList(results));
  };

  const addList = (bookId, title, author, url) => {
    const info = { title, author, url };
    cardRepo.saveCard(userId, bookId, info);
    setPopUpOpen(true);
    // document.body.style.overflow = 'hidden';
  };

  const handlePopUpClose = () => {
    setPopUpOpen(false);
  };

  const handleMove = () => {
    navigate.push('/MyList');
  };

  return (
    <Layout>
      <SearchBar onSearch={handleSearch} />
      <SearchedList
        bookList={bookList}
        googleBooks={googleBooks}
        onAdd={addList}
      />
      <PopUp
        open={popUpOpen}
        message={'we saved it to your list! 🎉'}
        handleClose={handlePopUpClose}
      >
        <>
          <button className='popUp_children' onClick={handlePopUpClose}>
            keep searching
          </button>
          <button className='popUp_children' onClick={handleMove}>
            go to my list
          </button>
        </>
      </PopUp>
    </Layout>
  );
};

export default Search;
