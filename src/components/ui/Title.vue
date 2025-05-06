<template>
  <component
    :is="as"
    class="text-gradient after:from-primary-400 after:to-primary-600 relative inline-block text-4xl leading-12 font-bold after:absolute after:top-full after:left-0 after:mt-1 after:inline-block after:h-[2px] after:w-3/2 after:bg-gradient-to-r"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import type { Component } from "vue";

interface Props {
  as?: string | Component;
}

withDefaults(defineProps<Props>(), { as: "h2" });
</script>
