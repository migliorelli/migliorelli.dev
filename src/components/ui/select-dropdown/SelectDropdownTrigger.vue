<template>
  <component
    :is="as"
    @click.stop="open = !open"
    aria-haspopup="true"
    :aria-expanded="open"
    class="hover:bg-card text-foreground flex cursor-pointer items-center justify-between rounded-lg p-2"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { inject, ref, type Component, type Ref } from "vue";

interface Props {
  as?: string | Component;
}

withDefaults(defineProps<Props>(), { as: "button" });

const open = inject<Ref<boolean>>("select-dropdown-open", ref(false));
</script>
