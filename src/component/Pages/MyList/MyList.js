import React, { useEffect, useState } from 'react';
import Booklist from '../../BookList/Booklist';
import Layout from '../../Layout/Layout';
import Header from '../../Navigator/Header/Header';

const MyList = ({ authService, cardRepo }) => {
  const [userId, setUserId] = useState(null);
  const [cards, setCards] = useState({});

  useEffect(() => {
    authService.getStatus(setUserId);
  });

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopFetch = cardRepo.fetchCards(userId, (items) => {
      setCards(items);
    });
    return () => stopFetch();
  }, [userId]);

  const deleteCard = (selected) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[selected.id];
      return updated;
    });
    cardRepo.removeCard(userId, selected.id);
  };

  return (
    <div>
      {/* <Header /> */}
      <h2>My List</h2>
      {cards &&
        Object.keys(cards).map((key) => (
          <Booklist key={key} card={cards[key]} deleteCard={deleteCard} />
        ))}
    </div>
  );
};

export default MyList;
