const sqliteConnection = require("../../sqlite/index");
const createUsers = require("./createUser");


async function migrationsRun() {
  const schemas = [
    createUsers
  ].join('');


  sqliteConnection()
  .then(database => database.exec(schemas))
  .catch(error => console.error(error));
};

module.exports = migrationsRun;