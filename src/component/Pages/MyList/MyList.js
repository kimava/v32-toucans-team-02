import { Save, SwapVerticalCircleRounded } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import Booklist from '../../BookList/Booklist';
import Layout from '../../Layout/Layout';
import Header from '../../Navigator/Header/Header';
import './MyList.css';

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

  const addCard = (card) => {
    cardRepo.saveCard(userId, card.id, card);
  };

  return (
    <div>
      {/* <Header /> */}
      <h2>My List</h2>
      <div className='card-container'>
        {cards &&
          Object.keys(cards).map((key) => (
            <Booklist
              key={key}
              card={cards[key]}
              deleteCard={deleteCard}
              addCard={addCard}
            />
          ))}
      </div>
    </div>
  );
};

export default MyList;
