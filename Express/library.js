const exp = require("express");
const fs = require("fs");
const book = require("./books");

const app = exp();

app.use(exp.json());
const b = book.books;
//API
app.get("/api/books", (req, res) => {
  res.send(b);
});

app.get("/api/books/:id", (req, res) => {
  let book_search = false;
  for (let i = 0; i < b.length; i++) {
    if (b[i].id == Number(req.params.id)) {
      book_search = b[i];
      break;
    }
  }

  if (book_search) {
    res.send(book_search);
  } else {
    let error_message = "Book not found!";
    res.status(404);
    res.send(error_message);
  }
});

app.get("/api/books/genre/:genre", (req, res) => {
  let book_genre = [];
  for (let i = 0; i < b.length; i++) {
    if (b[i].genre.toLowerCase() == req.params.genre.toLowerCase()) {
      book_genre.push(b[i]);
    }
  }

  if (book_genre.length > 0) {
    res.send(book_genre);
  } else {
    let error_message = "Book of specified genre not found.";
    res.status(404);
    res.send(error_message);
  }
});

// Main Website
app.get("/home", (req, res) => {
  res.send("Hello world! Goodbye!");
});

app.get("/about", (req, res) => {
  console.log("Someone accessed the About page. Luh, nangingialam?");
  res.send("About page");
});

app.get("/shop", (req, res) => {
  console.log("Someone accessed the Shop page. Indaaaaayy!! May bumibili!");
  // res.send("Shop page");
  fs.readFile("shop.html", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  });
});

// Server setup
app.listen(3000);
console.log("Starting server... halaaa");
