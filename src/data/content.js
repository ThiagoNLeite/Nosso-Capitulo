// ============================================================
//  💌  PERSONALIZE AQUI  💌
//  Este é o ÚNICO arquivo que você precisa editar.
//  Troque os caminhos das fotos, a música e os textos abaixo.
// ============================================================

// --- DATA DE INÍCIO DO RELACIONAMENTO (ano, mês [0-11], dia, hora, min) ---
export const startDate = new Date(2025, 1, 7, 0, 0, 0); // 07/02/2025
export const startDateLabel = "07/02/2025";

// --- FOTOS ---
// Coloque suas fotos na pasta /public e referencie como "/minhafoto.jpg".
// Enquanto não tiver as fotos, fica um placeholder elegante automático.
export const photos = {
  hero: "/fotos/capa.jpg",        // foto de capa (fundo da tela inicial)
  vinyl: "/fotos/musica.jpg",     // foto que vira o "disco" na seção música
};

// --- MÚSICA ---
// Coloque o arquivo de áudio em /public/audio/ e referencie abaixo.
// (ex: baixe a faixa que vocês amam e salve como musica.mp3)
export const music = {
  src: "/audio/musica.mp3",
  title: "Die With A Smile",
  artist: "Bruno Mars",
  note: "Uma música que sempre vai lembrar o dia em que meu coração escolheu você.",
};

// --- LINHA DO TEMPO (Seção 2) ---
export const timeline = [
  {
    date: "Jovens aprendizes",
    title: "O começo",
    photo: "/fotos/timeline-1.jpg",
    text: "Começou com um simples sorriso e hoje eu não consigo imaginar mais nem um dia sem você.",
  },
  {
    date: "Capítulo I",
    title: "Nosso primeiro passo",
    photo: "/fotos/timeline-2.jpg",
    text: "Você nervosa de me apresentar para os seus pais, mas eu estava calmo, pois já estava decidido que faria de tudo para ter você para mim.",
  },
  {
    date: "Capítulo II",
    title: "Os momentos que fizeram tudo mudar",
    photo: "/fotos/timeline-3.jpg",
    text: "As pequenas coisas que, somadas, me fizeram me viciar cada vez mais em você.",
  },
  {
    date: "Agora",
    title: "Os capítulos que estamos escrevendo",
    photo: "/fotos/timeline-4.jpg",
    text: "E os melhores ainda nem foram escritos. Mas serão, com você.",
  },
];

// --- GALERIA DE MEMÓRIAS (Seção 3) ---
export const gallery = [
  { photo: "/fotos/galeria-1.jpg", caption: "Aquele dia", message: "Eu queria poder voltar e viver tudo de novo." },
  { photo: "/fotos/galeria-2.jpg", caption: "Só nós", message: "Meu lugar favorito é onde quer que você esteja." },
  { photo: "/fotos/galeria-3.jpg", caption: "Risos", message: "Seu sorriso continua sendo minha parte preferida do dia." },
  { photo: "/fotos/galeria-4.jpg", caption: "Te amo", message: "Cada foto é uma promessa que eu pretendo cumprir." },
  { photo: "/fotos/galeria-5.jpg", caption: "Nós dois", message: "Não existe ângulo em que você não me encante." },
];

// --- CARTAS (Seção 5) ---
export const letters = [
  {
    label: "Abra quando sentir saudade",
    body: "Fecha os olhos. Eu estou aí, do seu lado, segurando sua mão. A distância é só geografia — o que eu sinto por você não conhece quilômetros. Você nunca está sozinha.",
  },
  {
    label: "Abra quando estiver triste",
    body: "Dias difíceis existem, e tudo bem não estar bem. Mas lembra: você é mais forte do que qualquer tempestade, e mais amada do que consegue imaginar. Respira. Eu estou aqui.",
  },
  {
    label: "Abra quando quiser sorrir",
    body: "Quando quiser sorrir só pensar em nós dois e em tudo que já passamos e vamos passar juntos. Você sempre será o motivo dos meus sorrisos mais sinceros e eu espero e lutarei para ser o motivo dos seus também. ",
  },
  {
    label: "Abra quando quiser lembrar de nós",
    body: "Nós somos a minha história preferida. Cada capítulo, cada página, cada vírgula. E eu escolheria você de novo, em qualquer versão dessa vida.",
  },
];

// --- DEDICATÓRIA / NOME ---
export const recipient = "Geovana";
