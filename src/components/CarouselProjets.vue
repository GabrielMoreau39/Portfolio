<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { pb } from '@/backend'
import type { ProjetsResponse } from '@/pocketbase-types'
import { useDark } from '@vueuse/core'
import IconFleche from './icons/IconFleche.vue'
import IconFLecheNoire from './icons/IconFLecheNoire.vue'
import IconFigma from './icons/IconFigma.vue'
import IconVsCode from './icons/IconVsCode.vue'
import IconGitHub from './icons/IconGitHub.vue'
import IconGithubNoir from './icons/IconGithubNoir.vue'

const isDark = useDark()
const listProjets = ref<ProjetsResponse[]>([])
const currentIndex = ref(0)
const isLoading = ref(true)
const containerRef = ref<HTMLElement | null>(null)
const scrollProgress = ref(0)

const fetchProjets = async () => {
    try {
        const records = await pb.collection('Projets').getFullList<ProjetsResponse>({
            requestKey: 'projets-carousel',
            timeout: 10000
        })
        listProjets.value = records
        isLoading.value = false
    } catch (error) {
        console.error('Erreur:', error)
        isLoading.value = false
    }
}

const updateScrollProgress = () => {
  if (!containerRef.value) return
  const { scrollLeft, scrollWidth, clientWidth } = containerRef.value
  scrollProgress.value = 100 - ((scrollLeft / (scrollWidth - clientWidth)) * 100)
  console.log('Scroll Progress:', scrollProgress.value)
}

const handleScroll = () => {
    requestAnimationFrame(updateScrollProgress)
}

const scrollToIndex = (index: number) => {
    if (!containerRef.value) return
    const slideWidth = containerRef.value.offsetWidth
    containerRef.value.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
    })
    currentIndex.value = index
}

const nextSlide = () => {
    const newIndex = (currentIndex.value + 1) % listProjets.value.length
    scrollToIndex(newIndex)
}

const prevSlide = () => {
    const newIndex = (currentIndex.value - 1 + listProjets.value.length) % listProjets.value.length
    scrollToIndex(newIndex)
}

onMounted(() => {
    fetchProjets()
    containerRef.value?.addEventListener('scroll', handleScroll)
    updateScrollProgress()
})

onUnmounted(() => {
    containerRef.value?.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <div class="mx-auto max-w-6xl px-4 mt-4">
        <div if="listProjets.length" class="relative">
            <div ref="containerRef" class="flex overflow-x-hidden snap-x snap-mandatory" @scroll="handleScroll">
                <div v-for="projet in listProjets" :key="projet.id" class="w-full flex-none snap-center px-4">
                    <div class="bg-white dark:bg-black rounded-2xl shadow-md mx-auto max-w-4xl  lg:grid lg:grid-cols-2">
                        <div>
                            <img :src="pb.getFileUrl(projet, projet.image1)" :alt="projet.nom"
                                class="w-full h-64 object-cover rounded-t-2xl lg:hidden" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold text-black dark:text-white lg:text-2xl lg:rounded-2xl">
                                    {{ projet.nom }}
                                </h3>
                                <div class="space-y-8">
                                    <p class="text-black dark:text-white mt-2 lg:text-lg">
                                        {{ projet.description }}
                                    </p>
                                    <div class="display flex justify-between items-center">
                                        <p
                                            class="text-gray-low dark:text-white border border-gray-low rounded-xl py-1 px-3 lg:text-base lg:rounded-2xl">
                                            {{
                                            projet.competence1 }}</p>
                                        <p
                                            class="text-gray-low dark:text-white border border-gray-low rounded-xl py-1 px-3 lg:text-base lg:rounded-2xl">
                                            {{
                                            projet.competence2 }}</p>
                                        <p
                                            class="text-gray-low dark:text-white border border-gray-low rounded-xl py-1 px-3 lg:text-base lg:rounded-2xl">
                                            {{
                                            projet.competence3 }}</p>
                                    </div>
                                    <div class="hidden lg:grid lg:space-y-2">
                                        <p class="lg:text-lg dark:lg:text-white lg:text-black">Applications utilisées
                                        </p>
                                        <div class="lg:flex lg:items-center lg:space-x-6">
                                            <IconFigma />
                                            <IconVsCode />
                                            <IconGitHub v-show="isDark" />
                                            <IconGithubNoir v-show="!isDark" />
                                        </div>
                                    </div>
                                    <RouterLink :to="`/fr/projet/${projet.id}`"
                                        class="text-white dark:text-black flex items-center space-x-2 bg-black dark:bg-white rounded-2xl py-2 px-4 display justify-center mx-auto">
                                        <span>Voir plus</span>
                                    </RouterLink>
                                </div>
                            </div>
                        </div>
                        <div class="hidden lg:grid lg:grid-cols-2 gap-4 p-8">
                            <img :src="pb.getFileUrl(projet, projet.image1)" :alt="projet.nom"
                                class="w-full h-64 object-cover rounded-2xl lg:col-span-2 border border-black" />
                            <img :src="pb.getFileUrl(projet, projet.image2)" :alt="projet.nom"
                                class="w-full h-[134px] object-cover rounded-2xl lg:col-start-1 border border-black" />
                            <img :src="pb.getFileUrl(projet, projet.image3)" :alt="projet.nom"
                                class="w-full h-[134px] object-cover rounded-2xl lg:col-start-2 border border-black" />
                        </div>
                    </div>
                </div>
            </div>

            <button @click="prevSlide"
                class="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 dark:bg-white/50 text-white p-2 rounded-r">
                <IconFleche v-show="!isDark" class="rotate-180" />
                <IconFLecheNoire v-show="isDark" class="rotate-180" />
            </button>
            <button @click="nextSlide"
                class="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 dark:bg-white/50 text-white p-2 rounded-l">
                <IconFleche v-show="!isDark" />
                <IconFLecheNoire v-show="isDark" />
            </button>

            <div class="progress-container">
                <div class="progress-bar" :style="{
                    marginLeft: `${100 - scrollProgress}%`,
                    width: `${scrollProgress}%`,
                    minWidth: '10px',
                    opacity: '1',
                    visibility: 'visible'
                }" />
            </div>

            <div class="flex justify-center gap-2 mt-4">
                <button v-for="(_, index) in listProjets" :key="index" @click="scrollToIndex(index)"
                    class="w-3 h-3 rounded-full"
                    :class="index === currentIndex ? 'bg-black dark:bg-white' : 'bg-gray-300 dark:bg-gray-700'" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.snap-x {
    scroll-snap-type: x mandatory;
}

.snap-center {
    scroll-snap-align: center;
}

.progress-container {
    position: relative;
    z-index: 50;
    margin-top: 1.5rem;
    width: 100%;
    height: 4px;
    background-color: #e5e7eb;
    border-radius: 9999px;
    overflow: hidden;
    direction: rtl;
}

.progress-bar {
    height: 100%;
    background-color: black;
    transition: all 0.3s ease-out;
    will-change: width, margin-left;
    direction: ltr;
}

.dark .progress-container {
    background-color: #374151;
}

.dark .progress-bar {
    background-color: white;
}
</style>