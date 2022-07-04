import Kakao from '../kakaoBooks.js';
import StubBooksClient from './stub_books_client.js';

describe('Kakao books', () => {
  let kakao;
  let stubBooksClient;

  beforeEach(() => {
    stubBooksClient = new StubBooksClient();
    kakao = new Kakao(stubBooksClient, 4);
  });

  it('removes duplicated object from a data array', async () => {
    const array = await stubBooksClient.search();
    expect(kakao.removeDuplicates(array).length).toBe(3);
  });

  it('trims list array after receiving the data', async () => {
    const array = await stubBooksClient.search();
    expect(kakao.trimList(array)[0]).toEqual({
      id: '333',
      title: '반지의 제왕',
      author: '톨킨',
      thumbnail: 'mock',
      date: '2021-02-24',
    });
  });
});
