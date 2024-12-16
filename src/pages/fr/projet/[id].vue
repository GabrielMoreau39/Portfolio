<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
    import { useRoute } from 'vue-router'
    import { ref, onMounted } from 'vue'
    import { pb } from '@/backend'
    import type { ProjetsResponse } from '@/pocketbase-types'
    import { useDark } from '@vueuse/core'
    import IconFigma from '@/components/icons/IconFigma.vue';
    import IconGitHub from '@/components/icons/IconGitHub.vue';
    import IconGithubNoir from '@/components/icons/IconGithubNoir.vue';
    import CardProjets from '@/components/CardProjets.vue'
    
    const isDark = useDark({
        selector: 'html',
        attribute: 'class',
        valueDark: 'dark',
        valueLight: 'light',
    })   

    const route = useRoute("/fr/projet/[id]")
    const unProjet = ref<ProjetsResponse | null>(null)

    onMounted(async () => {
        const id = route.params.id
        unProjet.value = await pb.collection('projets').getOne(id)
    })
    
</script>

<template>
    <section v-if="unProjet" class="p-8 space-y-8 bg-black dark:bg-white">
        <h2 class="font-bold text-white dark:text-black">{{ unProjet.nom }}</h2>
        <p class="text-white dark:text-black">{{ unProjet.text1 }}</p>
        <img :src="pb.getFileUrl(unProjet, unProjet.image1)" :alt="unProjet.nom"
            class="w-full h-64 object-cover rounded my-4" />

        <p class="text-white dark:text-black">{{ unProjet.text2 }}</p>
        <img :src="pb.getFileUrl(unProjet, unProjet.image2)" :alt="unProjet.nom"
            class="w-full h-64 object-cover rounded my-4" />

        <p class="text-white dark:text-black">{{ unProjet.text3 }}</p>
        <img :src="pb.getFileUrl(unProjet, unProjet.image3)" :alt="unProjet.nom"
            class="w-full h-64 object-cover rounded my-4" />
    </section>
    <section class="p-8 space-y-8 bg-black dark:bg-white">
        <h2 class="text-white dark:text-black">Liens</h2>
        <div class="space-y-12 py-2">
            <div class="display flex space-x-6 items-center justify-center">
                <IconFigma />
                <a :href="unProjet?.Lien1">
                    <p class="text-base underline text-white dark:text-black">{{ unProjet?.NomLien1 }}</p>
                </a>
            </div>
            <div class="display flex space-x-6 items-center justify-center">
                <IconGitHub v-show="!isDark" />
                <IconGithubNoir v-show="isDark" />
                <a :href="unProjet?.Lien2">
                    <p class="text-base underline text-white dark:text-black">{{ unProjet?.NomLien2 }}</p>
                </a>
            </div>
            <div class="display flex space-x-6 items-center justify-center">
                <img src="/public/img/IconAldoExpo.png" alt="Logo AldoExpo" class="size-1/12">
                <a :href="unProjet?.Lien3">
                    <p class="text-base underline text-white dark:text-black">{{ unProjet?.NomLien3 }}</p>
                </a>
            </div>
        </div>
    </section>
    <section>
        <div class="bg-white dark:bg-black p-6 space-y-6">
            <h1 class="text-black dark:text-white">Autres projets</h1>
            <CardProjets />
        </div>
    </section>
</template>