<template>
  <Transition
    enter-active-class="transition ease-out duration-100"
    enter-from-class="transform opacity-0 scale-95"
    enter-to-class="transform opacity-100 scale-100"
    leave-active-class="transition ease-in duration-75"
    leave-from-class="transform opacity-100 scale-100"
    leave-to-class="transform opacity-0 scale-95"
  >
    <div
      v-if="open"
      class="bg-card absolute top-full right-0 z-10 mt-1 min-w-34 rounded-md shadow-lg backdrop-blur-md"
      role="menu"
      aria-orientation="vertical"
    >
      <div class="py-1" role="none">
        <slot />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { inject, ref, type Ref } from "vue";

const open = inject<Ref<boolean>>("select-dropdown-open", ref(false));
</script>
