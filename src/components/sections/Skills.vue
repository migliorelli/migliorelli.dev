<template>
  <section id="skills" class="overflow-hidden py-12">
    <div
      class="after:to-background-alt/50 after:from-background-alt relative py-18 after:absolute after:top-0 after:left-1/2 after:z-0 after:h-full after:w-[140%] after:-translate-x-1/2 after:-skew-3 after:bg-gradient-to-l md:py-32"
    >
      <div class="relative z-2 container mx-auto px-4">
        <Title class="mb-8" v-animate-on-view>
          {{ t("skills.title") }}
        </Title>

        <ul class="grid gap-16 md:grid-cols-2">
          <li
            v-for="section in skillSections"
            :key="section.key"
            class="flex flex-col justify-between"
          >
            <div>
              <h3 class="mb-4 text-3xl font-bold text-white" v-animate-on-view>
                {{ t(section.title) }}
              </h3>
              <p class="mb-8 text-lg text-gray-300" v-animate-on-view>
                {{ t(section.description) }}
              </p>
            </div>
            <ul
              class="flex flex-wrap justify-center gap-4 sm:justify-start"
              v-animate-on-view
            >
              <li v-for="tech in section.stack" :key="tech.icon">
                <TechIcon :icon="tech.icon" :title="tech.title" />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import TechIcon from "../TechIcon.vue";
import Title from "../ui/Title.vue";

const { t } = useI18n();

const stacks = {
  core: [
    { icon: "devicon-react-original colored", title: "React" },
    { icon: "devicon-vuejs-plain colored", title: "Vue.js" },
    { icon: "devicon-nextjs-plain", title: "Next.js" },
    { icon: "devicon-nodejs-plain-wordmark colored", title: "Node.js" },
    { icon: "devicon-typescript-plain colored", title: "TypeScript" },
    { icon: "devicon-express-original", title: "Express" },
  ],
  database: [
    { icon: "devicon-postgresql-plain colored", title: "PostgreSQL" },
    { icon: "devicon-mariadb-original colored", title: "MariaDB" },
    { icon: "devicon-redis-plain colored", title: "Redis" },
    { icon: "devicon-mongodb-plain-wordmark colored", title: "MongoDB" },
    { icon: "devicon-prisma-original", title: "Prisma" },
    { icon: "devicon-supabase-plain colored", title: "Supabase" },
  ],
  tools: [
    { icon: "devicon-git-plain colored", title: "Git" },
    { icon: "devicon-github-original", title: "GitHub" },
    { icon: "devicon-docker-plain colored", title: "Docker" },
    { icon: "devicon-nginx-original colored", title: "Nginx" },
    { icon: "devicon-insomnia-plain colored", title: "Insomnia" },
    { icon: "devicon-figma-plain colored", title: "Figma" },
    { icon: "devicon-vercel-original", title: "Vercel" },
  ],
  outro: [
    { icon: "devicon-androidstudio-plain colored", title: "Android Studio" },
    { icon: "devicon-kotlin-plain colored", title: "Kotlin" },
    { icon: "devicon-java-plain colored", title: "Java" },
    { icon: "devicon-csharp-plain colored", title: "C#" },
    { icon: "devicon-lua-plain colored", title: "Lua" },
    { icon: "devicon-php-plain colored", title: "PHP" },
    { icon: "devicon-laravel-original colored", title: "Laravel" },
  ],
};

const skillSections = [
  {
    key: "core",
    title: "skills.core.title",
    description: "skills.core.description",
    stack: stacks.core,
  },
  {
    key: "database",
    title: "skills.databases.title",
    description: "skills.databases.description",
    stack: stacks.database,
  },
  {
    key: "tools",
    title: "skills.tools.title",
    description: "skills.tools.description",
    stack: stacks.tools,
  },
  {
    key: "outro",
    title: "skills.outro.title",
    description: "skills.outro.description",
    stack: stacks.outro,
  },
];
</script>
