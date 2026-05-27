const arcanos = [
  "O Louco","O Mago","A Sacerdotisa","A Imperatriz",
  "O Imperador","O Papa","Os Enamorados","O Carro",
  "A Justiça","O Eremita","A Roda da Fortuna","A Força",
  "O Enforcado","A Morte","A Temperança","O Diabo",
  "A Torre","A Estrela","A Lua","O Sol",
  "O Julgamento","O Mundo"
];

const imagens = {
  "O Louco": "o-louco.jpg",
  "O Mago": "o-mago.jpg",
  "A Sacerdotisa": "a-sacerdotisa.jpg",
  "A Imperatriz": "a-imperatriz.jpg",
  "O Imperador": "o-imperador.jpg",
  "O Papa": "o-papa.jpg",
  "Os Enamorados": "os-enamorados.jpg",
  "O Carro": "o-carro.jpg",
  "A Justiça": "a-justica.jpg",
  "O Eremita": "o-eremita.jpg",
  "A Roda da Fortuna": "a-roda-da-fortuna.jpg",
  "A Força": "a-forca.jpg",
  "O Enforcado": "o-enforcado.jpg",
  "A Morte": "a-morte.jpg",
  "A Temperança": "a-temperanca.jpg",
  "O Diabo": "o-diabo.jpg",
  "A Torre": "a-torre.jpg",
  "A Estrela": "a-estrela.jpg",
  "A Lua": "a-lua.jpg",
  "O Sol": "o-sol.jpg",
  "O Julgamento": "o-julgamento.jpg",
  "O Mundo": "o-mundo.jpg"
};

const significados = {
  "O Louco": "novos caminhos e abertura ao desconhecido.",
  "O Mago": "potencial, iniciativa e capacidade de agir.",
  "A Sacerdotisa": "intuição e observação interior.",
  "A Imperatriz": "crescimento, criatividade e fertilidade de ideias.",
  "O Imperador": "estrutura e liderança.",
  "O Papa": "aprendizado e sabedoria tradicional.",
  "Os Enamorados": "escolhas e vínculos.",
  "O Carro": "movimento e determinação.",
  "A Justiça": "equilíbrio e consequências.",
  "O Eremita": "reflexão e busca interior.",
  "A Roda da Fortuna": "mudanças e ciclos.",
  "A Força": "coragem e domínio emocional.",
  "O Enforcado": "nova perspectiva e pausa.",
  "A Morte": "transformação e encerramento.",
  "A Temperança": "harmonia e moderação.",
  "O Diabo": "apegos e desejos intensos.",
  "A Torre": "rupturas e revelações.",
  "A Estrela": "esperança e renovação.",
  "A Lua": "mistério, emoção e incertezas.",
  "O Sol": "clareza e vitalidade.",
  "O Julgamento": "renascimento e avaliação.",
  "O Mundo": "realização e fechamento de ciclo."
};

function tirar3Cartas() {
  return [...arcanos]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
}

function falarIA(texto) {
  const chat = document.getElementById("chat");

  const msg = document.createElement("div");
  msg.className = "mensagem ia";
  msg.innerHTML = texto;

  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

const botao = document.getElementById("confirmar");

botao.addEventListener("click", () => {

  botao.disabled = true;

  const cartas = tirar3Cartas();

  falarIA("As cartas estão sendo embaralhadas...");

  setTimeout(() => {

    falarIA(`
      <strong>As cartas se revelam...</strong><br><br>

      <div class="cartas">

        <div class="carta revelar">
          <img src="arcanos/${imagens[cartas[0]]}">
          <br>${cartas[0]}
        </div>

        <div class="carta revelar">
          <img src="arcanos/${imagens[cartas[1]]}">
          <br>${cartas[1]}
        </div>

        <div class="carta revelar">
          <img src="arcanos/${imagens[cartas[2]]}">
          <br>${cartas[2]}
        </div>

      </div>
    `);

  }, 1200);

  setTimeout(() => {

    falarIA(`
      <strong>Leitura simbólica</strong><br><br>

      Surge um caminho marcado por
      ${significados[cartas[0]]}

      Também se fazem presentes temas de
      ${significados[cartas[1]]}

      e sinais ligados a
      ${significados[cartas[2]]}

      <br><br>

      Observe quais dessas imagens parecem ecoar com seu momento atual.
      A leitura não determina destinos — ela convida à reflexão.
    `);

    botao.disabled = false;
    botao.textContent = "Nova leitura";

  }, 3200);

});