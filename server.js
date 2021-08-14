const express = require("express");
const app = express();
const port = 8000;
const mongoose = require("mongoose");

const cors = require("cors");
// only for fullstack projects - npm i cors

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true}));
app.use(cors());
//^^ required 

const AllRoutes = require("./server/routes/authors.routes");

AllRoutes(app);

app.listen(8000, () => console.log("Server connection is connected and running on port: 8000"));
