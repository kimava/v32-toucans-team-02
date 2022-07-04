import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth_context';
import axios from 'axios';
import Kakao from '../../service/kakaoBooks';
import Layout from '../../component/Layout/Layout';
import SearchBar from '../../component/Search/SearchBar/SeachBar';
import SearchedList from '../../component/Search/SearchedList/SearchedList';
import PopUp from '../../component/PopUp/PopUp';

const client = axios.create({
  baseURL: 'https://dapi.kakao.com/v3/search/book?query=',
  headers: {
    Authorization: process.env.REACT_APP_KAKAO_API_KEY,
  },
});

const kakaoBooks = new Kakao(client, 40);

const Search = ({ cardRepo }) => {
  const navigate = useNavigate();
  const { userId } = useContext(AuthContext);
  const [bookList, setBookList] = useState([]);
  const [popUpOpen, setPopUpOpen] = useState(false);

  const handleSearch = (value) => {
    kakaoBooks
      .search(value)
      .then(setBookList)
      .catch((error) => {
        console.log(error);
        setBookList(null);
      });
  };

  const addList = (bookId, title, author, url) => {
    const info = { title, author, url, bookId };
    cardRepo.saveCard(userId, bookId, info);
    setPopUpOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handlePopUpClose = () => {
    setPopUpOpen(false);
  };

  const handleMove = () => {
    navigate('/my-list');
  };

  return (
    <Layout>
      <SearchBar onSearch={handleSearch} />
      <SearchedList bookList={bookList} onAdd={addList} />
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
