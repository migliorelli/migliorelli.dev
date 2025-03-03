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
        "Criando experiências digitais envolventes e perfeitas, eu misturo conhecimento técnico com resolução criativa de problemas. Minha paixão está em construir aplicativos da web que sejam eficientes, acessíveis e deixem um impacto duradouro nos usuários.",
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
        "Crafting seamless and engaging digital experiences, I blend technical expertise with creative problem-solving. My passion lies in building web applications that are efficient, accessible, and leave a lasting impact on users.",
    },
  },
};

export const i18n = createI18n({
  legacy: false,
  locale: "pt-BR",
  fallbackLocale: "en",
  messages,
});
