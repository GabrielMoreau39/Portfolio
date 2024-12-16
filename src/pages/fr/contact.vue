<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
    import IconMailContact from '@/components/icons/IconMailContact.vue';
    import IconGithubContact from '@/components/icons/IconGithubContact.vue';
    import IconLinkedInContact from '@/components/icons/IconLinkedInContact.vue';
    import IconBehanceContact from '@/components/icons/IconBehanceContact.vue';
    import IconGithubContactNoire from '@/components/icons/IconGithubContactNoire.vue';

    const WEB3FORMS_ACCESS_KEY = "24847f4a-81d2-4b85-9167-fcb963166166";

    import { ref } from 'vue';
    import { pb } from '@/backend'
    import IconFleche from '@/components/icons/IconFleche.vue';
    import IconFLecheNoire from '@/components/icons/IconFLecheNoire.vue';
    import { useDark } from '@vueuse/core'
    import IconMailContactNoire from '@/components/icons/IconMailContactNoire.vue';
    import IconLinkedInContactNoire from '@/components/icons/IconLinkedInContactNoire.vue';
    import IconBehanceContactNoire from '@/components/icons/IconBehanceContactNoire.vue';

    const isDark = useDark({
        selector: 'html',
        attribute: 'class',
        valueDark: 'dark',
        valueLight: 'light',
    })  

    const name = ref('');
    const email = ref('');
    const message = ref('');

    async function submitForm() {
        try {
            // Pour mettre dans Pocketbase
            const response = await pb.collection('contacts').create({
                name: name.value,
                email: email.value,
                message: message.value,
            })
            console.log('Form submitted:', response)

            // Pour recevoir sur mon mail
            const emailResponse = await fetch("https://api.web3forms.com/submit", {
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
            })

            const emailResult = await emailResponse.json()
            if (emailResult.success) {
                console.log('Email sent:', emailResult)
            } else {
                console.error('Erreur lors de l\'envoi de l\'email:', emailResult)
            }

            // Pour réinitialiser les réponses
            name.value = ''
            email.value = ''
            message.value = ''
            alert('Votre réponse a bien été envoyée')
        } catch (error) {
            console.error('Erreur lors de l\'envoi du formulaire:', error)
        }
    }
</script>

<template>
    <div class="px-7 py-10 bg-black dark:bg-white lg:p-16">
        <section>
            <h2 class="text-white dark:text-black lg:text-3xl">Où me trouver ?</h2>
            <div
                class="space-y-10 my-10 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:items-center lg:justify-center lg:mx-auto">
                <div class="display flex flex-row items-center space-x-4 ">
                    <div class="flex">
                        <IconMailContact v-show="!isDark" />
                        <IconMailContactNoire v-show="isDark" />
                    </div>
                    <p class="text-white dark:text-black underline text-sm lg:text-xl">
                        gabrielmoreau@orange.fr
                    </p>
                </div>
                <div class="display flex flex-row items-center space-x-4 ">
                    <div class="flex">
                        <IconGithubContact v-show="!isDark" />
                        <IconGithubContactNoire v-show="isDark" />
                    </div>
                    <a href="https://github.com/GabrielMoreau39"
                        class="text-white dark:text-black underline text-sm lg:text-xl">
                        GabrielMoreau39
                    </a>
                </div>
                <div class="display flex flex-row items-center space-x-4 ">
                    <div class="flex">
                        <IconLinkedInContact v-show="!isDark" />
                        <IconLinkedInContactNoire v-show="isDark" />
                    </div>
                    <a href="https://www.linkedin.com/in/gabriel-moreau-71b29829b/"
                        class="text-white dark:text-black underline text-sm lg:text-xl">
                        Gabriel Moreau
                    </a>
                </div>
                <div class="display flex flex-row items-center space-x-4 ">
                    <div class="flex">
                        <IconBehanceContact v-show="!isDark" />
                        <IconBehanceContactNoire v-show="isDark" />
                    </div>
                    <a href="https://www.behance.net/gabrielmoreau2"
                        class="text-white dark:text-black underline text-sm lg:text-xl">
                        Gabriel Moreau
                    </a>
                </div>
            </div>
        </section>
        <section>
            <h2 class="text-2xl">ou contactez moi directement</h2>
            <form @submit.prevent="submitForm" class="space-y-6 lg:space-y-0 py-6 lg:grid lg:grid-cols-2 lg:gap-6">
                <div class="lg:col-start-1">
                    <label for="name" class="block text-sm font-medium text-white dark:text-black lg:text-xl">Nom</label>
                    <input type="text" id="name" name="name" v-model="name" placeholder="Moreau"
                        class="mt-1 w-full h-12 lg:h-16 pl-2 bg-black dark:bg-white text-white dark:text-black border border-[#E7E7E7] shadow-sm" />
                </div>
                <div class="lg:col-start-2 lg:row-span-2">
                    <label for="message" class="block text-sm font-medium text-white dark:text-black lg:text-xl">Message</label>
                    <textarea id="message" name="message" v-model="message" rows="5"
                        placeholder="Tappez votre message ici"
                        class="mt-1 w-full h-[calc(100%-2rem)] pt-2 pl-2 bg-black dark:bg-white text-white dark:text-black border border-[#E7E7E7] shadow-sm"></textarea>
                </div>
                <div class="lg:col-start-1">
                    <label for="email" class="block text-sm font-medium text-white dark:text-black lg:text-xl">Email</label>
                    <input type="email" id="email" name="email" v-model="email" placeholder="Gabriel"
                        class="mt-1 w-full h-12 lg:h-16 pl-2 bg-black dark:bg-white text-white dark:text-black border border-[#E7E7E7] shadow-sm" />
                </div>
                <div class="lg:col-start-2 flex justify-end items-center">
                    <button type="submit"
                        class="text-white dark:text-black text-lg font-bold flex justify-end items-center">Envoyer
                        <IconFleche v-show="!isDark" />
                        <IconFLecheNoire v-show="isDark" />
                    </button>
                </div>
            </form>
        </section>
    </div>
</template>

