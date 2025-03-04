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
        "Desenvolvedor Fullstack//Programador Mobile//Apaixonado por Tecnologia//Mestre em Resolver Desafios",
      description:
        "Desenvolvedor web fullstack especializado em React, Vue, Express.js e Typescript. Projetos responsivos e soluções web modernas. ",
      resume: "Baixar currículo",
      getintouch: "Entrar em contato",
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
        "Fullstack Developer//Mobile App Developer//Tech Enthusiast//Problem Solver",
      description:
        "Fullstack web developer specialized in React, Vue, Express.js and TypeScript. Responsive projects and modern web solutions.",
      resume: "Download resume",
      getintouch: "Get in touch",
    },
  },
};

export const i18n = createI18n({
  legacy: false,
  locale: "pt-BR",
  fallbackLocale: "en",
  messages,
});
