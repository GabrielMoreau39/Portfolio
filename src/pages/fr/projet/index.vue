<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
    import { pb } from '@/backend'
    import LogInOut from '@/components/LogInOut.vue';

    const listProjets = await pb.collection('projets').getFullList()
    console.log(listProjets)
</script>

<template>
    <div>
        <LogInOut />
        <ul>
            <li v-for="unProjet in listProjets" :key="unProjet.id">{{ unProjet.nom }}</li>
        </ul>
    </div>
</template>