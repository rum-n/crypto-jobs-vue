<script setup>
import { RouterView } from "vue-router";
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Nav />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped>
main {
  min-height: 80vh;
}
</style>
