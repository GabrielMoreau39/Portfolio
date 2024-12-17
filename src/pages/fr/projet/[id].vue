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
        <div class="space-y-8 lg:flex lg:items-center lg:justify-between lg:space-x-20 lg:mx-28">
            <div class="space-y-8">
                <h2 class="font-bold text-white dark:text-black text-2xl">{{ unProjet.nom }}</h2>
                <p class="text-white dark:text-black lg:text-lg">{{ unProjet.text1 }}</p>
            </div>
            <img :src="pb.getFileUrl(unProjet, unProjet.image1)" :alt="unProjet.nom"
                class="w-full h-64 lg:h-auto lg:w-1/3 object-cover rounded my-4" />/
        </div>
        <div class="space-y-8 lg:mx-28 lg:flex lg:items-center lg:justify-between lg:space-x-20">
            <img :src="pb.getFileUrl(unProjet, unProjet.image2)" :alt="unProjet.nom"
                class="hidden lg:h-auto lg:object-cover lg:rounded lg:my-4 lg:flex lg:w-1/3" />
            <p class="text-white dark:text-black lg:text-lg">{{ unProjet.text2 }}</p>
            <img :src="pb.getFileUrl(unProjet, unProjet.image2)" :alt="unProjet.nom"
                class="w-full h-64 object-cover rounded my-4 lg:hidden" />
        </div>
        <div class="space-y-8 lg:mx-28 lg:flex lg:items-center lg:justify-between lg:space-x-20">
            <p class="text-white dark:text-black lg:text-lg">{{ unProjet.text3 }}</p>
            <img :src="pb.getFileUrl(unProjet, unProjet.image3)" :alt="unProjet.nom"
                class="w-full h-64 object-cover rounded my-4" />
        </div>
    </section>
    <section class="p-8 space-y-8 bg-black dark:bg-white">
        <h2 class="text-white dark:text-black lg:text-2xl lg:mx-28">Liens</h2>
        <div class="space-y-12 lg:space-y-0 lg:pt-6 lg:pb-12 py-2 lg:flex lg:items-center lg:justify-between lg:mx-36">
            <div class="display flex space-x-8 items-center justify-center mx-auto>">
                <IconFigma />
                <a :href="unProjet?.Lien1">
                    <p class="text-base underline text-white dark:text-black lg:text-lg">{{ unProjet?.NomLien1 }}</p>
                </a>
            </div>
            <div class="display flex space-x-8 items-center justify-center">
                <IconGitHub v-show="!isDark" />
                <IconGithubNoir v-show="isDark" />
                <a :href="unProjet?.Lien2">
                    <p class="text-base underline text-white dark:text-black lg:text-lg">{{ unProjet?.NomLien2 }}</p>
                </a>
            </div>
            <div class="display flex space-x-8 items-center justify-center">
                <img src="/public/img/IconAldoExpo.png" alt="Logo AldoExpo" class="size-1/12 lg:size-1/5">
                <a :href="unProjet?.Lien3">
                    <p class="text-base underline text-white dark:text-black lg:text-lg">{{ unProjet?.NomLien3 }}</p>
                </a>
            </div>
        </div>
    </section>
    <section>
        <div class="bg-white dark:bg-black lg:px-36 lg:py-20 space-y-6 mx-4 py-6">
            <h1 class="text-black dark:text-white lg:text-2xl">Autres projets</h1>
            <CardProjets />
        </div>
    </section>
</template>