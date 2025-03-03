<script setup lang="ts">
import Footer from "../components/global/Footer.vue";
import Navbar from "../components/global/Navbar.vue";
import AboutMe from "../components/sections/AboutMe.vue";
import Hero from "../components/sections/Hero.vue";
import Projects from "../components/sections/Projects.vue";
import Skills from "../components/sections/Skills.vue";
</script>

<template>
  <Navbar />
  <main class="w-full pt-18">
    <Hero />
    <AboutMe />
    <Projects />
    <Skills />
  </main>
  <Footer />
</template>
