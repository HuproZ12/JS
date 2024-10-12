import {Author,Book} from "./interfaces";

export function createBook(title: string, author: Author, pages: number, isAvailable: boolean = true): Book{
    return {title, author, pages, isAvailable};
}

export function toggleAvailability(book: Book): void{
    book.isAvailable = !book.isAvailable;
}