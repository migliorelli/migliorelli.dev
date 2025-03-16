<script setup lang="ts">
import { computed, watch } from "vue";
import { useI18n } from "vue-i18n";

interface Props {
  open: boolean;
}

interface Emits {
  (event: "close"): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const { locale, t } = useI18n();
const basePath = computed(() => {
  return locale.value === "pt-BR" ? "/" : "/en";
});

const links = computed(() => [
  { to: "#aboutme", text: t("navbar.aboutme") },
  { to: "#projects", text: t("navbar.projects") },
  { to: "#skills", text: t("navbar.skills") },
  { to: "#contact", text: t("navbar.contact") },
]);

const handleClose = () => {
  emit("close");
};

watch(
  () => props.open,
  () => {
    if (props.open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  },
);
</script>

<template>
  <Transition>
    <nav
      class="fixed inset-0 z-60 bg-black/60 backdrop-blur-xs"
      v-show="open"
      @click="handleClose"
    >
      <ul class="flex h-full flex-col items-center justify-center space-y-4">
        <li>
          <RouterLink :to="basePath" class="nav-link text-2xl font-semibold">
            <span class="text-primary">migliorelli</span>
            <span class="text-white">.dev</span>
          </RouterLink>
        </li>
        <li v-for="link in links" :key="link.to">
          <RouterLink
            :to="link.to"
            class="text-2xl font-semibold text-white hover:text-slate-200"
          >
            {{ link.text }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: clip-path 300ms ease;
}

.v-enter-from,
.v-leave-to {
  clip-path: inset(0 0 0 100%);
}

.v-enter-to,
.v-leave-from {
  clip-path: inset(0 0 0 0);
}
</style>
