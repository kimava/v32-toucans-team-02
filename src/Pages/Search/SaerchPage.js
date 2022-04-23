import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import GoogleBooks from '../../component/Search/searchPresenter';
import Layout from '../../component/Layout/Layout';
import SearchBar from '../../component/Search/SearchBar/SeachBar';
import SearchedList from '../../component/Search/SearchedList/SearchedList';
import './SearchPage.css';

const client = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/volumes?q=',
});

const googleBooks = new GoogleBooks(client);

const Search = ({ loggedIn, authService, cardRepo }) => {
  const [bookList, setBookList] = useState([]);
  const [userId, setUserId] = useState(null);

  // useEffect(() => {
  //   authService.getStatus(setUserId);
  // }, [authService]);

  const handleSearch = (value) => {
    googleBooks.search(value).then((results) => setBookList(results));
  };

  return (
    <Layout>
      <SearchBar onSearch={handleSearch} />
      <SearchedList bookList={bookList} />
    </Layout>
  );
};

export default Search;
