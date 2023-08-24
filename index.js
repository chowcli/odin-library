// Declare variable
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close");
const resetBtn = document.querySelector(".reset");

const addBig = document.getElementById("add-big");
const addSmall = document.getElementById("add-small");

// Interact with modal
addBig.addEventListener("click", () => modal.showModal());
closeModal.addEventListener("click", () => modal.close());

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

Book.prototype.addBookToLibrary = function (book) {
  myLibrary.push(book);
};

// Create new book object and take value from user input
function createBookObject() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("authorName").value;
  const pages = document.getElementById("pageNums").value;
  const language = document.getElementById("language").value;
  const date = document.getElementById("publishDate").value;
  const status = document.getElementById("readStatus").value;

  const book = new Book(title, author, pages, language, date, status);

  book.addBookToLibrary(book);
}

addSmall.addEventListener("click", createBookObject);

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
