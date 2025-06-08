console.log("web serverni boshlash");
const express = require("express");
const app = express();

const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR", err);
  } else {
    user = JSON.parse(data);
  }
});

//Mongodb connect

const db = require("./server").db();

// 1 kirish codelari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: session code
// 3 views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 routing code

app.post("/create-item", (req, res) => {
  console.log("user entered /");
  console.log(req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    if (err) {
      console.log(err);
      res.end("something went wrong");
    } else {
      res.end("successfully added");
    }
  });
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        // console.log(data);
        res.render("reja", { items: data });
      }
    });
});

module.exports = app;
