import { jogosServices } from "../services/jogo.service.js"

class JogosController{

async getAll( async (req, res) => () {

const jogos = await jogosServices.getAll();
return res.json(jogos)

});

}