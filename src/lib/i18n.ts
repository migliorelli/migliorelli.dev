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
        "Desenvolvedor web fullstack especializado em React, Vue, Express.js e Typescript. Projetos responsivos e soluções web modernas. ",
      resume: "Baixar currículo",
      getintouch: "Entrar em contato",
    },

    aboutme: {
      title: "Sobre mim",
      description:
        "Comecei a programar aos 14 anos, criando minigames para o Transformice e mapas para o Roblox. Desde então, venho me aprofundando no universo da tecnologia, sempre com o foco em aprender coisas novas. Ao longo dos anos, desenvolvi desde sistemas internos de gerenciamento de empresas até aplicativos móveis. Atualmente, estou me especializando em segurança da informação, buscando me tornar um profissional referência nessa área. Atualmente, curso Técnico em Informática para a Internet no IFES Colatina, onde continuo expandindo meus conhecimentos. Estou sempre disposto a aprender novas tecnologias e ferramentas, e busco soluções eficientes para garantir a segurança e o melhor desempenho em meus projetos.",
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
  },
};

export const i18n = createI18n({
  legacy: false,
  locale: "pt-BR",
  fallbackLocale: "en",
  messages,
});
