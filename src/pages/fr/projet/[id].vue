<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
    import { useRoute } from 'vue-router'
    import { ref, onMounted } from 'vue'
    import { pb } from '@/backend'
    import type { ProjetsResponse } from '@/pocketbase-types'
    
    const route = useRoute()
    const unProjet = ref<ProjetsResponse | null>(null)
    
    onMounted(async () => {
        try {
            const id = route.params.id as string
            unProjet.value = await pb.collection('Projets').getOne(id)
        } catch (error) {
            console.error('Erreur lors de la récupération du projet:', error)
        }
    })
</script>

<template>
    <div v-if="unProjet" class="p-8">
        <h1 class="text-2xl font-bold text-black dark:text-white">{{ unProjet.nom }}</h1>
        <img :src="pb.getFileUrl(unProjet, unProjet.image1)" :alt="unProjet.nom"
            class="w-full h-64 object-cover rounded my-4" />
        <p class="text-black dark:text-white">{{ unProjet.description }}</p>
    </div>
    <div v-else class="p-8">
        <p>Chargement...</p>
    </div>
</template>