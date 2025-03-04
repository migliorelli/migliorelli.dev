<script setup lang="ts">
import { Github, Linkedin, Mail, Phone } from "lucide-vue-next";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const sendMessage = (e: Event) => {
  const form = e.target as HTMLFormElement;
  const data = new FormData(form);

  const nome = data.get("nome");
  const email = data.get("email");
  const tel = data.get("tel");
  const mensagem = data.get("mensagem");

  console.log(nome, email, tel, mensagem);
};
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
            <p class="mb-8 text-xl text-slate-400">
              {{ t("contact.description") }}
            </p>

            <div class="grid grid-cols-2">
              <a
                href="tel:+5527996475223"
                class="hover:bg-primary/20 flex items-center gap-4 rounded-lg p-2"
              >
                <div
                  class="bg-primary-400/10 text-primary-400 grid size-12 place-items-center rounded-lg transition-colors"
                >
                  <Phone />
                </div>
                <div>
                  <h3 class="font-semibold">{{ t("contact.phone") }}</h3>
                  <p class="text-slate-500">+55 27 996475223</p>
                </div>
              </a>

              <a
                href="mailto:miguel@migliorelli.dev"
                class="hover:bg-primary/20 flex items-center gap-4 rounded-lg p-2"
              >
                <div
                  class="bg-primary-400/10 text-primary-400 grid size-12 place-items-center rounded-lg transition-colors"
                >
                  <Mail />
                </div>
                <div>
                  <h3 class="font-semibold">E-mail</h3>
                  <p class="text-slate-500">miguel@migliorelli.dev</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/miguelmigliorelli/"
                target="_blank"
                class="hover:bg-primary/20 flex items-center gap-4 rounded-lg p-2"
              >
                <div
                  class="bg-primary-400/10 text-primary-400 grid size-12 place-items-center rounded-lg transition-colors"
                >
                  <Linkedin />
                </div>
                <div>
                  <h3 class="font-semibold">LinkedIn</h3>
                  <p class="text-slate-500">Miguel Migliorelli Bringhenti</p>
                </div>
              </a>

              <a
                href="https://github.com/migliorelli"
                target="_blank"
                class="hover:bg-primary/20 flex items-center gap-4 rounded-lg p-2"
              >
                <div
                  class="bg-primary-400/10 text-primary-400 grid size-12 place-items-center rounded-lg transition-colors"
                >
                  <Github />
                </div>
                <div>
                  <h3 class="font-semibold">Github</h3>
                  <p class="text-slate-500">migliorelli</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
