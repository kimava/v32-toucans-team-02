import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth_context';
import { StyledDiv, StatsDiv, StatsList } from './StatsStyle';

const Stats = ({ cardRepo }) => {
  const navigate = useNavigate();
  const { userId } = useContext(AuthContext);
  const [cards, setCards] = useState({});
  const cardList = cards && Object.keys(cards);

  useEffect(() => {
    if (!userId) {
      navigate('/login');
    }
    const stopFetch = cardRepo.fetchCards(userId, (items) => {
      setCards(items);
    });
    return () => stopFetch();
  }, [userId, navigate, cardRepo]);

  const readingStatus = cardList?.map((item) => cards[item].status);

  const bringStats = (status) => {
    return readingStatus?.filter((item) => item === status).length || 0;
  };

  return (
    <StyledDiv>
      <h1>Your Stats</h1>
      <StatsDiv>
        <StatsList>
          <p>{readingStatus ? readingStatus.length : 0}</p>
          <h3>Total books</h3>
        </StatsList>
        <StatsList>
          <p>{bringStats('to read')}</p>
          <h3>To Read</h3>
        </StatsList>
        <StatsList>
          <p>{bringStats('reading')}</p>
          <h3>Reading</h3>
        </StatsList>
        <StatsList>
          <p>{bringStats('done')}</p>
          <h3>Done</h3>
        </StatsList>
      </StatsDiv>
    </StyledDiv>
  );
};

export default Stats;
