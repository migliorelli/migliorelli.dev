<template>
  <a
    :href="href"
    class="hover:bg-primary/20 transition-colors duration-100 flex items-center gap-4 rounded-lg p-2"
    target="_blank"
  >
    <div
      class="bg-primary-400/10 text-primary-400 grid size-12 place-items-center rounded-lg transition-colors"
    >
      <component :is="icon" />
    </div>
    <div>
      <h3 class="font-semibold">{{ title }}</h3>
      <p class="text-slate-500 select-text">
        {{ content }}
      </p>
    </div>
  </a>
</template>

<script setup lang="ts">
import type { Component } from "vue";

interface Props {
  href: string;
  icon: Component;
  title: string;
  content: string;
}

defineProps<Props>();
</script>
