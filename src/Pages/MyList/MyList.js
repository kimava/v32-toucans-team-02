import React, { useContext, useEffect, useState } from 'react';
import Booklist from '../../component/BookList/Booklist';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth_context';
import './MyList.css';
import Layout from '../../component/Layout/Layout';

const MyList = ({ cardRepo }) => {
  const navigate = useNavigate();
  const { userId } = useContext(AuthContext);
  const [cards, setCards] = useState({});

  useEffect(() => {
    if (!userId) {
      navigate('/login');
    }
    const stopFetch = cardRepo.fetchCards(userId, (items) => {
      setCards(items);
    });
    return () => stopFetch();
  }, [userId, cardRepo]);

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
    <Layout>
      <div className='card-container'>
        {cards &&
          Object.keys(cards).map((item) => (
            <Booklist
              key={cards[item].id}
              card={cards[item]}
              deleteCard={deleteCard}
              addCard={addCard}
            />
          ))}
      </div>
    </Layout>
  );
};

export default MyList;
