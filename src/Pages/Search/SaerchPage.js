import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import GoogleBooks from '../../component/Search/searchPresenter';
import Layout from '../../component/Layout/Layout';
import SearchBar from '../../component/Search/SearchBar/SeachBar';
import SearchWidget from '../../component/Search/SearchWidget/SearchWidget';
import { SearchContext } from './search-context';
import './SearchPage.css';

const client = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/volumes?q=',
});

const googleBooks = new GoogleBooks(client);

const Search = ({ loggedIn, authService, cardRepo }) => {
  const bookResultContext = useContext(SearchContext);
  const [searchValue, setSearchValue] = useState('');
  const [userId, setUserId] = useState(null);

  // useEffect(() => {
  //   authService.getStatus(setUserId);
  // }, [authService]);

  const getSearchValueHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    //Max result indicates the amximum results of search Max number is 40

    googleBooks
      .search(searchValue)
      .then((results) => bookResultContext.setResult(results));
  };
  return (
    <Layout>
      <SearchBar
        submit={searchHandler}
        search={getSearchValueHandler}
        loggedIn={loggedIn}
      />
      <SearchWidget cardRepo={cardRepo} userId={userId} />
    </Layout>
  );
};

export default Search;
