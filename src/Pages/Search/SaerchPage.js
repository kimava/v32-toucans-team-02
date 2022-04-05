import React, { useContext, useState, useEffect } from 'react';
import axios from '../../service/AxiosGoogleRead';
import Layout from '../../component/Layout/Layout';
import Header from '../../component/Navigator/Header/Header';
import SearchBar from '../../component/Search/SearchBar/SeachBar';
import SearchWidget from '../../component/Search/SearchWidget/SearchWidget';
import { SearchContext } from './search-context';
import './SearchPage.css';

const Search = ({ loggedIn, authService, cardRepo }) => {
  const bookResultContext = useContext(SearchContext);
  const [searchValue, setSearchValue] = useState('');
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    authService.getStatus(setUserId);
  }, [authService]);

  const getSearchValueHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    //Max result indicates the amximum results of search Max number is 40

    axios
      .get(`${searchValue}&maxResults=40`)
      .then((response) => {
        let results = response.data.items;
        bookResultContext.setResult(results);
      })
      .catch((err) => {
        console.log('error', err);
        bookResultContext.setResult([]);
      });
  };
  return (
    <Layout>
      <Header logedIn={loggedIn} authService={authService} />
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
