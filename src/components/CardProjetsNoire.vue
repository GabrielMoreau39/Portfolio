<script setup lang="ts">
    import { pb } from '@/backend'
    import type { ProjetsResponse } from '@/pocketbase-types'
    import { ref } from 'vue'
    import { RouterLink } from 'vue-router'

    const listProjets = ref<ProjetsResponse[]>([])

    const records = await pb.collection('Projets').getFullList<ProjetsResponse>()
    listProjets.value = records
</script>

<template>
    <div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="projet in listProjets" :key="projet.id"
                class="bg-white dark:bg-black rounded-xl shadow-md overflow-hidden">
                <img :src="pb.getFileUrl(projet, projet.image1)" :alt="projet.nom" class="w-full h-48 object-cover border border-white dark:border-black border-b-black dark:border-b-white rounded-t-xl" />
                <div class="p-4">
                    <h3 class="text-xl font-bold text-black dark:text-white">
                        {{ projet.nom }}
                    </h3>
                    <p class="text-black dark:text-white mt-2">
                        {{ projet.description }}
                    </p>
                    <RouterLink :to="`/fr/projet/${projet.id}`"
                        class="text-white dark:text-black bg-black dark:bg-white py-2 text-center justify-center flex display items-center rounded-lg mt-4">
                        <span>Voir plus</span>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>