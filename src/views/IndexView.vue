<script setup lang="ts">
import Footer from "../components/global/Footer.vue";
import Navbar from "../components/global/Navbar.vue";
import AboutMe from "../components/sections/AboutMe.vue";
import Contact from "../components/sections/Contact.vue";
import Hero from "../components/sections/Hero.vue";
import Projects from "../components/sections/Projects.vue";
import Skills from "../components/sections/Skills.vue";
</script>

<template>
  <Navbar />
  <main class="bg-dots inset-0 h-full w-full">
    <Hero />
    <AboutMe />
    <Projects />
    <Skills />
    <Contact />
  </main>
  <Footer />
</template>
