const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/reading", (req, res) => {

  console.log("POST /reading recebido");
  console.log(req.body);

  const { cartas } = req.body;

  res.json({
    leitura: `As cartas recebidas foram: ${cartas.join(", ")}`
  });

});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});