<script setup lang="ts">
import { ArrowUpRight, Github } from "lucide-vue-next";
import { useI18n } from "vue-i18n";
import Badge from "../ui/Badge.vue";
import Button from "../ui/Button.vue";

export interface Project {
  title: string;
  description: string;
  image: string;
  href?: string;
  github?: string;
  techs: string[];
  imageWidth?: number;
  imageHeight?: number;
}

defineProps<Project>();

const imageWidth = 800;
const imageHeight = 450;
const { t } = useI18n();
</script>

<template>
  <div v-animate-on-view class="flex">
    <div
      class="group border-primary/20 hover:border-primary/50 hover:shadow-primary bg-background flex flex-col gap-2 rounded-lg border p-4 transition-all"
    >
      <div class="aspect-video overflow-hidden rounded-lg">
        <img
          loading="lazy"
          :src="image"
          :width="imageWidth"
          :height="imageHeight"
          class="mx-auto h-full rounded-lg object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          :alt="`${title} image`"
        />
      </div>
      <div class="flex flex-1 flex-col gap-4 mt-2">
        <p class="text-primary-400 text-2xl font-medium">{{ title }}</p>
        <p>{{ description }}</p>

        <div class="flex flex-wrap gap-2">
          <Badge as="li" v-for="tech in techs" :key="tech">
            {{ tech }}
          </Badge>
        </div>

        <div class="mt-auto flex gap-4">
          <Button
            v-if="href"
            as="a"
            :href="href"
            target="_blank"
            variant="border"
          >
            <ArrowUpRight :size="18" /> {{ t("projects.access") }}
          </Button>
          <Button
            v-if="github"
            as="a"
            :href="github"
            target="_blank"
            variant="border"
          >
            <Github :size="18" /> Github
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
