<script setup lang="ts">
import { Download, Share2 } from "lucide-vue-next";
import { computed, onMounted, ref, watch } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

const roles = computed(() => {
  return t("hero.roles").split("//");
});

const currentRole = ref("");
const timeout = ref(0);

let index = 0;
let charIndex = 0;

const typeText = () => {
  if (charIndex < roles.value[index].length) {
    currentRole.value += roles.value[index][charIndex];
    charIndex++;
    timeout.value = setTimeout(typeText, 100);
  } else {
    timeout.value = setTimeout(eraseText, 2000);
  }
};

const eraseText = () => {
  if (charIndex > 0) {
    currentRole.value = currentRole.value.slice(0, -1);
    charIndex--;
    timeout.value = setTimeout(eraseText, 50);
  } else {
    index = (index + 1) % roles.value.length;
    timeout.value = setTimeout(typeText, 500);
  }
};

watch(locale, () => {
  clearTimeout(timeout.value);
  currentRole.value = "";
  index = 0;
  charIndex = 0;
  typeText();
});

onMounted(() => {
  typeText();
});
</script>

<template>
  <section id="hero" class="h-dvh">
    <div class="grid h-full w-full px-4 md:grid-cols-2 md:px-18">
      <div class="flex h-full max-w-xl flex-col justify-center pb-18">
        <div class="mb-8 space-y-4">
          <p class="text-primary" v-animate-on-view>
            {{ t("hero.presentation") }}
          </p>
          <h1
            class="text-5xl font-bold text-white"
            v-animate-on-view="{ delay: 100 }"
          >
            Miguel Migliorelli
          </h1>
        </div>

        <div class="space-y-2">
          <h2
            class="pr-2 font-mono text-2xl break-words"
            v-animate-on-view="{ delay: 200 }"
          >
            {{ t("hero.im") }}
            <span class="text-primary">{{ currentRole }}</span>
            <span class="animate-pulse">|</span>
          </h2>
          <p
            class="text-medium text-gray-300"
            v-animate-on-view="{ delay: 300 }"
          >
            {{ t("hero.description") }}
          </p>
        </div>

        <div
          class="mt-8 flex flex-col justify-start gap-4 md:flex-row"
          v-animate-on-view="{ delay: 400 }"
        >
          <a
            :href="`/curriculo-${locale}.pdf`"
            download
            target="_blank"
            class="btn"
          >
            <Download /> {{ t("hero.resume") }}
          </a>
          <RouterLink to="#socials" class="btn btn-border">
            <Share2 /> {{ t("hero.getintouch") }}
          </RouterLink>
        </div>
      </div>
      <div></div>
    </div>
  </section>
</template>
