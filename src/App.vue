<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import HeaderPage from './components/HeaderPage.vue'
  import FooterPage from './components/FooterPage.vue'
</script>

<template>
  <HeaderPage />
  <main>
    <RouterView v-slot="{ Component }">
      <Suspense>
        <component :is="Component" :key="$route.path" />
      </Suspense>
    </RouterView>
  </main>
  <FooterPage />
</template>