import {Book} from "./interfaces";

export class Library{
    books: Book[] = [];

    addBook(book: Book): void{
        this.books.push(book);
    }

    removeBook(title: string): void{
        this.books = this.books.filter(book => book.title != title);
    }

    findBookByTitle(title: string): Book{
        return this.books.find(book => book.title === title);
    }

    listAvailableBooks(): Book[]{
        return this.books.filter(book => book.isAvailable === true);
    }

    getBooksByAuthor(authorName: string): Book[]{
        return this.books.filter(book => book.author.name === authorName);
    }
}
