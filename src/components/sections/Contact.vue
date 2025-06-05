<template>
  <section id="contact" class="overflow-hidden pt-12">
    <div
      class="after:to-background-alt/50 after:from-background-alt relative py-18 after:absolute after:top-0 after:left-1/2 after:z-0 after:h-[105%] after:w-[120%] after:-translate-x-1/2 after:translate-y-4 after:skew-3 after:bg-gradient-to-l md:py-32"
    >
      <div class="relative z-1 container mx-auto px-4">
        <div class="mx-auto max-w-5xl">
          <div class="flex items-center justify-center">
            <div class="text-start" v-animate-on-view="{ delay: 0 }">
              <h1
                class="mb-4 text-4xl font-bold text-white"
                v-html="t('contact.title')"
              />

              <h2 class="mb-8 text-xl text-slate-400">
                {{ t("contact.description") }}
              </h2>

              <div class="grid gap-4 md:grid-cols-2">
                <ContactLink
                  v-for="(contact, index) in contacts"
                  :key="index"
                  :content="contact.content"
                  :icon="contact.icon"
                  :href="contact.href"
                  :title="contact.title"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Github, Linkedin, Mail, Phone } from "lucide-vue-next";
import { useI18n } from "vue-i18n";
import ContactLink from "../ui/ContactLink.vue";

const { t } = useI18n();

const contacts = [
  {
    title: t("contact.phone"),
    content: "+55 27 996475223",
    href: "tel:+5527996475223",
    icon: Phone,
  },
  {
    title: "E-mail",
    content: "miguel@migliorelli.dev",
    href: "mailto:miguel@migliorelli.dev",
    icon: Mail,
  },
  {
    title: "LinkedIn",
    content: "Miguel Migliorelli",
    href: "https://www.linkedin.com/in/miguelmigliorelli/",
    icon: Linkedin,
  },
  {
    title: "Github",
    content: "migliorelli",
    href: "https://github.com/migliorelli",
    icon: Github,
  },
];
</script>
