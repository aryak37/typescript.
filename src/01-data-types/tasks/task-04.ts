/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

type Book = {
    ISBN: string;
    title: string;
    author: string;
    pages: number;
    category: string;
    isAvailable: boolean;
};

const books: Book[] = [
    {
        ISBN: "978-0131103627",
        title: "How to Play JJS",
        author: "Jay J.S",
        pages: 272,
        category: "Video Game",
        isAvailable: true,
    },
    {
        ISBN: "978-602-03-3295-7",
        title: "Roblox",
        author: "Robert L. Ox",
        pages: 529,
        category: "Video Game",
        isAvailable: false,
    },
    {
        ISBN: "978-0596517748",
        title: "How to Make Spoon",
        author: "Spoon Spoonicus",
        pages: 1000,
        category: "Utensils",
        isAvailable: true
    }
];

console.log(books);
console.log(`Penulis : ${books[1].author}`)