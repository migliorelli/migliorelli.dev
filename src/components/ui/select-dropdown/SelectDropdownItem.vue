<template>
  <component
    :is="as"
    role="menuitem"
    @click="handleClick(value)"
    :class="
      twMerge(
        'group flex w-full cursor-pointer items-center px-4 py-2 text-left text-sm text-white transition-colors duration-150 hover:bg-muted',
        $attrs.class as string,
      )
    "
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import { inject, type Component } from "vue";

interface Props {
  as?: string | Component;
  value: string;
}

withDefaults(defineProps<Props>(), { as: "button" });

type HandleClick = (value: string) => void;
const handleClick = inject<HandleClick>("handle-select-dropdown-item-click", () => {});
</script>
