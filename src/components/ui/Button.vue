<template>
  <component
    :is="as"
    v-bind="props"
    :class="
      twMerge(
        'bg-primary hover:bg-primary/80 text-primary-100 inline-flex h-10 cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
        variant === 'border' &&
          'hover:bg-primary/20 border-primary text-primary border bg-transparent',
        $attrs.class as string,
      )
    "
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import { type Component } from "vue";

interface Props {
  variant?: "default" | "border";
  as?: string | Component;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
  as: "button",
});
</script>
