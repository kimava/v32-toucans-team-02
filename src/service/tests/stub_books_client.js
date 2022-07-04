class StubBooksClient {
  async search() {
    return [
      {
        authors: ['톨킨'],
        datetime: '2021-02-24T00:00:00.000+09:00',
        id: '11',
        isbn: '333',
        publisher: '아르테(arte)',
        thumbnail: 'mock',
        title: '반지의 제왕',
      },
      {
        authors: ['J. R. R. 톨킨', 'unknown'],
        datetime: '2021-02-23T00:00:00.000+09:00',
        id: '11',
        isbn: '11',
        publisher: '아르테(arte)',
        thumbnail: 'https://search1.kakaocdn.net/thumb',
        title: '반지의 제왕 1: 반지 원정대(양장본 HardCover)',
      },
      {
        authors: ['J. R. R. 톨킨'],
        datetime: '2002-11-25T00:00:00.000+09:00',
        id: '2',
        isbn: '2',
        publisher: '씨앗을뿌리는사람',
        thumbnail: 'https://search1.kakaocdn.net/thumb',
        title: '반지의 제왕(전7권)',
      },
      {
        authors: ['J. R. R. 톨킨'],
        datetime: '2001-12-01T00:00:00.000+09:00',
        isbn: '3',
        isbn: '3',
        publisher: '황금가지',
        thumbnail: 'https://search1.kakaocdn.net/thumb',
        title: '반지의 제왕(전6권)',
      },
    ];
  }
}

export default StubBooksClient;
