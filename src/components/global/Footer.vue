<script setup lang="ts">
import { Github, Linkedin, Mail, Twitter } from "lucide-vue-next";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/migliorelli",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/migliorelli",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:miguel@migliorelli.dev",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/migliorelli",
  },
];
</script>

<template>
  <footer class="border-primary/20 border-t py-12">
    <div class="container mx-auto px-4">
      <div class="grid gap-8 md:grid-cols-3">
        <div class="space-y-4">
          <h3 class="text-md font-bold text-white">
            {{ t("footer.about.title") }}
          </h3>
          <p class="text-sm text-gray-300">
            {{ t("footer.about.description") }}
          </p>
        </div>

        <div class="space-y-4">
          <h3 class="text-md font-bold text-white">
            {{ t("footer.links") }}
          </h3>
          <ul class="space-y-2 text-sm">
            <li>
              <RouterLink
                to="#hero"
                class="hover:text-primary text-gray-300 transition-colors"
              >
                {{ t("footer.home") }}
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="#aboutme"
                class="hover:text-primary text-gray-300 transition-colors"
              >
                {{ t("footer.aboutme") }}
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="#projects"
                class="hover:text-primary text-gray-300 transition-colors"
              >
                {{ t("footer.projects") }}
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="#skills"
                class="hover:text-primary text-gray-300 transition-colors"
              >
                {{ t("footer.skills") }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <div class="space-y-4">
          <h3 class="text-md font-bold text-white">{{ t("footer.social") }}</h3>
          <div class="grid grid-cols-2 gap-4 text-sm">
            <a
              v-for="link in socialLinks"
              :key="link.name"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-primary flex items-center gap-2 text-gray-300 transition-colors"
            >
              <component :is="link.icon" class="size-5" />
              <span>{{ link.name }}</span>
            </a>
          </div>
        </div>
      </div>

      <div
        class="border-primary/20 mt-8 border-t pt-8 text-center text-sm text-gray-300"
      >
        <p>
          &copy;
          {{ new Date().getFullYear() }} Miguel Migliorelli Bringhenti.
          {{ t("footer.rights") }}
        </p>
      </div>
    </div>
  </footer>
</template>
