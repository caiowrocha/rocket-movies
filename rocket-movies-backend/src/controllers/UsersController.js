const AppError = require("../utils/AppError");
const { hash, compare } = require("bcryptjs");
const sqliteConnection = require("../database/sqlite/index");
const knex = require("../database/knex");


class UsersController {
      async create(request, response) {

        const { name, email, password } = request.body;

        const database = await sqliteConnection();

        const checkUserExists = await database.get(`SELECT * FROM users WHERE email = (?)`, [email]);

        if(checkUserExists) {
          throw new AppError("Este e-mail já está em uso");
        };

        const hashedPassword = await hash(password, 8);

        await knex("users").insert({
          name,
          email,
          password: hashedPassword
        });

        return response.status(201).json();

      };

      async update(request, response) {
        const { name, email, password, old_password } = request.body;
        const { id } = request.params;

        const database = await sqliteConnection();

        const user = await database.get("SELECT * FROM users WHERE id = (?)", [id]);

        if(!user) {
          throw new AppError("Usuário não encontrado!");
        }

        const userWithUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

        if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
          throw new AppError("Este e-mail já está em uso!");
        }

        user.name = name ?? user.name;
        user.email = email ?? user.email;

        if(password && !old_password) {
          throw new AppError("Informe a senha antiga!");
        }

        if(password && old_password) {
          const checkOldPass = await compare(old_password, user.password);

          if(!checkOldPass) {
            throw new AppError("A senha antiga está incorreta!");
          }

          user.password = await hash(password, 8);
        }

        await knex("users")
        .select(user)
        .where({id})
        .update({
          name: user.name,
          email: user.email,
          password: user.password
        });

        return response.json();
      };
};

module.exports = UsersController;