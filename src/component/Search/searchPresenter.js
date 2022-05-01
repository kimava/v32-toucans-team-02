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
    const id = list.id;
    const info = list.volumeInfo;
    const title = info.title ? info.title : '';
    const author = info.authors ? info.authors : 'unknown';
    const thumbnail = info.imageLinks?.thumbnail;
    const imgUrl = thumbnail ? thumbnail : null;
    return { id, title, author, thumbnail, imgUrl };
  }
}

export default GoogleBooks;
