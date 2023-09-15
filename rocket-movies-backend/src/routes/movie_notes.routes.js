const { Router } = require("express");
const MovieNotesController = require("../controllers/MovieNotesController");

const movieNotesController = new MovieNotesController();

const movieNotesRoutes = Router();

movieNotesRoutes.get("/:id", movieNotesController.show);
movieNotesRoutes.get("/", movieNotesController.index);
movieNotesRoutes.post("/", movieNotesController.create);
movieNotesRoutes.delete("/:id", movieNotesController.delete);


module.exports = movieNotesRoutes;