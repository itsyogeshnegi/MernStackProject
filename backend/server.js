
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const router = require("./router")
const app = express();

const URL =
  "mongodb+srv://yogeshnegi:yogesh2002@cluster0.iozdac0.mongodb.net/sample_mflix";

mongoose
  .connect(URL)
  .then(() => {
    console.log("MongoDB Connected Successfully...");
  })
  .catch(error => {
    console.log("MongoDB Connected Failed...", error);
  });

app.use(router)
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
