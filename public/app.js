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

  "O Louco": `
  <strong>Inícios e espontaneidade</strong><br><br>

  O Louco simboliza novos começos, novas experiências, simboliza o início da jornada. Quando aparece em uma consulta, geralmente indica que está na hora de deixar para trás tudo que empata nossos objetivos, como medos, dúvidas e preocupações, para trilhar novos rumos. A carta sugere que esse novo começo seja empreendido de braços abertos e com alegria.
  `,

  "O Mago": `
  <strong>Força, habilidade e concentração</strong><br><br>

  A carta O Mago traz a mensagem de que seus talentos e seus próprios dons são as chaves para o seu sucesso em qualquer situação questionada. É como se você tivesse todas as ferramentas que precisa bem na sua frente para garantir que o sucesso potencial se manifeste.<br><br>

  É uma carta que está diretamente ligada ao instinto e a intuição. Quando você está sentindo um impulso ou uma vontade grande de fazer alguma coisa e O Mago aparece em sua leitura, siga essa intuição e as coisas podem acontecer.<br><br>

  Pode indicar também uma pessoa dominadora ou que a situação deve ser resolvida com inteligência, praticidade e racionalidade, além de anunciar o começo de uma relação amorosa, mas que pode conter traços de impulsividade.
  `,

  "A Sacerdotisa": `
  <strong>Intuição, mistério, a voz interior</strong><br><br>

  A Sacerdotisa é um lembrete de que não temos como saber de tudo acerca de uma situação. Indica que ou não recebemos todos os fatos, ou não enxergamos todos os fatos ou outras pessoas podem estar retendo informações importantes. Quando esta carta aparece, indica segredos e que é melhor procurar pelas respostas.<br><br>

  Você deve ponderar sobre a situação e saber que pode haver alguns acontecimentos ocorrendo nos bastidores dos quais você não tem total conhecimento. A carta mostra que para sabermos toda a verdade sobre algo, temos que usar todos os recursos disponíveis, como nossa intuição, nosso poder de convencimento e a reflexão.<br><br>

  A Sacerdotisa é um arcano altamente espiritual, mas não é limitada a isso. Ela lida com fatos e sugere que não temos acesso a todos eles no momento. Por isso ela não é uma carta que nos convida para a ação mas sim, de maneira sutil, nos convida para a reflexão. Quanto mais ponderamos sobre uma situação, mais temos chance de obter as respostas que buscamos.
  `,

  "A Imperatriz": `
  <strong>Criatividade, abundância e fertilidade</strong><br><br>

  Quando a Imperatriz aparece em uma consulta, geralmente indica que as coisas vão bem na situação questionada, como se cada coisa estiver em seu devido lugar, exatamente como desejado. Também pode trazer informações sobre o tema Mãe, seja sobre você no papel de mãe, sobre uma figura materna em sua vida ou na situação em questão.<br><br>

  A Imperatriz é uma figura poderosa e muito segura de si. Sugere proteção e não questiona as decisões. Com a certeza de uma mãe cria bem seus filhos, ela não sugere dúvidas. Esta carta geralmente indica um bom presságio, assim como realização e sucesso.
  `,

  "O Imperador": `
  <strong>Estrutura e concretização</strong><br><br>

  Quando o imperador aparece em uma consulta, sugere que você está prestes a alcançar seus objetivos ou está no caminho certo. A conexão com Áries também tem a ver com liderança, controle e realização, ou seja, às vezes sugere que você assumirá um papel de líder ou controlará um problema.<br><br>

  Pode indicar que este é um bom momento para iniciar um grande projeto, fazer orçamentos ou que novas oportunidades também podem surgir. De qualquer forma, pode ser importante procurar conselhos com uma figura de autoridade, como seu pai ou outra figura paterna antes de tomar decisões importantes.
  `,

  "O Papa": `
  <strong>Sabedoria e tradição</strong><br><br>

  Quando o Papa aparece em uma consulta, as respostas remetem à busca de conselhos sábios. Esta carta também pode representar uma pessoa do signo de Touro relacionada à questão, em sua vida ou que está prestes a aparecer para interagir.<br><br>

  Touro é um signo fixo muito familiarizado com rotina fixa e estrutura, coisas que trazem segurança, um sentimento primordial para o signo. O Papa encarna tudo isso e nos convida a voltar às nossas raízes e tradições. Sugere que você busque conhecimento ou conselhos sobre a situação em questão (um especialista, profissional ou um amigo sábio, por exemplo).<br><br>

  A carta não indica que você deva tomar decisões importantes por conta própria. Pesquisa, estudo e aconselhamento, além de serem formas de fazer as coisas mais tradicionalmente, podem ser o caminho a seguir para resolver a situação em questão. A carta também representa melhora de status, mas que conselhos e assistência de pessoas ou instituições estruturadas são importantes para que isso aconteça.<br><br>

  Por fim, pode significar também a busca por um poder superior, uma força maior que vem dentro de você e que em última análise, favorece uma nova chance de elevação espiritual.
  `,

  "Os Enamorados": `
  <strong>Escolha e dualidade</strong><br><br>

  Muitas vezes, a carta Os Enamorados tem a ver com uma importante decisão que deve ser tomada. Quando a situação envolve trabalho ou amor, ela sugere que você siga sua intuição. Se o seu coração está mandando você seguir um caminho, confie em seus instintos. Só não faça as coisas pensando somente em você, pois o tiro pode sair pela culatra. Pense sempre em quem está envolvido, tente fazer o melhor para todos.<br><br>

  É um casal, sugerindo que a decisão que tomamos influencia outras pessoas. Ou seja, o simbolismo é de que a questão em jogo pode alterar sua vida e a de outros. Em alguns casos, a carta pode indicar um momento onde você tem que escolher entre determinada situação na questão. Tal escolha só depende de você. O importante é seguir o que o seu coração mandar e pensar nos envolvidos.
  `,

  "O Carro": `
  <strong>Sucesso e determinação</strong><br><br>

  Esta carta tende a anunciar vitórias e sucessos. Porém, diz que nada vem de bandeja. Mesmo com o sucesso batendo à porta, você deve batalhar por ele. Pode significar uma vitória, mas que deve ser merecida. Simboliza o trabalho duro e a dedicação a longo prazo, indicando que o sucesso não vem fácil, ele deve ser conquistado.<br><br>

  Quando esta carta aparece em uma consulta, significa que você deve tomar as rédeas do seu destino e estar preparado para aproveitar as oportunidades que aparecem. Oportunidades estas que estão ligadas à questão perguntada ou de uma forma mais abrangente: uma promoção, um cargo de liderança em um projeto, um novo curso, um novo amor ou um grande passo no relacionamento atual.<br><br>

  Porém, não tente dar um passo maior que a perna, você só deve assumir uma responsabilidade se souber que cumprirá. Por isso, não aceite cargos além de sua competência ou prazos que não conseguirá cumprir, caso contrário o sucesso poderá escapar. Câncer é o signo associado a esta carta, por isso ela também pode significar alguma pessoa do signo de Câncer em sua vida ou em torno da situação questionada. É um signo que trabalha duro e atinge o sucesso através de esforços longos e sustentados, e esta é a mensagem da carta: a vitória é quase certa, mas não virá de bandeja.
  `,

  "A Justiça": `
  <strong>Causa e efeito, decisões justas</strong><br><br>

  Essa carta tem suas energias relacionadas ao signo de Libra.<br><br>

  Quando a carta da Justiça aparece em uma consulta, ela traz a mensagem de que a situação em questão tende a se resolver a seu favor, ou, pelo menos, da forma mais justa possível. Pode ser um assunto da lei, o resultado final de uma situação específica, questões de relacionamento ou outras situações. O significado básico da carta muitas vezes fala sobre decisões equilibradas e justas.<br><br>

  Pode ser uma decisão que você precisa tomar (ou que será tomada contra você), ou ainda documentos e informações relevantes. Seja o que for, as decisões e ações tendem a ser a seu favor se estiver dentro do contexto normal e representa a vitória através da lógica e justiça. Durante uma leitura com mais cartas, é importante observar as cartas juntas à da Justiça. Elas podem ajudar a entender o que está se passando e o que deve ser considerado para se tomar a decisão final.
  `,

  "O Eremita": `
  <strong>A busca interior e a contemplação</strong><br><br>

  Quando a carta do Eremita aparece em uma consulta, pode significar que precisamos refletir em relação à situação. Às vezes é preciso dar um tempo e se isolar para ponderar e analisar melhor uma questão. Esta pode ser a mensagem que O Eremita traz: a necessidade de dar uma pausa e refletir. Anuncia que pode ser a hora de se afastar e analisar, mergulhar no seu interior em busca das respostas que você precisa no momento.<br><br>

  Nunca pense no Eremita de forma negativa. Quando ele surgir, lembre-se que geralmente a carta mostra a necessidade de tirar um tempo para si, para poder pensar na vida e mergulhar no seu interior, procurando a verdade e as respostas certas advindas da sabedoria. Se a consulta é sobre relacionamentos, por exemplo, a carta pode sugerir que no momento é melhor se afastar e ver a situação de fora - ou parar para uma reflexão.<br><br>

  A carta indica que não é hora de agir impulsivamente e sim de passar um tempo pensando nas coisas que estão acontecendo. Sugere que você precisa desenvolver seu espírito através de uma profunda introspecção, encontrar sua própria luz e fazer seu próprio caminho. Fique sozinho(a) ou associe-se apenas com aqueles que estão mais alinhados com o seu momento. Não desperdice tempo e energia com quem não está na mesma vibe que você.
  `,

  "A Roda da Fortuna": `
  <strong>Sorte, revés e os ciclos da vida</strong><br><br>

  A Roda da Fortuna representa basicamente a colheita daquilo que plantamos. Apesar do seu significado otimista, não sugere prosperidade, sorte e fortuna do nada. Tudo isso está relacionado às ações que você tomou até o momento. Se você preparou o terreno fazendo escolhas sensatas e tocando seus projetos com afinco, seus objetivos serão realizados. Você semeou e regou sua plantação, agora é hora de colher bons frutos.<br><br>

  Porém, se você se acomodou ou agiu de forma imprudente, sua colheita pode não ser das melhores. Isso vale para o curso da vida ou para a situação questionada. Quando a oportunidade se apresentar, você deve estar bem preparado para agarrá-la. Este Arcano Maior traz otimismo e anuncia que sua sorte pode estar prestes a mudar para melhor. Os signos fixos também influenciam a carta, assim, Escorpião, Leão, Aquário e Touro estão de alguma forma envolvidos na questão e podem trazer mensagens para a leitura.
  `,

  "A Força": `
  <strong>Controle e coragem</strong><br><br>

  A Força representa as melhores características do signo de Leão, como coragem, determinação, resiliência e força, boas chaves para o sucesso. Porém, indica que para realizar seus objetivos, você também precisará de autocontrole para domar seus próprios leões interiores, que podem representar tanto seus conflitos internos quanto os obstáculos que a vida nos impõe.<br><br>

  Em uma consulta ao Tarot, quando aparece tende a representar que algo superior nos ajudará a sobrepujar qualquer dificuldade pela qual estejamos passando ou envolvida na situação. Sugere proteção dos nossos objetivos, indicando mais foco e autocontrole em torno da situação. Geralmente indica que há um tipo de proteção envolvida na questão, disposta a ajudar no seu caminho até a vitória ou a resolução bem-sucedida de alguma situação. Pode indicar também algo que resistiu ao teste do tempo por causa da lealdade e força de vontade.
  `,

  "O Enforcado": `
  <strong>Sacrifício e restrições</strong><br><br>

  Quando o Enforcado aparece em uma consulta, quer dizer que você precisa se desapegar de algo e seguir em frente. Você pode estar se agarrando a algo que não traz satisfação na questão atual, como um amor não correspondido ou nocivo, um emprego que não te levará a lugar algum, uma promoção que não sai, etc.<br><br>

  Ao mesmo tempo em que é uma carta que sinaliza que você pode esperar um pouco, também é uma carta que sugere que você pode sair dessa inércia e agir, tentando acelerar ou mudar as coisas. É uma carta que representa um beco sem saída, algo que está estagnado e não dá para ver uma luz no fim do túnel. Parece que alguma força está restringindo a situação mentalizada ou o atual momento. Há em jogo uma sensação de que você não consegue realizar algo por conta de uma incrível inércia.<br><br>

  Muitas vezes o desapego pode exigir um sacrifício da sua parte, pode ser doloroso, mas depois que conseguir deixar o que quer que seja para trás, você se sentirá libertado das correntes que te prendiam.
  `,

  "A Morte": `
  <strong>Términos, recomeços e transformações</strong><br><br>

  A carta A Morte pode incutir medo ou receio nos que ainda não compreendem seu significado. De fato, quando pensamos no tema morte, nada de bom vem à mente, porém, o significado desta carta vai muito além do fim derradeiro. Tem a ver com términos, mas também traz consigo a possibilidade de novos começos, mudanças e transformações. A carta deve ser encarada como um símbolo de transição.<br><br>

  O significado básico em uma consulta é de que algo pode estar prestes a mudar e possivelmente trará renascimento, melhorando a condição da situação em questão. Claro que mudanças podem ser incômodas, algumas pessoas aceitam melhor, outras são mais resistentes. Porém, a Morte traz consigo a promise de melhorias assim que você deixar de lado o que estiver te atrapalhando.<br><br>

  Escorpião é o signo associado à carta e quando ele corta algo de sua vida, geralmente é para sempre, mas com intenção de melhorá-la. Por isso, essa carta significa que alguma coisa na sua vida ou na situação questionada está prestes a ter um fim para você, mas isso não é ruim. É bom se atentar à energia escorpiana em sua vida ou até mesmo um(a) escorpiano(a) que pode entrar em jogo para interagir com a questão. Seja como for, a carta sugere alterações profundas, transformação e recomeços que representam um novo capítulo.
  `,

  "A Temperança": `
  <strong>Equilíbrio, propósito e paciência</strong><br><br>

  Temperança é a característica da pessoa que consegue equilibrar suas próprias vontades. Quando a carta aparece em uma consulta, significa basicamente equilíbrio e sugere harmonia para a situação em questão. Como está associada ao signo de Sagitário, o filósofo do Zodíaco, te convida a refletir sobre o panorama das coisas com mais profundidade. Assim, é uma carta que indica mais pensamento do que ação. Você não precisa gastar um monte de energia para resolver sua situação, muito pelo contrário.<br><br>

  Em uma leitura, a carta traz a mensagem de que pode ser um bom momento para ser cauteloso, pois é um arcano que muitas vezes sugere moderação. Alguma viagem ou conexão estrangeira pode estar prestes a acontecer ou ter a ver com a questão.
  `,

  "O Diabo": `
  <strong>Excessos, materialismo e desequilíbrio</strong><br><br>

  A carta O Diabo é um Arcano Maior que nunca é visto com bons olhos. Mas, assim como A Morte, não é uma carta negativa. Apenas indica que existem lições que você tem que aprender e isso nem sempre é ruim. Sua associação com Capricórnio sugere que você deve tomar o controle da situação em questão, lidando com as coisas de maneira bem pragmática.<br><br>

  Você deve se perguntar o que deseja e o que te impede de obter sucesso em relação a algo. Excessos, maus hábitos, amizades que só atrapalham, problemas de saúde, enfim, qualquer coisa que ponha correntes em você e que causem estagnação na vida ou na situação em questão. Assuma as características capricornianas e tome as rédeas da situação.<br><br>

  Quando esta carta aparece em uma consulta, geralmente traz uma lição envolvida. Tem a ver com nossos instintos, sendo assim, luxúria, desejos, ambições, bens materiais e sexo. Apesar de trazer tudo isso, o Diabo é uma carta de dualidade. Você precisa se perguntar o que quer, pois caso se entregue de corpo e alma aos prazeres ou excessos, nada de bom acontecerá.<br><br>

  A carta pode indicar que algo que está te segurando, mas você não sabe muito bem o que é. Você pode estar cometendo excessos, pode estar enfermo ou alguém pode estar te atrapalhando. O fato é que talvez o sucesso almejado pode não estar presente ainda. A carta então traz uma mensagem clara: liberte-se! Seja do que for. Deixe de lado más influências, corte os maus hábitos e os excessos, enfim, livre-se de todo peso morto que não te deixar dar o próximo passo na situação em questão.
  `,

  "A Torre": `
  <strong>Colapso, soberba e mudanças abruptas</strong><br><br>

  O significado da carta A Torre tem a ver com mudanças abruptas. Algo pode mudar em relação à situação questionada. Pense em uma estrutura ou fundação que entra em colapso. Um relacionamento, um emprego, uma amizade e em alguns casos, até mesmo estruturas físicas.<br><br>

  Em uma leitura mais abrangente, alguns exemplos são perder o emprego, terminar um relacionamento, romper uma amizade, contrair dívidas ou até mesmo se mudar pode trazer à tona sentimentos conflitantes. Você pode achar que conhece alguém, ou que sabe a verdade sobre algo e acaba levando um choque de realidade quando descobre que estava errado. É como se você encarasse a situação questionada como uma coisa, quando de repente se mostra outra, tornando necessário gerenciar seus sentimentos, abraçar a mudança e seguir em frente, deixando o que quer que seja para trás.<br><br>

  Em uma consulta sobre relacionamentos, A Torre pode indicar a necessidade de ser mais flexível com seu par. Caso você não mude, a relação pode entrar em colapso. Caso você esteja procurando alguém, talvez tenha que mudar um pouco seus conceitos e comportamentos para achar a pessoa certa.<br><br>

  Para trabalho e finanças, ao mesmo tempo que pode apontar uma mudança de emprego, também pode sugerir cautela com seus recursos. Cuidado para não gastar demais, contrair dívidas ou fazer empréstimos altos. Tente gerir seus recursos com um pouco mais de cautela.<br><br>

  Porém, estes são só exemplos. A Torre simplesmente pode sugerir que estamos enganados em relação a algo e temos a chance de reparar nossos erros, mesmo que de maneira dolorosa. O significado básico é a arrogância, ou seja, podemos estar errados a respeito de alguma coisa e precisamos reconhecer, tentando reparar o engano. Seja qual for o caso, as coisas voltam ao seu lugar no seu devido tempo e a harmonia sempre retorna.
  `,

  "A Estrela": `
  <strong>Esperança, proteção e inspiração</strong><br><br>

  A Estrela tem um significado extremamente positivo em uma consulta. Quando aparece, indica um momento em que as coisas começam a dar certo. Sugere que conflitos podem ser apaziguados, problemas de saúde curados, dívidas quitadas, separações que viram reuniões, situações que se tornam positivas, enfim, indica paz, prosperidade e harmonia em sua resposta. Às vezes também aponta a ajuda de alguém que agirá como seu protetor.<br><br>

  Aquário é o signo associado a este Arcano Maior e empresta a ele seu espírito criativo e humanitário. A carta anuncia que bons tempos podem estar se aproximando ou envolvidos com a questão, onde você pode receber ajuda de outras pessoas e poderá ter uma maior noção de que algo superior está cuidando de você e da situação questionada. Sugere também que um(a) aquariano(a) poderá interagir com o momento ou questão, ou que você receberá influências de Aquário de alguma forma.
  `,

  "A Lua": `
  <strong>Ilusão, intuição e insegurança</strong><br><br>

  A Lua em uma consulta significa que está na hora de você seguir a sua intuição. Indica segredos, mistérios e ilusões. Se você tem que tomar uma decisão e não tem certeza sobre que caminho tomar, escute seu coração.<br><br>

  A carta é associada ao signo de Peixes, igualmente intuitivo, mas também ao de Câncer. Peixes até gosta de refletir e ponderar sobre as coisas e às vezes nos encontramos em situações onde falta apenas uma informação para que a decisão seja a mais acertada. Quando a carta da Lua aparece, sugere que suas emoções e sua intuição deverão prevalecer na decisão final.<br><br>

  Sugere que provavelmente existem mais coisas acontecendo das quais não temos conhecimento, por isso, assim como Peixes, o melhor a fazer é recuarmos e mergulhar no nosso interior. Buscar a intuição necessária para vermos a situação com mais clareza, para descobrirmos o que falta, o que está escondido. Porém, ao mesmo tempo em que segredos podem ser negativos, este Arcano Maior pode ter uma leitura positiva. É como se a última peça do quebra-cabeças não estivesse disponível ainda, por isso você deve seguir seus instintos pois encontrará as respostas no momento certo.
  `,

  "O Sol": `
  <strong>Sucesso, realização e positividade</strong><br><br>

  O Sol significa que boas energias estão em jogo. Quando esse Arcano Maior aparece na leitura, traz todo seu brilho para o momento. A carta sugere otimismo e abundância, indicando que o sucesso parece ser inevitável. O Sol traz energia para realizar, nos enche de confiança e ilumina nosso caminho. Qualquer situação em questão recebe seu brilho e pode ser resolvida. Esse Arcano Maior é a própria representação da vida e da luz. Ou seja, se você estava passando por tempos difíceis, ou alguma situação parecia sem solução, essa carta vem para indicar que boas coisas virão. O Sol traz otimismo, confiança e energia para que tudo se resolva e melhore.
  `,

  "O Julgamento": `
  <strong>Novos ciclos, renascimento</strong><br><br>

  Quando a carta O Julgamento aparece em uma leitura, significa que um novo ciclo se inicia. Todo o seu desempenho ou os pormenores da questão serão avaliados e recompensas surgirono. Este Arcano Maior indica que está na hora de você refletir sobre a situação ou sua vida no momento a fim de obter mais consciência e elevação.<br><br>

  Você terá uma mente mais clara e obterá as respostas que precisa. É uma carta de renascimento e muitas vezes indica que uma situação desgastada receberá uma injeção de ânimo. Ou seja, o Julgamento chegou e você deve refletir sobre sua vida, sobre o que você precisa mudar para obter êxito sobre uma situação que precisa ser alterada. Às vezes a mudança é lenta, mas com paciência, um recomeço se anuncia.<br><br>

  Sugere perdoar, pedir perdão, deixar para trás qualquer bagagem que ainda esteja pesada. Indica que depois de tudo, um novo ciclo se iniciará. Assim, o Julgamento simboliza acima de tudo um recomeço, que dependerá de tudo que você semeou.
  `,

  "O Mundo": `
  <strong>Conquistas, conclusão e integração</strong><br><br>

  A carta O Mundo significa que a situação em questão terá um desfecho. Esse Arcano Maior anuncia um novo começo e indica que a mudança é inevitável. As mudanças que ocorrem ou ocorrerão tendem a ser positivas, sugerindo resposta positiva. Simboliza que algo em sua vida ou relacionado à questão perguntada chegará a uma conclusão.<br><br>

  Seja qual for o próximo passo do caminho, ele significará o início de uma nova jornada. Touro, Leão, Aquário e Escorpião estão representados nessa carta e um deles pode ser uma das respostas para sua situação atual.<br><br>

  O Mundo indica basicamente sucesso, onde você finalmente colhe os frutos de seus esforços. Em uma leitura mais ampla, essa carta pode simbolizar o próprio mundo, eventos que acontecem a nível mundial e longas viagens podem ter influência na questão.
  `
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
      <h3>${cartas[0]}</h3>
      <div class="significado">
        ${significados[cartas[0]]}
      </div>
    </div>

    <div class="carta revelar">
      <img src="arcanos/${imagens[cartas[1]]}">
      <h3>${cartas[1]}</h3>
      <div class="significado">
        ${significados[cartas[1]]}
      </div>
    </div>

    <div class="carta revelar">
      <img src="arcanos/${imagens[cartas[2]]}">
      <h3>${cartas[2]}</h3>
      <div class="significado">
        ${significados[cartas[2]]}
      </div>
    </div>

  </div>
`);

  }, 1200);

  setTimeout(async () => {

  try {

    const resposta = await fetch("/reading", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ cartas })
    });

    const dados = await resposta.json();

    falarIA(`
      <strong>Leitura simbólica</strong><br><br>
      ${dados.leitura}
    `);

  } catch (erro) {

    falarIA("Não foi possível obter a leitura.");

    console.error(erro);
  }

  botao.disabled = false;
  botao.textContent = "Nova leitura";

}, 3200);

});