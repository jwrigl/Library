let library = [];


function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.recall = function() {
        console.log(this.title + " " + this.author + " " + this.isbn);
    }
}

const book1 = new Book("book1", "author1", "isbn1");

book1.recall();



function buildLibrary() {

}

