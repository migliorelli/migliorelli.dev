<template>
  <component
    :is="as"
    role="menuitem"
    @click="handleClick(value)"
    class="group hover:bg-muted flex w-full cursor-pointer items-center px-4 py-2 text-left text-sm text-white transition-colors duration-150"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { inject, type Component } from "vue";

interface Props {
  as?: string | Component;
  value: string;
}

withDefaults(defineProps<Props>(), { as: "button" });

type HandleClick = (value: string) => void;
const handleClick = inject<HandleClick>(
  "handle-select-dropdown-item-click",
  () => {},
);
</script>
