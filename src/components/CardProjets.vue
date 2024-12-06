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
        <div v-for="projet in projets" :key="projet.id" class="bg-white dark:bg-black p-6 rounded-lg shadow-md">
            <div class="space-y-4">
                <img :src="pb.getFileUrl(projet, projet.image1)" :alt="projet.nom"
                    class="w-full h-48 object-cover rounded" />
                <h3 class="text-xl font-bold text-black dark:text-white">{{ projet.nom }}</h3>
                <p class="text-gray-600 dark:text-gray-300">{{ projet.description }}</p>
                <RouterLink :to="`/fr/projet/${projet.id}`"
                    class="text-black dark:text-white flex items-center space-x-2">
                    <span>Voir plus</span>
                    <IconFleche v-if="!isDark" />
                    <IconFLecheNoire v-else />
                </RouterLink>
            </div>
        </div>
    </div>
</template>