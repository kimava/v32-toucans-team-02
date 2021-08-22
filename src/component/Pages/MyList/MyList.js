import React, { useEffect, useState } from 'react';
import Booklist from '../../BookList/Booklist';
import Layout from '../../Layout/Layout';
import Header from '../../Navigator/Header/Header';

const MyList = ({ authService, cardRepo }) => {
  const [userId, setUserId] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    authService.getStatus(setUserId);
  });

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopFetch = cardRepo.fetchCards(userId, (cards) => {
      setCards(cards);
    });
    return () => stopFetch();
  }, [userId]);

  const deleteCard = (selected) => {
    const updated = cards.filter((card) => card.id !== selected.id);
    setCards(updated);
  };

  return (
    <div>
      {/* <Header /> */}
      <h2>My List</h2>
      {cards &&
        cards.map((card) => (
          <Booklist key={card.id} card={card} deleteCard={deleteCard} />
        ))}
    </div>
  );
};

export default MyList;
