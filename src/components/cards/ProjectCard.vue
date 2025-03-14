<script setup lang="ts">
import { ArrowUpRight, Github } from "lucide-vue-next";
import { useI18n } from "vue-i18n";

export interface Project {
  title: string;
  description: string;
  image: string;
  href?: string;
  github?: string;
  techs: string[];
}

defineProps<Project>();

const { t } = useI18n();
</script>

<template>
  <div v-animate-on-view class="flex">
    <div
      class="group border-primary-950/70 hover:shadow-primary flex flex-col gap-2 rounded-lg border bg-black p-4 transition-shadow"
    >
      <div class="aspect-video overflow-hidden rounded-lg">
        <img
          :src="image"
          class="mx-auto h-full rounded-lg object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          :alt="`${title} image`"
        />
      </div>
      <div class="flex flex-1 flex-col gap-4">
        <p class="text-xl text-white">{{ title }}</p>

        <p class="text-slate-400">{{ description }}</p>

        <div class="flex flex-wrap gap-4">
          <div v-for="tech in techs" :key="tech" class="chip px-2 py-1">
            {{ tech }}
          </div>
        </div>

        <div class="mt-auto flex gap-4">
          <a :href="href" v-if="href" target="_blank" class="btn btn-border">
            <ArrowUpRight :size="18" /> {{ t("projects.access") }}
          </a>
          <a
            :href="github"
            v-if="github"
            target="_blank"
            class="btn btn-border"
          >
            <Github :size="18" /> Github
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
