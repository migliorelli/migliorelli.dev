<template>
  <header
    class="bg-background/60 fixed top-0 left-0 z-50 h-18 w-full backdrop-blur-xs"
  >
    <nav
      class="container mx-auto flex h-full w-full gap-8 p-4 px-4 md:content-center"
    >
      <div class="mr-auto flex items-center justify-start">
        <NavLink :to="basePath" class="text-2xl font-semibold">
          <span class="text-primary">migliorelli</span>
          <span class="text-white">.dev</span>
        </NavLink>
      </div>

      <ul class="hidden items-center justify-center gap-8 md:flex">
        <li v-for="link in links" :key="link.to">
          <NavLink :to="link.to">
            {{ link.text }}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="https://blog.migliorelli.dev"
            class="group flex items-center gap-1"
          >
            {{ t("navbar.blog") }}
            <ArrowUpRight
              :size="14"
              class="group-[:not(:hover)]:text-foreground/50 mt-1"
            />
          </NavLink>
        </li>
      </ul>

      <div class="my-auto flex items-center gap-2">
        <a
          href="https://github.com/migliorelli"
          target="_blank"
          title="Github"
          class="hover:bg-card text-foreground flex cursor-pointer items-center justify-between rounded-lg p-2"
        >
          <GithubIcon :size="18" />
        </a>

        <SelectDropdown @change="changeLocale" class="font-emoji my-auto">
          <SelectDropdownTrigger
            class="size-8 justify-center"
            title="Change locale"
          >
            {{ locale === "pt-BR" ? "🇧🇷" : "🇬🇧" }}
          </SelectDropdownTrigger>
          <SelectDropdownItems>
            <SelectDropdownItem value="pt-BR">🇧🇷 Português</SelectDropdownItem>
            <SelectDropdownItem value="en">🇬🇧 English</SelectDropdownItem>
          </SelectDropdownItems>
        </SelectDropdown>

        <button class="inline-block p-2 md:hidden" @click="drawerIsOpen = true">
          <Menu :size="24" />
        </button>
      </div>
    </nav>
  </header>

  <NavDrawer :open="drawerIsOpen" @close="drawerIsOpen = false" />
</template>

<script setup lang="ts">
import { ArrowUpRight, GithubIcon, Menu } from "lucide-vue-next";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";
import NavLink from "../ui/NavLink.vue";
import SelectDropdown from "../ui/select-dropdown/SelectDropdown.vue";
import SelectDropdownItem from "../ui/select-dropdown/SelectDropdownItem.vue";
import SelectDropdownItems from "../ui/select-dropdown/SelectDropdownItems.vue";
import SelectDropdownTrigger from "../ui/select-dropdown/SelectDropdownTrigger.vue";
import NavDrawer from "./NavDrawer.vue";

const router = useRouter();
const route = useRoute();

const { locale, t } = useI18n();
const basePath = computed(() => {
  return locale.value === "pt-BR" ? "/" : "/en";
});

const links = computed(() => [
  { to: "#aboutme", text: t("navbar.aboutme") },
  { to: "#skills", text: t("navbar.skills") },
  // { to: "#services", text: t("navbar.services") },
  { to: "#projects", text: t("navbar.projects") },
  { to: "#contact", text: t("navbar.contact") },
]);

const drawerIsOpen = ref(false);

const changeLocale = (value: string) => {
  locale.value = value;

  const newPath = value === "pt-BR" ? "/" : "/en";
  if (router.currentRoute.value.path !== newPath) {
    router.push(newPath + route.hash);
  }
};
</script>
