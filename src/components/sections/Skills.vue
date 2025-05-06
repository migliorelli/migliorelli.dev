<template>
  <section id="skills" class="overflow-hidden py-12">
    <div
      class="after:to-background-alt/50 after:from-background-alt relative py-18 after:absolute after:top-0 after:left-1/2 after:z-0 after:h-full after:w-[120%] after:-translate-x-1/2 after:-skew-3 after:bg-gradient-to-l md:py-32"
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
                <TechIcon :icon="tech.icon" :label="tech.label" />
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
    { icon: "devicon-react-original colored", label: "React" },
    { icon: "devicon-vuejs-plain colored", label: "Vue.js" },
    { icon: "devicon-nextjs-plain", label: "Next.js" },
    { icon: "devicon-nodejs-plain-wordmark colored", label: "Node.js" },
    { icon: "devicon-typescript-plain colored", label: "TypeScript" },
    { icon: "devicon-express-original", label: "Express" },
  ],
  database: [
    { icon: "devicon-postgresql-plain colored", label: "PostgreSQL" },
    { icon: "devicon-mariadb-original colored", label: "MariaDB" },
    { icon: "devicon-redis-plain colored", label: "Redis" },
    { icon: "devicon-mongodb-plain-wordmark colored", label: "MongoDB" },
    { icon: "devicon-prisma-original", label: "Prisma" },
    { icon: "devicon-supabase-plain colored", label: "Supabase" },
  ],
  tools: [
    { icon: "devicon-git-plain colored", label: "Git" },
    { icon: "devicon-github-original", label: "GitHub" },
    { icon: "devicon-nginx-original colored", label: "Nginx" },
    { icon: "devicon-insomnia-plain colored", label: "Insomnia" },
    { icon: "devicon-figma-plain colored", label: "Figma" },
    { icon: "devicon-vercel-original", label: "Vercel" },
  ],
  outro: [
    { icon: "devicon-androidstudio-plain colored", label: "Android Studio" },
    { icon: "devicon-kotlin-plain colored", label: "Kotlin" },
    { icon: "devicon-java-plain colored", label: "Java" },
    { icon: "devicon-csharp-plain colored", label: "C#" },
    { icon: "devicon-lua-plain colored", label: "Lua" },
    { icon: "devicon-php-plain colored", label: "PHP" },
    { icon: "devicon-laravel-original colored", label: "Laravel" },
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
