import { Knex } from "../database/knex.js";

class jogosRepositories {

async getAll() {

const jogos = await knex('jogos').select("").returning("*");
return jogos

}

}