const express = require("express");
const app = express();
require('dotenv').config()
const port = process.env.PORT
const mongoose = require("mongoose");

app.use(express.json());
app.use("/users",require("./apis/user.api"))
app.use("/photos", require("./apis/photo.api"));
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

mongoose.connect("mongodb://localhost:27017/photoapp2");
