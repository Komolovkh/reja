const http = require("http");

const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://khurshid01:97X7wT05wGzEo6MG@cluster0.z2wyzq7.mongodb.net/reja";
//cluster => database => collection => document => dataset

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.log("Error on connection to Mongodb");
    } else {
      console.log("connected to database successfully");
      module.exports = client; //biz buyerda exportdan foydalandik sababi boshqa fayllarda ham ishlatish uchun
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `the server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
