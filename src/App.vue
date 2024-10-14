<script setup lang="ts">
import { RouterView } from 'vue-router/auto'
import HeaderPage from './components/HeaderPage.vue';
</script>

<template>
  <HeaderPage />
  <main>
    <RouterView />
  </main>

</template>
