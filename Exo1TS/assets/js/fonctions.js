export function createBook(title, author, pages, isAvailable = true) {
    return { title, author, pages, isAvailable };
}
export function toggleAvailability(book) {
    book.isAvailable = !book.isAvailable;
}
