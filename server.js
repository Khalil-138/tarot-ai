const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

const mensagens = [
  "Estas cartas parecem conversar com temas de mudança e reflexão.",
  "Percebo símbolos ligados a movimento interior e observação do momento presente.",
  "Há uma combinação que sugere crescimento, escolhas e percepção mais profunda.",
  "Os símbolos revelam um convite à consciência e ao autoconhecimento.",
  "Esta leitura sugere olhar para possibilidades sem tratar o caminho como fixo."
];

app.post("/reading", async (req, res) => {

  const { cartas } = req.body;

  const base =
    mensagens[Math.floor(Math.random() * mensagens.length)];

  const leitura = `
${base}

As cartas retiradas foram ${cartas.join(", ")}.

Observe como esses símbolos podem dialogar com sua experiência atual.
`;

  res.json({ leitura });

});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});