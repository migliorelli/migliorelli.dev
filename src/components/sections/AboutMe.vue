<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const techs = [
  "Vue",
  "React",
  "React Native",
  "Jetpack Compose",
  "Express",
  "Prisma",
  "MongoDB",
  "Nginx",
  "Docker",
];
</script>

<template>
  <section id="aboutme" class="py-18">
    <div class="container mx-auto space-y-8 px-4">
      <div class="flex gap-4 text-5xl" v-animate-on-view>
        <div class="size-[1em] md:hidden">
          <img src="/migliorelli.png" class="size-full rounded-lg" />
        </div>

        <h1 class="font-bold text-white">
          {{ t("aboutme.title") }}
        </h1>
      </div>

      <div class="grid gap-8 md:grid-cols-3">
        <div class="col-span-2 space-y-8">
          <p v-animate-on-view="{ delay: 100 }">
            {{ t("aboutme.description") }}
          </p>
          <ul class="flex flex-wrap gap-4" v-animate-on-view="{ delay: 200 }">
            <li v-for="tech in techs" class="chip">
              {{ tech }}
            </li>
          </ul>
        </div>

        <div class="hidden md:block md:justify-self-end" v-animate-on-view>
          <div class="group min-h-80 max-w-80 overflow-hidden rounded-lg">
            <img
              src="/migliorelli.png"
              class="w-full rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
