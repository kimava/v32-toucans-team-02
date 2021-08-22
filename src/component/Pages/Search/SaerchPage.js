import React, { useContext, useState, useEffect } from 'react';
import axios from '../../../service/AxiosGoogleRead';
import Layout from '../../Layout/Layout';
import Header from '../../Navigator/Header/Header';
import SearchBar from '../../Search/SearchBar/SeachBar';
import SearchWidget from '../../Search/SearchWidget/SearchWidget';
import { SearchContext } from './search-context';

const Search = ({ logedIn, authService, cardRepo }) => {
  const bookResultContext = useContext(SearchContext);
  const [searchValue, setSearchValue] = useState('');
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    authService.getStatus(setUserId);
  });

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
        //console.log(results)
        bookResultContext.setResult(results);

        // bookResultContext.setResult([...response.data.items])
        /* const results=[...response.data.items]
            console.log(`results :${results}`)
            setResultBooks(results) */

        /*  console.log(books)
            console.log(`this is book useState:${books}`)
            const booklist =  books
            let book = booklist.map((item)=>{
            return `Book title:${item.volumeInfo.title }`
        } )*/

        // Show the results in  a p tag

        /*
         let text='' 
        book.forEach((element) => {
           
           text += element + '<br/>'
        }); */
      })
      .catch((err) => {
        console.log('error', err);
        bookResultContext.setResult([]);
      });
  };
  return (
    <Layout>
      <Header logedIn={logedIn} />
      <SearchBar submit={searchHandler} search={getSearchValueHandler} />

      <SearchWidget cardRepo={cardRepo} userId={userId} />
    </Layout>
  );
};

export default Search;
