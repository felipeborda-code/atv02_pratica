import express from "express";
import{ jogoRouter } from "../routes/jogo.route.js"

const port = 3000;
const app = express();

app.use(express.json());
app.use("/jogos", jogoRouter)

app.listen(port, () => {
console.log(`API funcionando em http://localhost:${port}`)
})