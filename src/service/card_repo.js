import { getDatabase, ref, set, remove, onValue, off } from 'firebase/database';

class CardRepo {
  constructor(app) {
    this.db = getDatabase(app);
  }

  fetchCards(userId, onUpdate) {
    const query = ref(this.db, `users/${userId}/cards`);
    onValue(query, (snapshot) => {
      const value = snapshot.val();
      onUpdate(value);
    });
    return () => off(query);
  }

  saveCard(userId, id, card) {
    set(ref(this.db, `users/${userId}/cards/${id}`), card);
  }

  removeCard(userId, id) {
    remove(ref(this.db, `users/${userId}/cards/${id}`));
  }
}

export default CardRepo;
