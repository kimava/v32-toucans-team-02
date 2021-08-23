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

  saveCard(userId, id, card) {
    firebaseDatabase.ref(`${userId}/cards/${id}`).set(card);
  }

  removeCard(userId, id) {
    firebaseDatabase.ref(`${userId}/cards/${id}`).remove();
  }
}

export default CardRepo;
