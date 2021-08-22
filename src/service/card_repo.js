import { firebaseDatabase } from './firebase';

class CardRepo {
  saveCard(userId, card) {
    firebaseDatabase.ref(`${userId}/cards`).set(card);
  }
}

export default CardRepo;
