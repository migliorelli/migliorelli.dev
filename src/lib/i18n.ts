import { createI18n } from "vue-i18n";

const messages = {
  "pt-BR": {
    navbar: {
      aboutme: "Sobre mim",
      skills: "Habilidades",
      services: "Serviços",
      projects: "Projetos",
      contact: "Contato",
    },

    hero: {
      presentation: "Olá, me chamo",
      subtitle: "Eu soluciono problemas",
      description:
        "Desenvolvedor web fullstack especializado em React, Vue, Express.js e PostgreSQL. Crio aplicações modernas, escaláveis e com foco na experiência do usuário.",
      resume: "Baixar currículo",
      getintouch: "Entrar em contato",
    },

    aboutme: {
      title: "Sobre mim",
      description:
        "Comecei a programar aos 14 anos, criando minigames para o Transformice e mapas para o Roblox. Desde então, venho me aprofundando no universo da tecnologia, sempre com o foco em aprender coisas novas. Ao longo dos anos, desenvolvi desde sistemas internos de gerenciamento de empresas até aplicativos mobile. Atualmente, estou me especializando em segurança da informação, buscando me tornar um profissional referência nessa área. Atualmente, curso Técnico em Informática para a Internet no IFES Colatina, onde continuo expandindo meus conhecimentos. Estou sempre disposto a aprender novas tecnologias e ferramentas, e busco soluções eficientes para garantir a segurança e o melhor desempenho em meus projetos.",
    },

    skills: {
      title: "Habilidades",
      core: {
        title: "Principais Tecnologias",
        description: "Tecnologias que utilizo em todas as minhas aplicações",
      },
      databases: {
        title: "Bancos de Dados",
        description: "Bancos de dados utilizados para o backend das aplicações",
      },
      tools: {
        title: "Ferramentas",
        description: "Ferramentas essenciais para o desenvolvimento e deploy",
      },
      outro: {
        title: "Outras Tecnologias",
        description:
          "Tecnologias e ferramentas adicionais que utilizo para complementar o desenvolvimento das minhas aplicações",
      },
    },

    services: {
      title: "Serviços",
    },

    projects: {
      title: "Projetos",
      access: "Acessar",
      items: {
        wbpinturas: {
          title: "WB Pinturas",
          description: "Site para divulgar os serviços de pintura do meu pai.",
        },
        fartic: {
          title: "Fartic",
          description:
            "Jogo estilo Gartic, onde você desenha e os outros adivinham.",
        },
        lolrandom: {
          title: "LoL Skin Randomizer",
          description: "Sorteador de campeão e skin para League of Legends.",
        },
        instaprobar: {
          title: "Instagram Progress Bar",
          description:
            "Extensão que adiciona barra de progresso nos vídeos do Instagram.",
        },
        tunein: {
          title: "Tune In",
          description:
            "Extensão da Twitch que mostra a fila do StreamElements.",
        },
      },
    },

    contact: {
      title: `Entre em <span class="text-primary-400">contato</span>`,
      description: "Estou ansioso para trabalhar com você!",
      phone: "Telefone",
    },

    footer: {
      links: "Links rápidos",
      home: "Início",
      aboutme: "Sobre Mim",
      skills: "Habilidades",
      services: "Serviços",
      projects: "Projetos",
      social: "Redes sociais",
      rights: "Todos os direitos reservados.",
      about: {
        title: "Sobre Mim",
        description:
          "Desenvolvedor web fullstack especializado em React, Vue, Express.js e PostgreSQL. Crio aplicações modernas, escaláveis e com foco na experiência do usuário.",
      },
    },
  },
  en: {
    navbar: {
      aboutme: "About me",
      skills: "Skills",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
    },

    hero: {
      presentation: "Hi, my name is",
      subtitle: "I code solutions",
      description:
        "Fullstack web developer specialized in React, Vue, Express.js and PostgreSQL. I build modern, scalable applications with a focus on user experience.",
      resume: "Download resume",
      getintouch: "Get in touch",
    },

    aboutme: {
      title: "About me",
      description:
        "I started programming at the age of 14, creating minigames for Transformice and maps for Roblox. Since then, I have been diving deeper into the world of technology, always focused on learning new things. Over the years, I have developed everything from internal management systems for companies to mobile applications. Currently, I am specializing in information security, aiming to become a reference professional in this field. I am currently enrolled in the Technical Course in Internet Informatics at IFES Colatina, where I continue to expand my knowledge. I am always willing to learn new technologies and tools, and I seek efficient solutions to ensure security and optimal performance in my projects.",
    },

    skills: {
      title: "Skills",
      core: {
        title: "Core Technologies",
        description: "Technologies I use in all of my applications",
      },
      databases: {
        title: "Database",
        description: "Databases used for the backend of applications",
      },
      tools: {
        title: "Tools",
        description: "Essential tools for development and deployment",
      },
      outro: {
        title: "Other Technologies",
        description:
          "Additional technologies and tools I use to complement the development of my applications",
      },
    },
    contact: {
      title: `Get in <span class="text-primary-400">touch</span>`,
      description: "I look forward to working with you!",
      phone: "Phone",
    },

    services: {
      title: "Services",
    },

    projects: {
      title: "Projects",
      access: "Access",
      items: {
        wbpinturas: {
          title: "WB Pinturas",
          description: "Website to showcase my father's painting services.",
        },
        fartic: {
          title: "Fartic",
          description:
            "Gartic-like drawing game where players guess what's being drawn.",
        },
        lolrandom: {
          title: "LoL Skin Randomizer",
          description: "Tool to randomly choose a LoL champion and skin.",
        },
        instaprobar: {
          title: "Instagram Progress Bar",
          description:
            "Extension that adds a progress bar to Instagram videos.",
        },
        tunein: {
          title: "Tune In",
          description:
            "Twitch extension showing the StreamElements media queue.",
        },
      },
    },

    footer: {
      links: "Rapid links",
      home: "Home",
      aboutme: "About Me",
      skills: "Skills",
      services: "Services",
      projects: "Projects",
      social: "Socials",
      rights: "All rights reserved.",
      about: {
        title: "About Me",
        description:
          "Fullstack web developer specialized in React, Vue, Express.js and PostgreSQL. I build modern, scalable applications with a focus on user experience.",
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
