<script setup lang="ts">
import Footer from "../components/global/Footer.vue";
import Navbar from "../components/global/Navbar.vue";
import AboutMe from "../components/sections/AboutMe.vue";
import Contact from "../components/sections/Contact.vue";
import Hero from "../components/sections/Hero.vue";
import Projects from "../components/sections/Projects.vue";
// import Services from "../components/sections/Services.vue";
import { Analytics } from "@vercel/analytics/vue";
import Skills from "../components/sections/Skills.vue";
</script>

<template>
  <Analytics />
  <Navbar />
  <main class="inset-0 h-full w-full">
    <Hero />
    <AboutMe />
    <Skills />
    <!-- <Services /> -->
    <Projects />
    <Contact />
  </main>
  <Footer />
</template>
