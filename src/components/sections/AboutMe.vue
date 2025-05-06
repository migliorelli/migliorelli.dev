<template>
  <section id="aboutme" class="py-18">
    <div class="container mx-auto space-y-8 px-4">
      <div class="grid gap-8 lg:grid-cols-3">
        <div class="col-span-2">
          <div class="mb-8 flex items-center" v-animate-on-view>
            <div class="mr-4 inline-block size-12 lg:hidden">
              <img
                src="/me/migliorelli.webp"
                class="size-full rounded-lg"
                alt="Migliorelli profile image"
                :width="48"
                :height="48"
                loading="lazy"
              />
            </div>

            <Title>
              {{ t("aboutme.title") }}
            </Title>
          </div>

          <p class="text-lg" v-animate-on-view>
            {{ t("aboutme.description") }}
          </p>
        </div>

        <div
          class="hidden self-center lg:block lg:justify-self-end"
          v-animate-on-view
        >
          <div
            class="group border-primary/20 hover:border-primary/50 hover:shadow-primary h-full max-h-80 w-full max-w-80 overflow-hidden rounded-lg border-1 transition-all"
          >
            <img
              src="/me/migliorelli.webp"
              :width="320"
              :height="320"
              alt="Migliorelli profile image"
              class="rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import Title from "../ui/Title.vue";

const { t } = useI18n();
</script>
