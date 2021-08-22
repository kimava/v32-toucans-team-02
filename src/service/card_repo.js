import { firebaseDatabase } from './firebase';

class CardRepo {
  fetchCards(userId, onUpdate) {
    const ref = firebaseDatabase.ref(`${userId}/cards`);
    ref.on('value', (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ref.off();
  }

  saveCard(userId, card) {
    firebaseDatabase.ref(`${userId}/cards`).set(card);
  }

  removeCard(userId, card) {
    firebaseDatabase.ref(`${userId}/cards`).remove();
  }
}

export default CardRepo;
