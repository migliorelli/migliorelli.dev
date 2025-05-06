<template>
  <GradientCursor>
    <section id="hero" class="h-[100vh] pt-18">
      <div
        class="relative container mx-auto grid h-full w-full px-4 md:grid-cols-2"
      >
        <div class="flex h-full max-w-xl flex-col justify-center pb-18">
          <div>
            <p class="text-primary text-lg" v-animate-on-view>
              {{ t("hero.presentation") }}
            </p>
            <span
              class="inline-block text-5xl font-bold text-white"
              v-animate-on-view="{ delay: 100 }"
            >
              Miguel Migliorelli
            </span>
            <h2
              class="mt-4 text-4xl font-bold"
              v-animate-on-view="{ delay: 200 }"
            >
              {{ t("hero.subtitle") }}
            </h2>
          </div>

          <div class="my-10">
            <p
              class="text-foreground md:text-lg"
              v-animate-on-view="{ delay: 300 }"
            >
              {{ t("hero.description") }}
            </p>
          </div>

          <div
            class="flex flex-col justify-start gap-4 md:flex-row"
            v-animate-on-view="{ delay: 400 }"
          >
            <Button
              as="a"
              :href="`/resumes/miguelmigliorelli-${locale}.pdf`"
              download
              target="_blank"
            >
              <Download /> {{ t("hero.resume") }}
            </Button>
            <Button :as="RouterLink" to="#contact" variant="border">
              <Share2 /> {{ t("hero.getintouch") }}
            </Button>
          </div>
        </div>
        <div class="hidden md:grid md:place-items-center" v-animate-on-view>
          <HeroArt />
        </div>
        <ScrollAdvise />
      </div>
    </section>
  </GradientCursor>
</template>

<script setup lang="ts">
import { Download, Share2 } from "lucide-vue-next";
import { useI18n } from "vue-i18n";
import { RouterLink } from "vue-router";
import GradientCursor from "../global/GradientCursor.vue";
import HeroArt from "../HeroArt.vue";
import ScrollAdvise from "../ScrollAdvise.vue";
import Button from "../ui/Button.vue";

const { t, locale } = useI18n();
</script>
