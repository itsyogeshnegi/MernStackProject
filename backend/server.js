import express from "express";
const app = express();
import users from "./data.js";
import cors from "cors";

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is Ready..");
});
console.log('Server is Start...')

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});

app.get("/users", (req, res) => {
    res.send(users);
  });
