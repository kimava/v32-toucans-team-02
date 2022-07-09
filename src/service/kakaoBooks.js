class Kakao {
  constructor(client, maxResults) {
    this.kakaoBooks = client;
    this.maxResults = maxResults;
  }

  async search(query) {
    const response = await this.kakaoBooks.get(`${query}`, {
      params: {
        query: query,
        size: this.maxResults,
      },
    });
    return this.trimList(response.data.documents);
  }

  trimList(list) {
    let trimmed = [];
    list.map((item) => {
      const id = item.isbn;
      const title = item.title;
      const author = item.authors[0];
      const thumbnail = item.thumbnail;
      const date = item.datetime.slice(0, 10);
      trimmed.push({ id, title, author, thumbnail, date });
    });
    return this.removeDuplicates(trimmed);
  }

  removeDuplicates(array) {
    const set = new Set();
    return array.filter((item) => {
      const alreadyExist = set.has(item.id);
      set.add(item.id);
      return !alreadyExist;
    });
  }
}

export default Kakao;
