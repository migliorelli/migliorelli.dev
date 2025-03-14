<script setup lang="ts">
import { GalleryHorizontal } from "lucide-vue-next";
import { useI18n } from "vue-i18n";
import ProjectCard from "../cards/ProjectCard.vue";
const { t } = useI18n();
</script>

<template>
  <section id="projects" class="py-18">
    <div class="container mx-auto px-4">
      <div class="chip" v-animate-on-view>
        <GalleryHorizontal /> {{ t("projects.chip") }}
      </div>
      <h1
        class="mt-4 mb-8 text-3xl font-bold text-white"
        v-animate-on-view="{ delay: 100 }"
      >
        {{ t("projects.title") }}
      </h1>

      <div class="grid gap-16 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          :title="t('projects.wbpinturas.title')"
          :description="t('projects.wbpinturas.description')"
          :techs="['Vue', 'TailindCSS', 'Lucide']"
          image="/projects/wbpinturas.webp"
          href="https://migliorelli.github.io/wbpinturas/"
        />

        <ProjectCard
          :title="t('projects.fartic.title')"
          :description="t('projects.fartic.description')"
          :techs="[
            'Vue',
            'TailwindCSS',
            'Axios',
            'Express.js',
            'Socket.io',
            'MongoDB',
          ]"
          image="/projects/fartic.webp"
          github="https://github.com/migliorelli/fartic"
        />

        <ProjectCard
          :title="t('projects.lolrandom.title')"
          :description="t('projects.lolrandom.description')"
          :techs="['Vue', 'Lucide', 'Axios', 'DataDragon API']"
          image="/projects/lolrandom.webp"
          href="https://lolrandom.migliorelli.dev/"
          github="https://github.com/migliorelli/lol-skin-randomizer"
        />

        <ProjectCard
          :title="t('projects.instaprobar.title')"
          :description="t('projects.instaprobar.description')"
          :techs="['Javascript', 'Browser Extension']"
          image="/projects/instaprobar.webp"
          github="https://github.com/migliorelli/instagram-video-progress-bar"
        />

        <ProjectCard
          :title="t('projects.tunein.title')"
          :description="t('projects.tunein.description')"
          :techs="['Javascript', 'Twitch Extension', 'StreamElements API']"
          image="/projects/tunein.webp"
          github="https://github.com/migliorelli/tune-in"
        />
      </div>
    </div>
  </section>
</template>
