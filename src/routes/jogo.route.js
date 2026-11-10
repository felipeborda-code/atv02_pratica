import { jogoController } from "../controllers/jogo.controller.js"

jogoRouter.get("/", jogoController.getAll);
