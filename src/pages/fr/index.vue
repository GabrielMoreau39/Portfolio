<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
    import IconAlpineJs from '@/components/icons/IconAlpineJs.vue';
    import IconCss from '@/components/icons/IconCss.vue';
    import IconFigma from '@/components/icons/IconFigma.vue';
    import IconGitHub from '@/components/icons/IconGitHub.vue';
    import IconGoogleDrive from '@/components/icons/IconGoogleDrive.vue';
    import IconHtml from '@/components/icons/IconHtml.vue';
    import IconIllustrator from '@/components/icons/IconIllustrator.vue';
    import IconJs from '@/components/icons/IconJs.vue';
    import IconPhotoshop from '@/components/icons/IconPhotoshop.vue';
    import IconPlus from '@/components/icons/IconPlus.vue';
    import IconScroll from '@/components/icons/IconScroll.vue';
    import IconScrollBlanc from '@/components/icons/IconScrollBlanc.vue';
    import IconTailwind from '@/components/icons/IconTailwind.vue';
    import IconTrello from '@/components/icons/IconTrello.vue';
    import IconTypescript from '@/components/icons/IconTypescript.vue';
    import IconVsCode from '@/components/icons/IconVsCode.vue';
    import IconVue from '@/components/icons/IconVue.vue';
    import IconWordpress from '@/components/icons/IconWordpress.vue';
    import { useDark, useToggle } from '@vueuse/core'
    
    const isDark = useDark({
        selector: 'html',
        attribute: 'class',
        valueDark: 'dark',
        valueLight: 'light',
    })   
    const toggleDark = useToggle(isDark)
</script>

<template>
    <div class="bg-black dark:bg-white text-white dark:text-black">
        <section class="space-y-28 py-28">
            <div>
                <div class="grille relative z-10 grid pt-4">
                    <div v-show="!isDark" class="element place-self-center"></div>
                    <div v-show="isDark" class="element2 place-self-center"></div>
                </div>
                <div class="text-center space-y-6">
                    <h2 class="font-body text-3xl dark:text-black">g a b r i e l</h2>
                    <h2 class="font-body text-3xl dark:text-black">m o r e a u</h2>
                    <h3 class="font-body text-xl pt-2 dark:text-black">Développeur Web</h3>
                </div>
                <div class="display flex flex-row justify-center items-center space-x-2 pt-24">
                    <IconPlus class="relative z-30" />
                    <p class="text-base dark:text-black">En savoir plus</p>
                </div>
                <IconScroll v-show="!isDark" class="display flex justify-center pt-24 relative z-30"/>
                <IconScrollBlanc v-show="isDark" class="display flex justify-center pt-24 relative z-30"/>
            </div>
        </section>
        <section>
            <div class="text-center border-b border-b-white mx-8 pb-2">
                <p class="font-mono">PRINCIPAUX</p>
                <h2 class="text-5xl font-sans">PROJETS</h2>
            </div>
            <div>
                <CardProjets />
            </div>
        </section>
        <section>
            <div class="text-center border-b border-b-white mx-8 pb-2">
                <p class="font-mono">MES</p>
                <h2 class="text-4xl font-sans">COMPÉTENCES</h2>
            </div>
            <div class="px-8 py-6 grid grid-cols-2 grid-rows-2 gap-4">
                <div class="col-span-1 row-span-2 bg-gray-100 p-4">
                    <div class="flex justify-start">
                        <h2 class="font-number">01</h2>
                        <h2 class="font-number ml-2">Dev</h2>
                    </div>
                    <div class="grid grid-cols-2 gap-y-10 pt-4 mt-4">
                        <IconVue />
                        <IconTailwind />
                        <IconAlpineJs />
                        <IconJs />
                        <IconCss />
                        <IconHtml />
                        <IconTypescript />
                        <IconVsCode />
                        <IconGitHub />
                        <IconWordpress />
                    </div>
                </div>
                <div class="col-span-1 row-span-1 bg-gray-100 p-4">
                    <div class="flex justify-start">
                        <h2 class="font-number">02</h2>
                        <h2 class="font-number ml-2">Design</h2>
                    </div>
                    <div class="grid grid-cols-2 gap-y-10 pt-4 mt-4">
                        <IconFigma />
                        <IconPhotoshop />
                        <IconIllustrator />
                    </div>
                </div>
                <div class="col-span-1 row-span-1 bg-gray-100 p-4">
                    <div class="flex justify-start">
                        <h2 class="font-number">03</h2>
                        <h2 class="font-number ml-2">Gestion</h2>
                    </div>
                    <div class="grid grid-cols-2 pt-4 mt-4">
                        <IconTrello />
                        <IconGoogleDrive />
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-white py-7">
            <div class="px-5 space-y-2">
                <h2 class="text-black font-sans font-bold ">Contactez-moi</h2>
                <div>
                    <p class="text-black w-1/2%">Si vous avez besoin de me poser des</p>
                    <p class="text-black w-1/2%">questions ou avoir plus d'informations,</p>
                    <p class="text-black w-1/2%">remplissez ce formulaire.</p>
                </div>
            </div>
        </section>
    </div>
</template> 

<style>
.grille {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    mask-size: 20px 20px;
    mask-image: linear-gradient(to right, gray 3px, transparent 1px),
                linear-gradient(to bottom, gray 3px, transparent 1px);
    pointer-events: none;
}

.element2 {
    width: 50%;
    height: 38%;
    background-color: rgb(207, 207, 207);
    filter: blur(140px);
    z-index: -1;
    pointer-events: auto;
}

.element {
    width: 50%;
    height: 38%;
    background-color: rgb(107, 107, 107);
    filter: blur(140px);
    z-index: -1;
    pointer-events: auto;
}

</style>