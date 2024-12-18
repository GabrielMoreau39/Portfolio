<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
    import IconAlpineJs from '@/components/icons/IconAlpineJs.vue';
    import IconCss from '@/components/icons/IconCss.vue';
    import IconFigma from '@/components/icons/IconFigma.vue';
    import IconGitHub from '@/components/icons/IconGitHub.vue';
    import IconGithubNoir from '@/components/icons/IconGithubNoir.vue';
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
    import IconFleche from '@/components/icons/IconFleche.vue';
    import { useDark } from '@vueuse/core'
    import { ref, onMounted } from 'vue';
    import IconFLecheNoire from '@/components/icons/IconFLecheNoire.vue';
    import IconBehance from '@/components/icons/IconBehance.vue';
    import IconBehanceNoir from '@/components/icons/IconBehanceNoir.vue';
    import IconInstagram from '@/components/icons/IconInstagram.vue';
    import IconInstagramNoir from '@/components/icons/IconInstagramNoir.vue';
    import IconLikedInNoir from '@/components/icons/IconLikedInNoir.vue';
    import IconLinkedIn from '@/components/icons/IconLinkedIn.vue';

    //Dark/Light mode

    const isDark = useDark({
        selector: 'html',
        attribute: 'class',
        valueDark: 'dark',
        valueLight: 'light',
    })   

    //Formulaire de contact

    const WEB3FORMS_ACCESS_KEY = "24847f4a-81d2-4b85-9167-fcb963166166";

    const name = ref("");
    const email = ref("");
    const message = ref("");
    const phone = ref("");  
    
    async function submitForm() {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: WEB3FORMS_ACCESS_KEY,
                name: name.value,
                email: email.value,
                message: message.value,
            }),
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
        }
    }

    //Carousel projets

    import { pb } from '@/backend';
    import type { ProjetsResponse } from '@/pocketbase-types';
    import CarouselProjets from '@/components/CarouselProjets.vue';
    
    const listProjets = ref<ProjetsResponse[]>([]);

    onMounted(async () => {
        try {
            const records = await pb.collection('Projets').getFullList<ProjetsResponse>()
            listProjets.value = records
            console.log('Projets chargés:', records)
        } catch (error) {
            console.error('Erreur:', error)
        }
    })

    //Scroll du Bouton

    const scrollToNextSection = () => {
        const currentSection = document.querySelector('.element')?.closest('section')
        const nextSection = currentSection?.nextElementSibling
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' })
        }
    }
</script>

