<script setup lang="ts">
import { ref, onMounted } from 'vue'
import IconFleche from './icons/IconFleche.vue'
import IconFLecheNoire from './icons/IconFLecheNoire.vue'
import { useDark } from '@vueuse/core'
import { pb } from '@/backend'
import type { ProjetsResponse } from '@/pocketbase-types'
import { RouterLink } from 'vue-router'

const isDark = useDark()
const projets = ref<ProjetsResponse[]>([])

onMounted(async () => {
    try {
        // Correction du nom de la collection avec majuscule
        const records = await pb.collection('Projets').getFullList<ProjetsResponse>({
            sort: '-created',
            requestKey: 'projets-list' // Ajout d'une clé unique
        })
        projets.value = records
        console.log('Projets chargés:', records)
    } catch (error: any) {
        console.error('Error loading projects:', {
            message: error.message,
            data: error.data,
            status: error.status
        })
    }
})
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        <div v-for="projet in projets" :key="projet.id" class="bg-white dark:bg-black rounded-3xl shadow-md">
                <img :src="pb.getFileUrl(projet, projet.image1)" :alt="projet.nom"
                    class="w-full h-48 object-cover rounded-t-3xl border-b-black border-b dark:border-b-white"/>
                <div class="space-y-4 p-6">
                    <h3 class="text-xl font-bold text-black dark:text-white">{{ projet.nom }}</h3>
                    <p class="text-black dark:text-white">{{ projet.description }}</p>
                    <div class="display flex justify-between items-center">
                        <p class="text-gray-low dark:text-white border border-gray-low rounded-xl py-1 px-3">{{ projet.competence1 }}</p>
                        <p class="text-gray-low dark:text-white border border-gray-low rounded-xl py-1 px-3">{{ projet.competence2 }}</p>
                        <p class="text-gray-low dark:text-white border border-gray-low rounded-xl py-1 px-3">{{ projet.competence3 }}</p>
                    </div>
                    <RouterLink :to="`/fr/projet/${projet.id}`"
                        class="text-white dark:text-black flex items-center space-x-2 bg-black dark:bg-white rounded-2xl py-2 px-4 display justify-center mx-auto">
                        <span>Voir plus</span>
                    </RouterLink>
                </div>
        </div>
    </div>
</template>