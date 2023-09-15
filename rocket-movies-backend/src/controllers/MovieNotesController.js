const knex = require("../database/knex");

class MovieNotesController {
  async create(request, response) {
    const { title, desc, rating, tags } = request.body;
    const { user_id } = request.query;

    const [note_id] = await knex("movieNotes").insert({
      title,
      desc,
      rating,
      user_id
    });

    const tagsInsert = tags.map(name => {
      return {
        note_id,
        user_id,
        name
      }
    });

    await knex("movieTags").insert(tagsInsert);
    
    return response.json();
  };

  async show(request, response) {
    const { id } = request.params;

    const movieNote = await knex("movieNotes").where({id}).first();
    const movieTags = await knex("movieTags").where({note_id: id}).orderBy("name");

    return response.json({
      ...movieNote,
      movieTags,
    });
  };

  async delete(request, response) {
    const { id } = request.params;

    await knex("movieNotes").where({id}).delete();

    return response.json();
  };

  async index(request, response) {

    const { user_id, title, tags, desc } = request.query;

    let movieNotes;

    if(tags) {
      const filterMovieTags = tags.split(",").map(tag => tag.trim);

      movieNotes = await knex("movieTags")
      .select([
        "movieNotes.id",
        "movieNotes.title",
        "movieNotes.user_id",
      ])
      .where("movieNotes.user_id", user_id)
      .whereLike("movieNotes.title", `%${title}%`)
      .whereLike("movieNotes.desc", `%${desc}%`)
      .whereIn("name", filterMovieTags)
      .innerJoin("movieNotes", "movieNotes.id", "movieTags.notes_id")
      .orderBy("title");
    } else {
      movieNotes = await knex("movieNotes")
      .where({user_id})
      .whereLike("title", `%${title}%`)
      .orderBy("title");
    };

    const movieTags = await knex("movieTags").where({user_id});

    const movieNotesWithTags = movieNotes.map(note => {
      const notesAndTags = movieTags.filter(tag => tag.note_id === note.id);
      return {
        ...note,
        tags: notesAndTags
      };
    });

    return response.json({movieNotesWithTags});
  };

};

module.exports = MovieNotesController;