# 💌 Nosso Capítulo — Escrevendo Nossa História

Presente de Dia dos Namorados para a Geovana.
Um site interativo, emocional e cinematográfico, feito para celular.

Construído com **React + Vite + Tailwind CSS + Framer Motion**.

---

## ▶️ Como rodar no seu computador

Você precisa ter o **Node.js** instalado (baixe em https://nodejs.org — versão LTS).

Abra o terminal dentro da pasta do projeto e digite:

```bash
npm install      # instala tudo (só na primeira vez)
npm run dev      # liga o site em modo de testes
```

Vai aparecer um link tipo `http://localhost:5173` — abra no navegador.
Dica: abra as ferramentas do navegador (F12) e ative o modo celular para
ver como fica no telefone.

---

## ✏️ Como personalizar (a parte importante!)

Quase tudo que você vai querer mudar está em **UM único arquivo**:

```
src/data/content.js
```

Lá dentro estão, com comentários explicando cada um:
- a data de início do relacionamento (já está 07/02/2025);
- o nome dela (Geovana);
- os textos da linha do tempo, da galeria, das cartas e da mensagem final;
- os caminhos das fotos e da música.

### 1. Colocar as suas fotos 📷

Crie uma pasta chamada `fotos` dentro da pasta `public` e coloque suas
imagens lá. Os nomes que o site procura são:

| Onde aparece              | Nome do arquivo            |
|---------------------------|----------------------------|
| Fundo da tela inicial     | `public/fotos/capa.jpg`    |
| Disco de vinil (música)   | `public/fotos/musica.jpg`  |
| Linha do tempo (4 fotos)  | `public/fotos/timeline-1.jpg` até `timeline-4.jpg` |
| Galeria (5 fotos)         | `public/fotos/galeria-1.jpg` até `galeria-5.jpg`   |

Pode usar outros nomes — só lembre de ajustar os caminhos no arquivo
`content.js`. Enquanto você não colocar as fotos, aparece um quadrinho
dourado discreto escrito "sua foto aqui" (nada quebra).

### 2. Colocar a música 🎵

Crie uma pasta `audio` dentro de `public` e coloque o arquivo de música:

```
public/audio/musica.mp3
```

O título e o artista ("Die With A Smile", "Bruno Mars") já estão
configurados. Sem o arquivo, os botões funcionam mas não sai som.

### 3. Mudar textos, datas e nome ✍️

Tudo no `src/data/content.js`. É só trocar o que está entre aspas.

---

## 🎮 Sobre o jogo dos corações

Existem **7 corações escondidos** espalhados pela página (nos cantos,
ao longo da rolagem). Eles ficam meio transparentes de propósito — tem
que procurar! 😉 Ao achar cada um, aparece uma mensagem carinhosa.
Ao encontrar todos, surge a mensagem especial.

Se quiser deixá-los mais fáceis ou mais difíceis de achar, é só mudar
as posições no arquivo `src/components/HeartGame.jsx` (lista `HIDDEN`)
ou a transparência (`opacity-25`).

---

## 🌐 Como colocar o site no ar (de graça)

Quando estiver tudo pronto, gere a versão final:

```bash
npm run build
```

Isso cria uma pasta chamada `dist`. Agora é só:

1. Entrar em **https://app.netlify.com/drop** (ou em **vercel.com**);
2. Arrastar a pasta `dist` para a página;
3. Pronto — você recebe um link para mandar pra ela. 💝

---

## 📁 Estrutura do projeto

```
src/
├── data/
│   └── content.js          ← VOCÊ EDITA AQUI (textos, fotos, música)
├── components/
│   ├── Loader.jsx          tela de carregamento (3 segundos)
│   ├── Intro.jsx           tela inicial
│   ├── MusicPlayer.jsx     disco de vinil + música
│   ├── Timeline.jsx        linha do tempo (Nossa História)
│   ├── Gallery.jsx         galeria estilo polaroid
│   ├── HeartGame.jsx       jogo dos corações escondidos
│   ├── Letters.jsx         cartas / envelopes
│   ├── Final.jsx           contador + mensagem final
│   ├── Particles.jsx       partículas flutuantes
│   ├── Photo.jsx           imagem com placeholder elegante
│   └── Heart.jsx           ícone de coração padrão
└── App.jsx                 organiza tudo
```

Feito com muito carinho. ❤️
