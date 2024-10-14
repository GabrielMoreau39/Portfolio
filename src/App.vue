<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router/auto'
import LogInOut from './components/LogInOut.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <h1 class="text-2xl bg-slate-400">Portfolio</h1>
      <LogInOut />
      <nab>
        <ul>
          <RouterLink to="/">Accueil</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </ul>
      </nab>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>
