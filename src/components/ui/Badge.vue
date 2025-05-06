<template>
  <component
    :is="as"
    :class="
      twMerge(
        'bg-primary/20 text-primary inline-flex items-center gap-2 rounded-full px-2 py-1 text-sm font-semibold [&_svg]:size-4 [&_svg]:shrink-0',
        $attrs.class as string,
      )
    "
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import type { Component } from "vue";

interface Props {
  as?: string | Component;
}

withDefaults(defineProps<Props>(), { as: "div" });
</script>
