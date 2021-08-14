const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/author", {
    useNewUrlParser: true,
    useUnifiedTopology: true
} )
    .then( () => console.log("...estiablished connection to DB - Authors..."))
    .catch(err => console.log("Something went wrong, Error: ", err))
    