class Book {
    constructor(title, author, genre, image) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.image = image;
        this.rating = null;
    }
}

const books = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "classic",
      image: "../assets/gatsby.jpeg",
      comments: [
        {
          name: "George P",
          comment: "This is a wonderful classic that everybody should read at least once!",
          date: null,
          rating: 5,
        },
      ],
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "classic",
      image: "../assets/pride.jpg",
      comments: [
        {
          name: "Emily W",
          comment: "A timeless romance novel that captures the complexities of society.",
          date: null,
          rating: 4.3,
        },
      ],
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "dystopian",
      image: "../assets/1984.jpg",
      comments: [
        {
          name: "John D",
          comment: "A chilling portrayal of a totalitarian society.",
          date: null,
          rating: 4.9,
        },
        {
          name: "Sophia L",
          comment: "One of my favorite dystopian novels!",
          date: null,
          rating: 4.8,
        },
      ],
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "classic",
      image: "../assets/catcher.jpg",
      comments: [
        {
          name: "Michael B",
          comment: "A coming-of-age story with a memorable protagonist.",
          date: null,
          rating: 3.2,
        },
      ],
    },
    {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        genre: "fantasy",
        image: "../assets/lor.jpeg",
        comments: [
          {
            name: "Robert M",
            comment: "An epic tale with rich world-building and unforgettable characters.",
            date: null,
            rating: 4.4,
          },
        ],
      },
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "classic",
        image: "../assets/mockingbird.jpg",
        comments: [
          {
            name: "Alice C",
            comment: "A powerful and thought-provoking novel with memorable characters.",
            date: null,
            rating: 4.1,
          },
        ],
      },
      {
        title: "The Chronicles of Narnia",
        author: "C.S. Lewis",
        genre: "fantasy",
        image: "../assets/narnia.jpg",
        comments: [
          {
            name: "Emily R",
            comment: "A magical series that sparks the imagination.",
            date: null,
            rating: 3.1,
          },
        ],
      },
      {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        genre: "fantasy",
        image: "../assets/harrypotter.jpg",
        comments: [
          {
            name: "Daniel H",
            comment: "The beginning of an enchanting journey into the wizarding world.",
            date: null,
            rating: 3,
          },
        ],
      },
      {
        title: "The Alchemist",
        author: "Paulo Coelho",
        genre: "fiction",
        image: "../assets/alchemist.jpg",
        comments: [
          {
            name: "Sophie T",
            comment: "A beautiful story with inspiring messages about following your dreams.",
            date: null,
            rating: 4.1,
          },
        ],
      },
      {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        genre: "science fiction",
        image: "../assets/galaxy.jpg",
        comments: [
          {
            name: "Michael S",
            comment: "A hilarious and clever space adventure that will leave you laughing.",
            date: null,
            rating: 3.9,
          },
        ],
      },
  ];
  
  export { Book, books };
  