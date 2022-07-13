import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth_context';
import axios from 'axios';
import Kakao from '../../service/kakaoBooks';
import Layout from '../../component/Layout/Layout';
import SearchBar from '../../component/Search/SearchBar/SeachBar';
import SearchedList from '../../component/Search/SearchedList/SearchedList';
import PopUp from '../../component/PopUp/PopUp';
import Selector from '../../component/UI/selector';
import styled from 'styled-components';

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
  const [query, setQuery] = useState('');
  const [selectorTitle, setSelectorTitle] = useState('정렬기준');
  const [popUpOpen, setPopUpOpen] = useState(false);

  const handleSearch = (query) => {
    kakaoBooks
      .search(query)
      .then(setBookList)
      .catch((error) => {
        console.log(error);
        setBookList(null);
      });
  };

  const handleSearchLatest = (query) => {
    kakaoBooks
      .searchLatest(query)
      .then(setBookList)
      .catch((error) => {
        console.log(error);
        setBookList(null);
      });
  };

  const handleSort = (sort) => {
    sort === '정확도순' ? handleSearch(query) : handleSearchLatest(query);
  };

  const addList = (bookId, title, author, url) => {
    const id = Date.now().toString();
    const info = { key: id, title, author, url, bookId };
    cardRepo.saveCard(userId, id, info);
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
      <StyledDiv>
        <SearchBar
          onSearch={handleSearch}
          setQuery={setQuery}
          setSelectorTitle={setSelectorTitle}
        />
        {bookList.length > 0 && (
          <Selector
            title={selectorTitle}
            setTitle={setSelectorTitle}
            list={['정확도순', '최신순']}
            disabled={false}
            callback={handleSort}
          />
        )}
      </StyledDiv>

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

const StyledDiv = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 90%;
`;
