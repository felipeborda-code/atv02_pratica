import { jogosRepositories } from "../repositories/jogo.repository.js"


class jogosServices {

async getAll() {

    const jogos = await jogosRepositories.getAll();
    return jogos;

}

}

export jogosServices = new jogosServices ();