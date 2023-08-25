// Declare variable
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close");
const resetBtn = document.querySelector(".reset");

const addBig = document.getElementById("add-big");
const addSmall = document.getElementById("add-small");

// Interact with modal
addBig.addEventListener("click", () => {
  modal.showModal();
  clearInput();
});
closeModal.addEventListener("click", () => {
  modal.close();
});

// Object constructor for library
const myLibrary = [];

function Book(title, author, pages, language, date, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.language = language;
  this.date = date;
  this.status = status;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

// Create new book object and take value from user input
function createBookObject() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("authorName").value;
  const pages = document.getElementById("pageNums").value;
  const language = document.getElementById("language").value;
  const date = document.getElementById("publishDate").value;
  const status = document.getElementById("readStatus").value;

  if (title === "" || author === "" || status === "") {
    return null;
  }

  const book = new Book(title, author, pages, language, date, status);
  return book;
}

// Check if there are two same book
function avoidDuplicate(book) {
  return myLibrary.some(existBook => existBook.title === book.title);
}

addSmall.addEventListener("click", () => {
  const book = createBookObject();

  if (book === null) {
    return;
  }
  if (avoidDuplicate(book)) {
    alert("This book is already exist in your library!");
    return;
  }

  addBookToLibrary(book);
});

// Clear form fields
function clearInput() {
  document.getElementById("title").value = "";
  document.getElementById("authorName").value = "";
  document.getElementById("pageNums").value = "";
  document.getElementById("language").value = "";
  document.getElementById("publishDate").value = "";
  document.getElementById("readStatus").value = "";
}

resetBtn.addEventListener("click", clearInput);
