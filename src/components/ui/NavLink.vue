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

const props = defineProps<Props>();
const isExternal = typeof props.to === "string" && props.to.includes("http");
</script>

<template>
  <component
    :is="isExternal ? 'a' : RouterLink"
    :href="isExternal ? to : undefined"
    :to="isExternal ? undefined : to"
    :target="isExternal ? '_blank' : undefined"
    class="hover:text-primary before:bg-primary relative cursor-pointer transition-all duration-200 ease-in-out before:absolute before:-bottom-[4px] before:left-0 before:h-[2px] before:w-full before:max-w-0 before:transition-all before:duration-200 before:ease-in-out hover:before:max-w-full"
  >
    <slot />
  </component>
</template>
