<template>
  <div
    class="after:to-background relative inset-0 h-full w-full after:absolute after:bottom-0 after:left-0 after:h-14 after:w-full after:bg-gradient-to-b after:from-transparent after:from-10%"
    @mousemove="handleMouseMove"
    :style="{
      '--x': cursor.x + 'px',
      '--y': cursor.y + 'px',
    }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, reactive } from "vue";

const cursor = reactive({
  x: 0,
  y: 0,
});

const target = { x: 0, y: 0 };
let animationFrame: number | null = null;
const ease = 0.15;

const animate = () => {
  cursor.x += (target.x - cursor.x) * ease;
  cursor.y += (target.y - cursor.y) * ease;
  animationFrame = requestAnimationFrame(animate);
};

const handleMouseMove = (e: MouseEvent) => {
  if (window.innerWidth <= 768) return;
  target.x = e.pageX;
  target.y = e.pageY;
};

onMounted(() => {
  window.addEventListener("mousemove", handleMouseMove);
  animationFrame = requestAnimationFrame(animate);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", handleMouseMove);
  if (animationFrame) cancelAnimationFrame(animationFrame);
});
</script>

<style lang="css" scoped>
div {
  --gcolor: var(--color-primary-700);

  background-image: radial-gradient(
    circle farthest-side at 0% 0%,
    var(--gcolor) -50%,
    transparent 50%
  );

  @media (width >= 48rem /* 768px */) {
    background-image:
      radial-gradient(
        circle farthest-side at var(--x) var(--y),
        var(--gcolor) -50%,
        transparent 20%
      ),
      radial-gradient(
        circle farthest-side at 100% 100%,
        var(--gcolor) -50%,
        transparent 25%
      );
  }
}
</style>
