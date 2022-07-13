import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/auth_context';
import Booklist from '../../component/BookList/Booklist';
import Layout from '../../component/Layout/Layout';
import './MyList.css';

const MyList = ({ cardRepo }) => {
  const { userId } = useContext(AuthContext);
  const [cards, setCards] = useState({});
  const cardList = cards && Object.keys(cards).reverse();

  useEffect(() => {
    const stopFetch = cardRepo.fetchCards(userId, (items) => {
      setCards(items);
    });
    return () => stopFetch();
  }, [userId, cardRepo]);

  const saveCard = (card) => {
    cardRepo.saveCard(userId, card.key, card);
  };

  const deleteCard = (selected) => {
    cardRepo.removeCard(userId, selected.key);
  };

  return (
    <Layout>
      <div className='card-container'>
        {cardList ? (
          cardList.map((item) => (
            <Booklist
              key={cards[item].bookId}
              card={cards[item]}
              saveCard={saveCard}
              deleteCard={deleteCard}
            />
          ))
        ) : (
          <p>no list yet</p>
        )}
      </div>
    </Layout>
  );
};

export default MyList;
