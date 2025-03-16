<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";
import Dropdown, { type Option } from "../ui/Dropdown.vue";

const router = useRouter();
const route = useRoute();

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

const locales = computed(() => [
  { key: "pt-BR", value: "🇧🇷 Português" },
  { key: "en", value: "🇬🇧 English" },
]);

const changeLocale = (option: Option) => {
  locale.value = option.key;

  const newPath = option.key === "pt-BR" ? "/" : "/en";
  if (router.currentRoute.value.path !== newPath) {
    router.push(newPath + route.hash);
  }
};
</script>

<template>
  <header
    class="fixed top-0 left-0 z-50 h-18 w-full bg-black/60 backdrop-blur-xs"
  >
    <nav
      class="container mx-auto flex h-full w-full gap-8 p-4 px-4 md:content-center"
    >
      <div class="mr-auto flex items-center justify-start">
        <RouterLink :to="basePath" class="nav-link text-lg font-semibold">
          <span class="text-primary">migliorelli</span>
          <span class="text-white">.dev</span>
        </RouterLink>
      </div>

      <ul class="hidden items-center justify-center gap-8 md:flex">
        <li v-for="link in links" :key="link.to">
          <RouterLink :to="link.to" class="nav-link">
            {{ link.text }}
          </RouterLink>
        </li>
      </ul>

      <div class="my-auto">
        <Dropdown
          @change="changeLocale"
          :selected-key="locale"
          button-class="size-8 font-emoji"
          option-class="font-emoji"
          :options="locales"
        >
          {{ locale === "pt-BR" ? "🇧🇷" : "🇬🇧" }}
        </Dropdown>
      </div>
    </nav>
  </header>
</template>
