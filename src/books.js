const books = [
  {
    id: '1',
    name: 'Buku 1',
    year: 2022,
    author: 'Penulis A',
    summary: 'Ringkasan buku 1',
    publisher: 'Penerbit X',
    pageCount: 200,
    readPage: 100,
    finished: false,
    reading: true,
    insertedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Buku 2',
    year: 2023,
    author: 'Penulis B',
    summary: 'Ringkasan buku 2',
    publisher: 'Penerbit Y',
    pageCount: 150,
    readPage: 50,
    finished: false,
    reading: true,
    insertedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'Buku 3',
    year: 2023,
    author: 'Penulis C',
    summary: 'Ringkasan buku 3',
    publisher: 'Penerbit Z',
    pageCount: 250,
    readPage: 100,
    finished: false,
    reading: true,
    insertedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

module.exports = books;
