<!--
<template>
  <section id="projects" class="py-18">
    <div class="container mx-auto px-4">
      <Title class="mb-8" v-animate-on-view>
        {{ t("services.title") }}
      </Title>

      <div class="grid gap-16 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :title="t(`projects.items.${project.id}.title`)"
          :description="t(`projects.items.${project.id}.description`)"
          :techs="project.techs"
          :image="project.image"
          :href="project.href"
          :github="project.github"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { projects } from "../../data/projects";
import ProjectCard from "../cards/ProjectCard.vue";
import Title from "../ui/Title.vue";

const { t } = useI18n();
</script>
-->
