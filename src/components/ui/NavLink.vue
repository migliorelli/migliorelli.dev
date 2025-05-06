<script setup lang="ts">
import {
  RouterLink,
  type RouteLocationAsPathGeneric,
  type RouteLocationAsRelativeGeneric,
} from "vue-router";

type Route =
  | string
  | RouteLocationAsRelativeGeneric
  | RouteLocationAsPathGeneric;

interface Props {
  to: Route;
}

defineProps<Props>();
</script>

<template>
  <RouterLink
    :to="to"
    class="hover:text-primary before:bg-primary relative transition-all duration-200 ease-in-out before:absolute before:-bottom-[4px] before:left-0 before:h-[2px] before:w-full before:max-w-0 before:transition-all before:duration-200 before:ease-in-out hover:before:max-w-full"
  >
    <slot />
  </RouterLink>
</template>
