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
}

export default GoogleBooks;
