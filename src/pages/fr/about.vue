<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useDark } from '@vueuse/core'
import { RouterLink } from 'vue-router/auto'

const isDark = useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: 'light',
})  
</script>

<template>
  <div class="bg-black dark:bg-white lg:p-10">
    <section class="px-7 py-10 space-y-6">
      <h2 class="dark:text-black lg:text-2xl">Qui suis-je ?</h2>
      <div class="space-y-6 lg:grid lg:grid-cols-2 lg:items-center lg-justify-between">
        <p class="dark:text-black lg:text-xl">Bonjour, je m'appelle Gabriel Moreau, j'ai 18 ans et je suis
          actuellement en deuxième
          année de BUT MMI (Métiers
          du Multimédia et de l'Internet) à Montbéliard. Je me suis spécialisé en Développement Web. À travers ce site,
          vous aurez l'occasion de découvrir mes différents travaux/projets qui vous permettront de voir mes compétences
          et les outils/applications que je maîtrise.</p>
        <img src="/public/img/img-a-propos.png" alt="photo de Gabriel Moreau"
          class="size-1/2 display flex justify-center items-center mx-auto lg:size-1/1 lg:h-80 lg:w-80">
      </div>
    </section>
    <section class="space-y-4">
      <h2 class="dark:text-black px-7 lg:text-2xl">Mes formations</h2>
      <div class="space-y-4 lg:flex lg:display lg:items-center lg:justify-between">
        <div class="lg:flex lg:items-start lg:justify-between lg:gap-8 lg:mx-auto lg:max-w-7xl lg:mt-10">
          <!-- First Card -->
          <div class="bg-[#EDEDED] dark:bg-gray m-3 p-4 rounded-lg space-y-4 lg:w-[400px]">
            <img v-show="!isDark" src="/public/img/logo-MMI.png" alt="logo MMI" class="size-1/4">
            <img v-show="isDark" src="/public/img/logo-MMI-blanc.png" alt="logo MMI" class="size-1/4">
            <div>
              <h2 class="font-sans font-bold text-black dark:text-white">BUT MMI Montbéliard</h2>
              <h3 class="text-black dark:text-white font-sans">2023 - 2026</h3>
            </div>
            <p class="text-black dark:text-white">Le BUT Métiers du Multimédia et de l'Internet, forme à tous les
              métiers du Web. Depuis 1997, la formation multimédia dispensée à Montbéliard est certainement, en France,
              la plus orientée projets. Des projets de création de sites, d'intégration multimédia, de vidéos et de
              communication… viennent valider les acquis au cours des six semestres de formation complétés par un stage
              au cours de la 2e année et un stage de fin d'études en 3e année. (Source : formation.univ-fcomte.fr)</p>
            <a href="https://www.iut-nfc.univ-fcomte.fr/b-u-t-metiers-du-multimedia-et-de-linter">
              <button class="bg-gray dark:bg-white py-2 px-4 rounded-md mt-3">
                <p class="dark:text-black">Découvrir la formation</p>
              </button>
            </a>
          </div>

          <!-- Timeline Image -->
          <img src="/public/img/frise.svg" alt="frise" class="hidden lg:block lg:h-[718px]">

          <!-- Second Card -->
          <div class="bg-[#EDEDED] dark:bg-gray m-3 lg:mt-96 p-4 rounded-lg space-y-4 lg:w-[400px]">
            <img src="/public/img/logo-lycee.png" alt="logo MMI" class="size-1/4 dark:bg-white dark:rounded-md">
            <div>
              <h2 class="font-sans font-bold text-black dark:text-white">Lycée Victor-Bérard</h2>
              <h3 class="text-black dark:text-white font-sans">2020 - 2023</h3>
            </div>
            <p class="text-black dark:text-white">Obtention d'un Baccalauréat Général spécialités Mathématiques et
              Physique Chimie et Sciences de l'ingénieur, avec options Maths Expertes et Arts Plastiques, avec mention
              assez bien.</p>
            <a href="http://www.lyceemorez.fr/">
              <button class="bg-gray dark:bg-white py-2 px-4 rounded-md mt-3">
                <p class="dark:text-black">Découvrir la formation</p>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="px-7 py-10 space-y-8">
      <div class="lg:flex lg:space-x-2 lg:mt-8 lg:text-center lg:mx-auto lg:justify-center">
        <h2 class="dark:text-black lg:text-2xl">Si vous souhaitez en</h2>
        <h2 class="dark:text-black lg:text-2xl">savoir plus sur moi</h2>
      </div>
      <div>
        <RouterLink to="/fr/contact">
          <button class="text-white dark:text-black border rounded-sm py-2 lg:py-4 px-4 lg:px-6 display flex justify-center mx-auto lg:text-xl">
            Contactez moi !
          </button>
        </RouterLink>
      </div>
    </section>
  </div>
</template>