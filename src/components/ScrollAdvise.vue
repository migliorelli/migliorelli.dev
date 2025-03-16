<script setup lang="ts">
import { Mouse } from "lucide-vue-next";
</script>

<template>
  <RouterLink
    to="#aboutme"
    class="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-2/1 cursor-pointer opacity-75 transition-opacity hover:opacity-100"
  >
    <hr class="border-primary my-auto inline-block h-[1px] w-8 opacity-75" />
    <Mouse
      :size="28"
      :stroke-width="1.5"
      class="text-primary mx-2 inline-block opacity-75"
    />
    <hr class="border-primary my-auto inline-block h-[1px] w-8 opacity-75" />
  </RouterLink>
</template>
