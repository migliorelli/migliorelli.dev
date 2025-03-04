<script setup lang="ts">
import { GalleryHorizontal } from "lucide-vue-next";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const mainTechs = [
  "Vue | Nuxt",
  "React | Next",
  "TailwindCSS",
  "TypeScript",
];

const backendTechs = [
  "Express.js",
  "Prisma",
  "MongoDB",
  "REST APIs",
  "WebSockets",
];

const tools = [
  "Git",
  "Docker",
  "Nginx",
  "Insomnia",
  "Figma",
  "Vercel",
  "Netlify",
];

const otherTechs = ["SASS", "Vite", "PostgresSQl", "MySQL", "Redis"];
</script>

<template>
  <section id="skills" class="py-18">
    <div class="container mx-auto px-4">
      <div class="chip mb-8" v-animate-on-view>
        <GalleryHorizontal /> {{ t("skills.chip") }}
      </div>

      <div class="grid gap-16 md:grid-cols-2">
        <div>
          <h1
            class="mb-4 text-3xl font-bold text-white"
            v-animate-on-view="{ delay: 100 }"
          >
            {{ t("skills.main.title") }}
          </h1>
          <p
            class="mb-8 text-md text-gray-300"
            v-animate-on-view="{ delay: 200 }"
          >
            {{ t("skills.main.description") }}
          </p>
          <ul class="flex flex-wrap gap-4" v-animate-on-view="{ delay: 300 }">
            <li v-for="tech in mainTechs" class="chip">
              {{ tech }}
            </li>
          </ul>
        </div>

        <div>
          <h1
            class="mb-4 text-3xl font-bold text-white"
            v-animate-on-view="{ delay: 400 }"
          >
            {{ t("skills.backend.title") }}
          </h1>
          <p
            class="mb-8 text-md text-gray-300"
            v-animate-on-view="{ delay: 500 }"
          >
            {{ t("skills.backend.description") }}
          </p>
          <ul class="flex flex-wrap gap-4" v-animate-on-view="{ delay: 600 }">
            <li v-for="tech in backendTechs" class="chip">
              {{ tech }}
            </li>
          </ul>
        </div>

        <div>
          <h1
            class="mb-4 text-3xl font-bold text-white"
            v-animate-on-view="{ delay: 700 }"
          >
            {{ t("skills.tools.title") }}
          </h1>
          <p
            class="mb-8 text-md text-gray-300"
            v-animate-on-view="{ delay: 800 }"
          >
            {{ t("skills.tools.description") }}
          </p>
          <ul class="flex flex-wrap gap-4" v-animate-on-view="{ delay: 900 }">
            <li v-for="tech in tools" class="chip">
              {{ tech }}
            </li>
          </ul>
        </div>

        <div>
          <h1
            class="mb-4 text-3xl font-bold text-white"
            v-animate-on-view="{ delay: 1000 }"
          >
            {{ t("skills.outro.title") }}
          </h1>
          <p
            class="mb-8 text-md text-gray-300"
            v-animate-on-view="{ delay: 1100 }"
          >
            {{ t("skills.outro.description") }}
          </p>
          <ul class="flex flex-wrap gap-4" v-animate-on-view="{ delay: 1200 }">
            <li v-for="tech in otherTechs" class="chip">
              {{ tech }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
