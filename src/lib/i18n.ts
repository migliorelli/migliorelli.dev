import { createI18n } from "vue-i18n";

const messages = {
  "pt-BR": {
    languages: {
      pt: "Português",
      en: "Inglês",
    },

    navbar: {
      aboutme: "Sobre mim",
      projects: "Projetos",
      skills: "Habilidades",
      socials: "Social",
    },

    hero: {
      presentation: "Olá, eu me chamo",
      im: "Eu sou um",
      roles:
        "Desenvolvedor Fullstack//Desenvolvedor MEVN/MERN//Programador Mobile//Apaixonado por Tecnologia",
      description:
        "Desenvolvedor web fullstack especializado em React, Vue, Express.js e Typescript. Projetos responsivos e soluções web modernas.",
      resume: "Baixar currículo",
      getintouch: "Entrar em contato",
    },

    aboutme: {
      title: "Sobre mim",
      description:
        "Comecei a programar aos 14 anos, criando minigames para o Transformice e mapas para o Roblox. Desde então, venho me aprofundando no universo da tecnologia, sempre com o foco em aprender coisas novas. Ao longo dos anos, desenvolvi desde sistemas internos de gerenciamento de empresas até aplicativos móveis. Atualmente, estou me especializando em segurança da informação, buscando me tornar um profissional referência nessa área. Atualmente, curso Técnico em Informática para a Internet no IFES Colatina, onde continuo expandindo meus conhecimentos. Estou sempre disposto a aprender novas tecnologias e ferramentas, e busco soluções eficientes para garantir a segurança e o melhor desempenho em meus projetos.",
    },

    projects: {
      chip: "Projetos",
      title: "Treinamento, pessoal ou freelancer",
      access: "Acessar",
      wbpinturas: {
        title: "WB Pinturas",
        description:
          "Portfólio desenvolvido para o trabalho do meu pai, um pintor especializado em serviços residenciais e comerciais.",
      },
      fartic: {
        title: "Fartic",
        description:
          "Fartic é um jogo de desenhos semelhante ao Gartic, onde os jogadores tentam adivinhar o que está sendo ilustrado.",
      },
      instaprobar: {
        title: "Instagram Progress Bar",
        description:
          "Uma extensão que adiciona uma barra de progresso a todos os vídeos do Instagram, proporcionando uma experiência de visualização aprimorada.",
      },
      tunein: {
        title: "Tune In",
        description:
          "TuneIn é uma extensão do Twitch que exibe em tempo real a fila de músicas e vídeos solicitados ao StreamElements, mantendo a experiência de streaming sincronizada e envolvente.",
      },
      lolrandom: {
        title: "League of Legends Randomizer",
        description:
          "Um site para ajudar a escolher seu campeão e skin de League of Legends.",
      },
    },
  },
  en: {
    languages: {
      pt: "Portuguese",
      en: "English",
    },

    navbar: {
      aboutme: "About me",
      projects: "Projects",
      skills: "Skills",
      socials: "Socials",
    },

    hero: {
      presentation: "Hi, my name is",
      im: "I'm a",
      roles:
        "Fullstack Developer//MEVN/MERN Developer//Mobile App Developer//Tech Enthusiast",
      description:
        "Fullstack web developer specialized in React, Vue, Express.js and TypeScript. Responsive projects and modern web solutions.",
      resume: "Download resume",
      getintouch: "Get in touch",
    },

    aboutme: {
      title: "About me",
      description:
        "I started programming at the age of 14, creating minigames for Transformice and maps for Roblox. Since then, I have been diving deeper into the world of technology, always focused on learning new things. Over the years, I have developed everything from internal management systems for companies to mobile applications. Currently, I am specializing in information security, aiming to become a reference professional in this field. I am currently enrolled in the Technical Course in Internet Informatics at IFES Colatina, where I continue to expand my knowledge. I am always willing to learn new technologies and tools, and I seek efficient solutions to ensure security and optimal performance in my projects.",
    },

    projects: {
      chip: "Projects",
      title: "Training, personal or freelance",
      access: "Access",
      wbpinturas: {
        title: "WB Pinturas",
        description:
          "Portfolio created for my father’s work as a painter, specializing in residential and commercial services.",
      },
      fartic: {
        title: "Fartic",
        description:
          "Fartic is a drawing game similar to Gartic, where players try to guess what is being illustrated.",
      },
      instaprobar: {
        title: "Instagram Progress Bar",
        description:
          "An extension that adds a progress bar to all Instagram videos for a better viewing experience.",
      },
      tunein: {
        title: "Tune In",
        description:
          "TuneIn is a Twitch extension that displays the queue of music and videos requested from StreamElements in real time, keeping the streaming experience synchronized and engaging.",
      },
      lolrandom: {
        title: "League of Legends Randomizer",
        description:
          "A website to help you choose your League of Legends champion and skin.",
      },
    },
  },
};

export const i18n = createI18n({
  legacy: false,
  locale: "pt-BR",
  fallbackLocale: "en",
  messages,
});
