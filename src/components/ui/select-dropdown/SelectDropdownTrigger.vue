<template>
  <component
    :is="as"
    @click.stop="open = !open"
    aria-haspopup="true"
    :aria-expanded="open"
    :class="
      twMerge(
        'hover:bg-card flex cursor-pointer items-center justify-between rounded-lg p-2 text-foreground',
        $attrs.class as string,
      )
    "
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import { inject, ref, type Component, type Ref } from "vue";

interface Props {
  as?: string | Component;
}

withDefaults(defineProps<Props>(), { as: "button" });

const open = inject<Ref<boolean>>("select-dropdown-open", ref(false));
</script>
