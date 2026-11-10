import { knex } from "../database/knex.js";

class jogosRepository {

async getAll() {

const jogos = await knex('jogos').select("").returning("*");
return jogos

}

async getById({Id}) {

const jogoId = await knex('jogos').where({Id}).select("").returning("*");
return jogoId;

}
async create(dados) {

const jogoCriado = await knex('jogos').insert(dados).returning("*");
return jogoCriado;

}
async delete(Id) {

const jogoDeletado = await knex('jogos').where({Id}).select("").returning("*");
return jogoDeletado;

}
async patch(Id) {

const jogoAtualizado = await knex('jogos').where({Id}).select("").returning("*");
return jogoAtualizado;

}

}

export const jogosRepository = new jogosRepository();