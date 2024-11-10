<script lang="ts">
    import { pb } from '@/backend'
    import { RouterLink } from 'vue-router/auto'
    import type { ProjetsResponse } from '@/pocketbase-types';
    import { defineProps } from 'vue';
    import ImgPb from './icons/ImgPb.vue';

    const props = defineProps<ProjetsResponse<any>>()
</script>

<template>
    <card class="bg-white">
        <RouterLink to="">
            <picture class="border-b border-b-black">
                <ImgPb
                    :record="props"
                    :filename="props.image1"
                    alt="image 1 du projet Aldo Expo"
                    class="rounded-t-lg"
                />
            </picture>
        </RouterLink>
        <h3 class="text-black">{{ props.nom }}</h3>
        <p class="text-black">{{ props.description }}</p>
        <div class="display flex justify-center items-center space-x-2">
            <p class="border py-2 px-4 rounded-lg border-black text-black">{{ props.competence1 }}</p>
            <p class="border py-2 px-4 rounded-lg border-black text-black">{{ props.competence2 }}</p>
            <p class="border py-2 px-4 rounded-lg border-black text-black">{{ props.competence3 }}</p>
        </div>
        <RouterLink to="">
            <button class="bg-black rounded-lg py-2 px-4 border-black text-black">
                Voir le projet
            </button>
        </RouterLink>
    </card>
</template>