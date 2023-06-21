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

function handleDataEntry() {
    let titleInput = document.getElementById("bookTitle")
    let authorInput = document.getElementById("bookAuthor")
    let genreInput = document.getElementById("bookGenre")

    let title = titleInput.value;
    let author = authorInput.value;
    let genre = genreInput.value;

    let book = new Book(title, author, genre);

    titleInput.value, authorInput.value, genreInput.value = "";




    addBook(book);
}

function addBook(book) {
    //adds book to the library list
    library.push(book);

    buildLibrary();
}

function buildLibrary() {
 //Takes data from library array and builds HTML
 for (let i = 0; i < library.length; i++) {
     let book = document.createElement("div");
     book.innerText = library[i].title + " " + library[i].author + " " + library[i].genre;
     document.getElementById("libraryContainer").appendChild(book);
 }
}

