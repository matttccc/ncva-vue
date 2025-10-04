<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderNav from './components/HeaderNav.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div id="app">
    <HeaderNav />
    <main>
      <RouterView />
    </main>
    <FooterSection />
  </div>
</template>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
