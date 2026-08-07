<script setup>
import { onMounted } from 'vue';
import { useDarkMode } from './composables/useDarkMode';
import Navbar from './components/Navbar.vue';

const { initDarkMode } = useDarkMode();

onMounted(() => {
  initDarkMode();
});
</script>

<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>