<template>
    <div class="bg-black dark:bg-white text-white dark:text-black">
        <section class="space-y-28 py-28 lg:pb-24">
            <div>
                <div class="grille relative z-10 grid pt-4">
                    <div v-show="!isDark" class="element place-self-center"></div>
                    <div v-show="isDark" class="element2 place-self-center"></div>
                </div>
                <div class="text-center">
                    <div
                        class="flex flex-col lg:flex-row items-center justify-center lg:space-x-10 space-y-6 lg:space-y-0">
                        <h2 class="font-body text-3xl dark:text-black z-20 relative lg:text-5xl">g a b r i e l</h2>
                        <h2 class="font-body text-3xl dark:text-black z-20 relative lg:text-5xl">m o r e a u</h2>
                    </div>
                    <h3 class="font-body text-xl pt-2 lg:pt-8 dark:text-black z-20 relative lg:text-3xl">Développeur Web
                    </h3>
                </div>
                <RouterLink to="/fr/about">
                    <div class="display flex flex-row justify-center items-center space-x-2 lg:space-x-4 pt-24">
                        <IconPlus class="relative z-30" />
                        <p class="text-base lg:text-xl dark:text-black z-20 relative">En savoir plus</p>
                    </div>
                </RouterLink>
                <div class="lg:grid lg:justify-end lg:mr-20 lg:mt-16">
                    <p
                        class="text-xl hidden lg:flex lg:display lg:rotate-90 lg:items-center lg:justify-center dark:text-black">
                        Scroll Down</p>
                    <div @click="scrollToNextSection" class="cursor-pointer">
                        <IconScroll v-show="!isDark" class="display flex justify-center pt-24 lg:pt-16 relative z-30" />
                        <IconScrollBlanc v-show="isDark"
                            class="display flex justify-center pt-24 lg:pt-16 relative z-30" />
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="text-center mx-auto border-b w-[350px] border-b-white dark:border-b-black pb-2 mb-2">
                <p class="font-mono dark:text-black lg:text-xl">PRINCIPAUX</p>
                <h2 class="text-5xl font-sans dark:text-black lg:text-6xl">PROJETS</h2>
            </div>
            <CarouselProjets />
        </section>
        <section>
            <div class="text-center mx-8 mt-8 pb-2">
                <p class="font-mono dark:text-black lg:text-lg">MES</p>
                <h2 class="text-4xl font-sans dark:text-black lg:text-5xl">COMPÉTENCES</h2>
            </div>
            <div class="px-8 py-6 grid grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-4 lg:gap-32 lg:mx-48">
                <div class="col-span-1 row-span-2 bg-gray-100 p-4">
                    <div class="flex justify-start items-center">
                        <h2 class="font-number dark:text-black lg:text-2xl">01</h2>
                        <h2 class="font-number ml-2 dark:text-black lg:text-2xl">Dev</h2>
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
                        <div>
                            <IconGitHub v-show="!isDark" />
                            <IconGithubNoir v-show="isDark" />
                        </div>
                        <IconWordpress />
                    </div>
                </div>
                <div class="col-span-1 row-span-1 bg-gray-100 p-4">
                    <div class="flex justify-start">
                        <h2 class="font-number dark:text-black lg:text-2xl">02</h2>
                        <h2 class="font-number ml-2 dark:text-black lg:text-2xl">Design</h2>
                    </div>
                    <div class="grid grid-cols-2 gap-y-10 pt-4 mt-4">
                        <IconFigma />
                        <IconPhotoshop />
                        <IconIllustrator />
                    </div>
                </div>
                <div class="col-span-1 row-span-1 bg-gray-100 p-4">
                    <div class="flex justify-start">
                        <h2 class="font-number dark:text-black lg:text-2xl">03</h2>
                        <h2 class="font-number ml-2 dark:text-black lg:text-2xl">Gestion</h2>
                    </div>
                    <div class="grid grid-cols-2 pt-4 mt-4">
                        <IconTrello />
                        <IconGoogleDrive />
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-white dark:bg-black py-7">
            <div class="px-5 lg:px-32 lg:pt-2 space-y-2 lg:grid lg:grid-cols-2">
                <div class="space-y-2">
                    <h2 class="text-black dark:text-white font-sans font-bold lg:text-2xl lg:pt-6">Contactez-moi</h2>
                    <div>
                        <p class="text-black dark:text-white w-1/2% lg:text-lg">Si vous avez besoin de me poser des</p>
                        <p class="text-black dark:text-white w-1/2% lg:text-lg">questions ou avoir plus d'informations,
                        </p>
                        <p class="text-black dark:text-white w-1/2% lg:text-lg">remplissez ce formulaire.</p>
                    </div>
                    <div class="lg:display lg:flex lg:justify-start lg:items-center lg:space-x-8 hidden lg:pt-4">
                        <div>
                            <a href="https://www.linkedin.com">
                                <IconLinkedIn v-show="isDark" />
                            </a>
                            <a href="https://www.linkedin.com">
                                <IconLikedInNoir v-show="!isDark" />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.behance.net">
                                <IconBehance v-show="isDark" />
                            </a>
                            <a href="https://www.behance.net">
                                <IconBehanceNoir v-show="!isDark" />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com">
                                <IconInstagram v-show="isDark" />
                            </a>
                            <a href="https://www.instagram.com">
                                <IconInstagramNoir v-show="!isDark" />
                            </a>
                        </div>
                        <div>
                            <a href="https://github.com">
                                <IconGitHub v-show="isDark" />
                            </a>
                            <a href="https://github.com">
                                <IconGithubNoir v-show="!isDark" />
                            </a>
                        </div>
                    </div>
                </div>
                <form @submit.prevent="submitForm" class="grid grid-cols-2 gap-6 py-6 lg:pb-0">
                    <div class="space-y-6">
                        <div>
                            <label for="name" class="block text-sm font-medium text-black dark:text-white"></label>
                            <input type="text" id="name" name="name" v-model="name" placeholder="Nom"
                                class="w-full h-12 bg-white dark:bg-black text-black dark:text-white border border-black dark:border-white shadow-sm p-2" />
                        </div>
                        <div>
                            <label for="email" class="block text-sm font-medium text-black dark:text-white"></label>
                            <input type="email" id="email" name="email" v-model="email" placeholder="Email"
                                class="w-full h-12 bg-white dark:bg-black text-black dark:text-white border border-black dark:border-white shadow-sm p-2" />
                        </div>
                        <div>
                            <label for="phone" class="block text-sm font-medium text-black dark:text-white"></label>
                            <input type="tel" id="phone" name="phone" v-model="phone" placeholder="Numéro de téléphone"
                                class="w-full h-12 bg-white dark:bg-black text-black dark:text-white border border-black dark:border-white shadow-sm p-2" />
                        </div>
                    </div>
                    <div>
                        <label for="message" class="block text-sm font-medium text-black dark:text-white"></label>
                        <textarea id="message" name="message" v-model="message" placeholder="Message" rows="8"
                            class="w-full bg-white dark:bg-black text-black dark:text-white border border-black dark:border-white shadow-sm pl-2 mb-2"></textarea>
                    </div>
                    <div class="col-span-2 flex justify-end items-center">
                        <button type="submit" class="text-black dark:text-white text-lg font-bold">Envoyer</button>
                        <IconFleche v-show="isDark" />
                        <IconFLecheNoire v-show="!isDark" />
                    </div>
                </form>
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
    background-color: rgb(215, 215, 215);
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