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










// Show modal
const modal = document.querySelector(".modal");
const addBig = document.getElementById("add-big");

addBig.addEventListener("click", () => modal.showModal());

// Close modal
const closeModal = document.querySelector(".close");
closeModal.addEventListener("click", () => modal.close());
