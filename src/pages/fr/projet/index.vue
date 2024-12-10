<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { pb } from '@/backend'
import LogInOut from '@/components/LogInOut.vue'
import type { ProjetsResponse } from '@/pocketbase-types'

const listProjets = ref<ProjetsResponse[]>([])

onMounted(async () => {
    try {
        const records = await pb.collection('Projets').getFullList<ProjetsResponse>()
        listProjets.value = records
        console.log('Projets chargés:', records)
    } catch (error) {
        console.error('Erreur:', error)
    }
})
</script>

<template>
    <div class="bg-black dark:bg-white min-h-screen">
        <LogInOut />
        <div class="container mx-auto px-4 py-8">
            <h1 class="text-4xl font-bold text-white dark:text-black mb-8">Mes Projets</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="unProjet in listProjets" :key="unProjet.id"
                    class="bg-white dark:bg-black rounded-lg shadow-md p-6">
                    <img :src="pb.getFileUrl(unProjet, unProjet.image1)" :alt="unProjet.nom"
                        class="w-full h-48 object-cover rounded-lg mb-4" />
                    <h2 class="text-xl font-bold text-black dark:text-white mb-2">{{ unProjet.nom }}</h2>
                    <p class="text-gray-600 dark:text-gray-300">{{ unProjet.description }}</p>
                    <RouterLink :to="`/fr/projet/${unProjet.id}`"
                        class="mt-4 inline-flex items-center text-black dark:text-white">
                        Voir plus
                        <span class="ml-2">→</span>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>