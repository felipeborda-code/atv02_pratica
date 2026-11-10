import { jogosRepository } from "../repositories/jogo.repository.js"


class jogosServices {

async getAll() {

    const jogos = await jogosRepository.getAll();
    return jogos;

}
async getByID(Id) {

    const jogoId = await jogosRepository.getByID(Id);
    return jogoId;

}
async create(dados) {

    const jogoCriado = await jogosRepository.create(dados);
    return jogoCriado;

}
async delete(Id) {

    const jogoDeletado = await jogosRepository.delete(Id);
    return jogoDeletado;

}
async patch(Id) {

    const jogoAtualizado = await jogosRepository.patch(Id);
    return jogoAtualizado;

}

}

export const jogosServices = new JogosServices();
