<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
    import IconPlus from '@/components/icons/IconPlus.vue';
</script>

<template>
    <div class="bg-black dark:bg-white text-white dark:text-black">
        <section class="space-y-32 py-32">
            <div class="text-center space-y-6">
                <h2 class="font-body text-3xl">g a b r i e l</h2>
                <h2 class="font-body text-3xl">m o r e a u</h2>
                <h3 class="font-body text-xl pt-2">Développeur Web</h3>
            </div>
            <div class="display flex flex-row justify-center items-center space-x-2">
                <IconPlus />
                <p class="text-base">En savoir plus</p>
            </div>
        </section>
    </div>
</template>