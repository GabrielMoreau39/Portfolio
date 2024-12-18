<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
    import CardProjetsNoire from '@/components/CardProjetsNoire.vue'
    import { useRoute } from 'vue-router/auto'
    import type { ProjetsResponse } from '@/pocketbase-types'; 
    import { ref } from 'vue';

    const route = useRoute("/fr/projet/")
    const unProjet = ref<ProjetsResponse | null>(null)
</script>
<template>
    <div>
        <section>
            <div class="bg-black dark:bg-white lg:px-36 lg:py-20 space-y-6 py-6">
                <h1 class="text-white dark:text-black lg:text-2xl">Mes Projets</h1>
                <CardProjetsNoire />
            </div>
        </section>
    </div>
</template>
