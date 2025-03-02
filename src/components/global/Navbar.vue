<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, useTemplateRef } from "vue";

const sections = ["hero", "aboutme", "projects", "skills"];
const observers = ref<IntersectionObserver[]>([]);
const activeSection = ref("hero");

const background = useTemplateRef("background");
const listContainer = useTemplateRef("list-container");
const listContainerCoords = computed(() => {
  let x = 0;
  let y = 0;

  if (listContainer.value) {
    const rect = listContainer.value.getBoundingClientRect();
    [x, y] = [rect.x, rect.y];
  }

  return { x, y };
});

const handleLogoClick = (event: MouseEvent) => {
  if (!event.ctrlKey && !event.metaKey && event.button === 0) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    parent.location.hash = "";
  }
};

const getCoords = (rect: DOMRect) => {
  return {
    x: rect.x - listContainerCoords.value.x,
    y: rect.y - listContainerCoords.value.y,
  };
};

const handleMouseEnter = (event: MouseEvent) => {
  if (!event.target || !background.value) return;
  const el = event.target as HTMLElement;
  const rect = el.getBoundingClientRect();
  const coords = getCoords(rect);

  background.value.style.top = `${coords.y}px`;
  background.value.style.width = `${rect.width}px`;

  const activeLink = document.querySelector(".nav-link.active");
  if (activeLink) activeLink.classList.remove("active");

  el.classList.add("active");
};

const handleMouseLeave = (event: MouseEvent) => {
  const activeEl = document.querySelector(
    `.nav-link#navlink-${activeSection.value}`,
  );

  if (!event.target || !background.value || !activeEl) return;

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
  });

  const rect = activeEl.getBoundingClientRect();
  const coords = getCoords(rect);

  background.value.style.top = `${coords.y}px`;
  background.value.style.width = `${rect.width}px`;

  activeEl.classList.add("active");
};

onMounted(() => {
  sections.forEach((section) => {
    const sectionElement = document.querySelector(`section#${section}`);
    if (sectionElement) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          const navLink = document.querySelector(
            `.nav-link#navlink-${section}`,
          );

          if (!navLink || !background.value) return;

          if (entry.isIntersecting) {
            document.querySelectorAll(".nav-link").forEach((link) => {
              link.classList.remove("active");
            });

            const rect = navLink.getBoundingClientRect();
            const coords = getCoords(rect);

            background.value.style.top = `${coords.y}px`;
            background.value.style.width = `${rect.width}px`;

            navLink.classList.add("active");
            activeSection.value = sectionElement.id;
          }
        },
        {
          root: null,
          threshold: 0.5,
        },
      );

      observer.observe(sectionElement);
    }
  });
});

onUnmounted(() => {
  observers.value.forEach((observer) => observer.disconnect());
});
</script>

<template>
  <nav class="fixed top-1/2 left-4 -translate-y-1/2">
    <div class="relative" ref="list-container">
      <div
        ref="background"
        class="bg-primary absolute -z-1 box-content h-6 w-full rounded-full py-2 transition-all"
      ></div>

      <ul class="space-y-2">
        <li
          class="nav-link group"
          id="navlink-hero"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
        >
          <a href="/" @click="handleLogoClick">migliorelli.dev</a>
        </li>
        <li
          class="nav-link"
          id="navlink-aboutme"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
        >
          <a href="#aboutme">About me</a>
        </li>
        <li
          class="nav-link"
          id="navlink-projects"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
        >
          <a href="#projects">Projects</a>
        </li>
        <li
          class="nav-link"
          id="navlink-skills"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
        >
          <a href="#skills">Skills</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
