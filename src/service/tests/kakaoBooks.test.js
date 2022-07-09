import Kakao from '../kakaoBooks.js';
import StubBooksClient from './stub_books_client.js';

describe('Kakao', () => {
  let kakao;
  let stubBooksClient;
  let trimList;

  beforeEach(() => {
    stubBooksClient = new StubBooksClient();
    kakao = new Kakao(stubBooksClient, 4);
    trimList = jest.fn();
  });

  it('inits with max number of search result', () => {
    expect(kakao.maxResults).toEqual(4);
  });

  it('removes duplicated object from a list array', async () => {
    const array = await stubBooksClient.get();
    expect(kakao.removeDuplicates(array).length).toBe(3);
  });

  it('trims list array after receiving the data', async () => {
    const array = await stubBooksClient.get();
    expect(kakao.trimList(array)[0]).toEqual({
      id: '333',
      title: '반지의 제왕',
      author: '톨킨',
      thumbnail: 'mock',
      date: '2021-02-24',
    });
  });
});
