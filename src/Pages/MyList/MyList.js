import React, { useEffect, useState } from 'react';
import Booklist from '../../component/BookList/Booklist';
import Header from '../../component/Navigator/Header/Header';
import { useHistory } from 'react-router-dom';
import './MyList.css';

const MyList = ({ authService, cardRepo, loggedIn }) => {
  const [userId, setUserId] = useState(null);
  const [cards, setCards] = useState({});
  let history = useHistory();
  if (!loggedIn) {
    history.push('/');
  }
  useEffect(() => {
    authService.getStatus(setUserId);
  }, [authService]);

  useEffect(() => {
    if (!userId) {
      return;
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
    <div>
      {/*      if(loggedIn==false){
    
    <Redirect to='/' />
  } */}
      <Header logedIn={loggedIn} />
      <Header logedIn={loggedIn} authService={authService} />
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
    </div>
  );
};

export default MyList;
