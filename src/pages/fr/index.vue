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
    import { useDark } from '@vueuse/core'
    import { ref } from 'vue';
    
    const isDark = useDark({
        selector: 'html',
        attribute: 'class',
        valueDark: 'dark',
        valueLight: 'light',
    })   

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
                <IconScroll v-show="!isDark" class="display flex justify-center pt-24 relative z-30" />
                <IconScrollBlanc v-show="isDark" class="display flex justify-center pt-24 relative z-30" />
            </div>
        </section>
        <section>
            <div class="text-center border-b border-b-white dark:border-b-black mx-8 pb-2">
                <p class="font-mono dark:text-black">PRINCIPAUX</p>
                <h2 class="text-5xl font-sans dark:text-black">PROJETS</h2>
            </div>
            <div>
                <CardProjets />
            </div>
        </section>
        <section>
            <div class="text-center border-b border-b-white dark:border-b-black mx-8 pb-2">
                <p class="font-mono dark:text-black">MES</p>
                <h2 class="text-4xl font-sans dark:text-black">COMPÉTENCES</h2>
            </div>
            <div class="px-8 py-6 grid grid-cols-2 grid-rows-2 gap-4">
                <div class="col-span-1 row-span-2 bg-gray-100 p-4">
                    <div class="flex justify-start">
                        <h2 class="font-number dark:text-black">01</h2>
                        <h2 class="font-number ml-2 dark:text-black">Dev</h2>
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
                        <h2 class="font-number dark:text-black">02</h2>
                        <h2 class="font-number ml-2 dark:text-black">Design</h2>
                    </div>
                    <div class="grid grid-cols-2 gap-y-10 pt-4 mt-4">
                        <IconFigma />
                        <IconPhotoshop />
                        <IconIllustrator />
                    </div>
                </div>
                <div class="col-span-1 row-span-1 bg-gray-100 p-4">
                    <div class="flex justify-start">
                        <h2 class="font-number dark:text-black">03</h2>
                        <h2 class="font-number ml-2 dark:text-black">Gestion</h2>
                    </div>
                    <div class="grid grid-cols-2 pt-4 mt-4">
                        <IconTrello />
                        <IconGoogleDrive />
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-white dark:bg-black py-7">
            <div class="px-5 space-y-2">
                <h2 class="text-black dark:text-white font-sans font-bold ">Contactez-moi</h2>
                <div>
                    <p class="text-black dark:text-white w-1/2%">Si vous avez besoin de me poser des</p>
                    <p class="text-black dark:text-white w-1/2%">questions ou avoir plus d'informations,</p>
                    <p class="text-black dark:text-white w-1/2%">remplissez ce formulaire.</p>
                </div>
                <form @submit.prevent="submitForm" class="grid grid-cols-2 gap-6 py-6 ">
                    <div class="space-y-6">
                        <div>
                            <label for="name" class="block text-sm font-medium text-black dark:text-white"></label>
                            <input type="text" id="name" name="name" v-model="name" placeholder="Nom"
                                class="w-full h-12 bg-white dark:bg-black text-black dark:text-white border border-black dark:border-white shadow-sm p-2" />
                        </div>
                        <div>
                            <label for="email"
                                class="block text-sm font-medium text-black dark:text-white"></label>
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
                        <label for="message"
                            class="block text-sm font-medium text-black dark:text-white"></label>
                        <textarea id="message" name="message" v-model="message" placeholder="Message" rows="8"
                            class="w-full bg-white dark:bg-black text-black dark:text-white border border-black dark:border-white shadow-sm pl-2 mb-2"></textarea>
                    </div>
                    <div class="col-span-2 flex justify-end items-center">
                        <button type="submit" class="text-black dark:text-white text-lg font-bold">Envoyer</button>
                        <IconFleche />
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