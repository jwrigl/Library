let library = [];


function Book(title, author, genre) {
    //construct book object
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.recall = function() {
        console.log(this.title + " " + this.author + " " + this.genre);
    }
}

const book1 = new Book("book1", "author1", "genre1");

book1.recall();

function addBook() {
    //adds book to the library list
}

function buildLibrary() {
 //Takes data from library array and builds HTML
 for (let i = 0; i < library.length; i++) {
     let book = document.createElement("div");
     book.innerText = library[i].title + " " + library[i].author + " " + library[i].genre;
     document.getElementById("libraryContainer").appendChild(book);
 }
}

