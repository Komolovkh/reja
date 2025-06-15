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

const db = require("./server").db(); //buyerda esa biz server jsdan dbni export qildik
// const client = require("./server").db();
// const db = client.db(); qilishimiz ham mumkin
// reja => crud => create read update delete
const mongodb = require("mongodb");

// 1 kirish codelari
app.use(express.static("public")); //buyerda backenddagi fayllarni apilar orqali frontendga yuborish uchun foydalanamiz // middleware dp
app.use(express.json()); // middleware dp => rest api
app.use(express.urlencoded({ extended: true })); // middleware dp => traditional api

// 2: session code
// 3 views code
app.set("views", "views"); // views folderida ishlayotganimizi korsatadi
app.set("view engine", "ejs"); // bu esa frontendda ejs fayllarini ishlayotganimizi korsatadi

// BSSR >>> backend server side rendering => backendda HTML ni tayyorlab, frontendga yuboradi
// CSR  >>> client side rendering => backend faqat JS fayllarni yuboradi, frontend JS bilan render qiladi
// SPA  >>> single page application => frontendda bitta sahifa yuklanadi, qolgani JS orqali dinamik o'zgaradi

// 4 routing code

app.post("/create-item", (req, res) => {
  console.log("user entered /");
  console.log(req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    res.json(data.ops[0]);
  });
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});

app.post("/edit-item", (req, res) => {
  const data = req.body;
  console.log(data);
  db.collection("plans").findOneAndUpdate(
    {
      _id: new mongodb.ObjectId(data.id),
    },
    { $set: { reja: data.new_input } },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
  // res.end("done");
});

app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany(function (err, data) {
      res.json({ state: "hamma rejalar ochirildi" });
    });
  }
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

// API types >>>>>Traditional API(request response) REST API, GraphQL API, WebSocket API, gRPC, GraphQL, gRPC, JSON-RPC, XML-RPC, HTTP API, etc

// API methods >>>>>GET, POST, PUT, DELETE

// API sturctures >>>>>> header >> authorization, content-type
//                       body  >> data>>> json, xml, html, etc
//                       query parametrs >>>> additional options
