console.log("web serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

// 1 kirish codelari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: session code
// 3 views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 routing code
app.get("/hello", function (req, res) {
  res.send(`<h1 style="background: red">HELLO WORLD by lucas</h1>`);
});

app.get("/gift", function (req, res) {
  res.send(`<h1>siz sovgalar bolimidasiz</h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`the server is running successfully on port: ${PORT}`);
});
