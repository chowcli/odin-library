// Declare variable
const bookContainer = document.querySelector(".books-container");
const modal = document.querySelector(".modal");

const addBig = document.getElementById("add-big");

// Open modal
addBig.addEventListener("click", () => {
  modal.showModal();
  clearInput();
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

Book.prototype.setBookID = function () {
  this.ID = Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
};

function addBookToLibrary(book) {
  myLibrary.push(book);
}

// Function definitions
function removeBookFromLibrary(id) {
  const bookIndex = myLibrary.findIndex(book => (book.ID = id));
  if (bookIndex !== -1) {
    myLibrary.splice(bookIndex, 1);
  }
}

function removeBookCardElement(dataId) {
  const bookCard = document.querySelector(`[data-id="${dataId}"]`);
  if (bookCard) {
    bookCard.remove();
  }
}

// Create book card
function createCard(book) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");
  bookCard.setAttribute("data-id", book.ID); // assign data attribute with unique id to book card

  const cardDetail = [
    { tag: "h3", class: "title", text: `${book.title}` },
    { tag: "p", class: "author", text: `By: ${book.author}` },
    { tag: "p", class: "pages", text: `Number of pages: ${book.pages}` },
    { tag: "p", class: "language", text: `Language: ${book.language}` },
    { tag: "p", class: "date", text: `Published: ${book.date}` },
    { tag: "p", class: "status", text: `Status: ${book.status}` },
  ];

  // Add heading and content to book card
  cardDetail.forEach(item => {
    const element = document.createElement(item.tag);
    element.classList.add(item.class);
    element.textContent = item.text;

    bookCard.appendChild(element);
  });

  // Add button to book card
  const cardBtns = document.createElement("div");
  cardBtns.classList.add("card-btn");

  ["Change", "Delete"].forEach(btnText => {
    const element = document.createElement("button");
    element.classList.add(`${btnText.toLowerCase()}Btn`);
    element.textContent = btnText;

    cardBtns.appendChild(element);
  });
  bookCard.appendChild(cardBtns);

  bookContainer.appendChild(bookCard);
}

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

function avoidDuplicate(book) {
  return myLibrary.some(existBook => existBook.title === book.title);
}

function clearInput() {
  document.getElementById("title").value = "";
  document.getElementById("authorName").value = "";
  document.getElementById("pageNums").value = "";
  document.getElementById("language").value = "";
  document.getElementById("publishDate").value = "";
  document.getElementById("readStatus").value = "";
}

// Event listeners
// Interact with delete button, change button using event delegation
bookContainer.addEventListener("click", event => {
  const { target } = event;

  if (target.classList.contains("deleteBtn")) {
    const bookCard = target.closest(".book-card");
    const bookID = bookCard.getAttribute("data-id");

    removeBookCardElement(bookID);
    removeBookFromLibrary(bookID);
    return;
  }
});

// Event delegation for modal
modal.addEventListener("click", event => {
  const { target } = event;

  if (target.classList.contains("close")) {
    modal.close();
    return;
  }

  if (target.id === "add-small") {
    const book = createBookObject();

    if (book === null) {
      return;
    }
    if (avoidDuplicate(book)) {
      alert("This book is already exist in your library!");
      return;
    }
    book.setBookID(); // create unique book id

    addBookToLibrary(book);
    createCard(book);
    return;
  }

  if (target.classList.contains("reset")) {
    clearInput();
  }
});
