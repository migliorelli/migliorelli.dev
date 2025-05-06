<template>
  <component
    :is="as"
    class="bg-primary/20 text-primary [&_svg]:shrink-0', inline-flex items-center gap-2 rounded-full px-2 py-1 text-sm font-semibold [&_svg]:size-4"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import type { Component } from "vue";

interface Props {
  as?: string | Component;
}

withDefaults(defineProps<Props>(), { as: "div" });
</script>
