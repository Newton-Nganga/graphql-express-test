const mockedAuthors = [
  {
    id: "1",
    firstname: "Mike",
    lastname: "Rose",
  },
  {
    id: "2",
    firstname: "John",
    lastname: "Wiles",
    books: [
      {
        id: "1",
        title: "Book 1",
        author: {
          id: "2",
          firstname: "John",
          lastname: "Wiles",
        },
      },
      {
        id: "2",
        title: "Book 2",
        author: {
          id: "2",
          firstname: "John",
          lastname: "Wiles",
        },
      },
    ],
  },
];

const mockedBooks = {
  1: {
    title: "Book 1",
    author: mockedAuthors["2"],
  },
  2: {
    title: "Book 2",
    author: mockedAuthors["2"],
  },
};

module.exports = { mockedAuthors, mockedBooks };
