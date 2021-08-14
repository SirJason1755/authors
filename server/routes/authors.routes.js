const AuthorsController = require("../controllers/authors.controller");

module.exports = app => {
    app.post("/api/authors/new",AuthorsController.createAuthor);
    app.get("/api/authors",AuthorsController.findAll);
    app.get("/api/authors/:_id",AuthorsController.findOne);
    app.put("/api/authors/update/:_id", AuthorsController.updateAuthor);
    app.delete("/api/authors/delete/:_id", AuthorsController.deleteAuthor);
}