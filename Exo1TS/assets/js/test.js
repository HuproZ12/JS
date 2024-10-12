import { Library } from "./classes.js";
import { createBook, toggleAvailability } from "./fonctions.js";
let biblio = new Library();
biblio.addBook(createBook("Espace", { name: "Diderot", birthYear: 1500, genres: ["Comedie", "Drame"] }, 500));
toggleAvailability(biblio.findBookByTitle("Espace"));
console.log(biblio.listAvailableBooks());
