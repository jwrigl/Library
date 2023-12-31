let library = [];


function Book(title, author, genre) {
    //construct book object
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.read = false;
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

    if (titleInput.value === "" || authorInput.value === "" || genreInput.value === "") {
        // At least one of the input values is empty
        console.log("One or more inputs are empty.");
        return;
    }

    let title = titleInput.value;
    let author = authorInput.value;
    let genre = genreInput.value;

    let book = new Book(title, author, genre);

    titleInput.value = "";
    authorInput.value = "";
    genreInput.value = "";

    addBook(book);
}

function addBook(book) {
    //adds book to the library list
    library.push(book);
    hideModal();
    updateBookCount();

    rebuildLibrary();
}

function buildLibrary() {
 //Takes data from library array and builds HTML
 for (let i = 0; i < library.length; i++) {
     let book = document.createElement("div");
     book.innerText = library[i].title + " " + library[i].author + " " + library[i].genre;
     document.getElementById("libraryContainer").appendChild(book);
 }
}


function buildLibraryDisplay() {

    let parentContainer = document.getElementById("bookDisplayContainer");

    let displayContainer = document.createElement("div");
    displayContainer.style.display = "grid";
    displayContainer.style.gridTemplateColumns="repeat(auto-fit,minmax(250px,1fr)";
    //displayContainer.style.gap = "10px";
    displayContainer.setAttribute("id", "displayContainer");

    parentContainer.appendChild(displayContainer);

    for (let i = 0; i < library.length; i++) {
        let bookContainer = document.createElement("div");

        bookContainer.style.display = "flex";
        bookContainer.style.flexDirection = "column";
        bookContainer.style.alignItems = "center";

        bookContainer.setAttribute("id",i)

        //change the names of these containers, confusing
        displayContainer.appendChild(bookContainer);

        let bookIcon = document.createElement("h1")
        bookIcon.innerText = "📘";
        bookIcon.style.fontFamily = "google-emoji"
        bookContainer.appendChild(bookIcon);

        let bookTitle = document.createElement("h2");
        bookTitle.innerText = library[i].title;
        bookContainer.appendChild(bookTitle);

        let bookAuthor = document.createElement("h3");
        bookAuthor.innerText = "By " + library[i].author;
        bookContainer.appendChild(bookAuthor);

        let bookGenre = document.createElement("h4");
        bookGenre.innerText = "Genre: " + library[i].genre;
        bookContainer.appendChild(bookGenre);

        let bookRead = document.createElement("h4");
        bookRead.innerText = "Read: " + library[i].read;
        bookContainer.appendChild(bookRead);

        let bookButtonContainer = document.createElement("div");
        bookButtonContainer.style.display = "flex";
        bookContainer.appendChild(bookButtonContainer);
        

        let removeBookButton = document.createElement("button");
        removeBookButton.innerText = "Remove";
        removeBookButton.onclick = () => removeBook(i);
        removeBookButton.style.height = "auto";
        removeBookButton.style.width = "auto";
        bookButtonContainer.appendChild(removeBookButton);

        let markAsReadButton = document.createElement("button");
        markAsReadButton.innerText = "Mark as read";
        markAsReadButton.onclick = () => markAsRead(i);
        markAsReadButton.style.height = "auto";
        markAsReadButton.style.width = "auto";
        bookButtonContainer.appendChild(markAsReadButton);


    }

}

function deleteLibraryElements() {
    document.getElementById("libraryContainer").innerText = "";
}

function removeBook(id) {
    library.splice(id, 1);
    console.log(library)
    updateBookCount();
    rebuildLibrary();
}

function deleteLibraryDisplay() {
    bookDisplay = document.getElementById("displayContainer")
    // exits function if there is no bookDisplay (when first book added)
    if(!bookDisplay) {return;}
    while (bookDisplay.firstChild) {
        bookDisplay.firstChild.remove()
    }
    bookDisplay.remove()
}

function markAsRead(i) {
    objectToModify = library[i];
    objectToModify.read = true;
    library[i] = objectToModify;
    console.log("after read",library)
    rebuildLibrary();
}

function rebuildLibrary() {
    deleteLibraryElements();
    deleteLibraryDisplay();
    buildLibrary();
    buildLibraryDisplay();
}

function displayModal() {
    document.getElementById("modalContainer").style.display = "block";
}

function hideModal() {
    modalContainer = document.getElementById("modalContainer").style.display="none";
}

function updateBookCount() {
    document.getElementById("bookCount").innerText = library.length;
}