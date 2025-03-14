<script setup lang="ts">
import { Github, Linkedin, Mail, Phone } from "lucide-vue-next";
import { useI18n } from "vue-i18n";

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

<template>
  <section id="contact" class="py-20">
    <div class="container mx-auto px-4">
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

            <div class="grid md:grid-cols-2">
              <a
                v-for="(contact, index) in contacts"
                :key="index"
                :href="contact.href"
                class="hover:bg-primary/20 flex items-center gap-4 rounded-lg p-2"
                target="_blank"
              >
                <div
                  class="bg-primary-400/10 text-primary-400 grid size-12 place-items-center rounded-lg transition-colors"
                >
                  <component :is="contact.icon" />
                </div>
                <div>
                  <h3 class="font-semibold">{{ contact.title }}</h3>
                  <p class="text-slate-500 select-text">
                    {{ contact.content }}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
