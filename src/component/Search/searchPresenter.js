class GoogleBooks {
  constructor(client) {
    this.googleBooks = client;
  }

  async search(query) {
    const response = await this.googleBooks.get(`${query}`, {
      params: {
        maxResults: 40,
      },
    });
    return response.data.items;
  }

  trimList(list) {
    const id = list.industryIdentifiers[0].identifier;
    const { title } = list;
    const author = list.authors ? list.authors : 'unknown';
    const thumbnail = list.imageLinks?.thumbnail;
    const imgUrl = thumbnail ? thumbnail : null;
    return { id, title, author, thumbnail, imgUrl };
  }
}

export default GoogleBooks;
