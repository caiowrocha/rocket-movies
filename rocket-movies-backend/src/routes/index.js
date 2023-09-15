const { Router } = require("express");

const usersRouter = require("../routes/users.routes");
const movieNotesRouter = require("../routes/movie_notes.routes");
const movieTagsRouter = require("../routes/movie_tags.routes");

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/notes", movieNotesRouter);
routes.use("/tags", movieTagsRouter);

module.exports = routes;