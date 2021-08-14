const mongoose = require("mongoose");

const AuthorsSchema = new mongoose.Schema({
    name:{ //<==== be careful of capitalization
        type: String,
        required:[true,"must enter name "],
        minlength:[3, "min length 3"]
    },

},{timestamp:true});


module.exports.Author = mongoose.model("Author",AuthorsSchema);