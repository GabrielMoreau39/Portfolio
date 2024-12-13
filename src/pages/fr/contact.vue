<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
    import IconMailContact from '@/components/icons/IconMailContact.vue';
    import IconGithubContact from '@/components/icons/IconGithubContact.vue';
    import IconLinkedInContact from '@/components/icons/IconLinkedInContact.vue';
    import IconBehanceContact from '@/components/icons/IconBehanceContact.vue';

    const WEB3FORMS_ACCESS_KEY = "24847f4a-81d2-4b85-9167-fcb963166166";

    import { ref } from 'vue';
    import IconFleche from '@/components/icons/IconFleche.vue';

    const name = ref("");
    const email = ref("");
    const message = ref("");

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
    <div class="px-7 py-10 bg-black dark:bg-white">
        <section>
            <h2 class="text-white dark:text-black">Où me trouver ?</h2>
            <div class="space-y-10 my-10">
                <div class="display flex flex-row items-center space-x-4">
                    <IconMailContact />
                    <p class="text-white dark:text-black underline text-sm">
                        gabrielmoreau@orange.fr
                    </p>
                </div>
                <div class="display flex flex-row items-center space-x-4">
                    <IconGithubContact />
                    <a href="https://github.com/GabrielMoreau39" class="text-white dark:text-black underline text-sm">
                        GabrielMoreau39
                    </a>
                </div>
                <div class="display flex flex-row items-center space-x-4">
                    <IconLinkedInContact />
                    <a href="https://www.linkedin.com/in/gabriel-moreau-71b29829b/"
                        class="text-white dark:text-black underline text-sm">
                        Gabriel Moreau
                    </a>
                </div>
                <div class="display flex flex-row items-center space-x-4">
                    <IconBehanceContact />
                    <a href="https://www.behance.net/gabrielmoreau2"
                        class="text-white dark:text-black underline text-sm">
                        Gabriel Moreau
                    </a>
                </div>
            </div>
        </section>
        <section>
            <h2>ou contactez moi directement</h2>
            <form @submit.prevent="submitForm" class="space-y-6 py-6">
                <div>
                    <label for="name" class="block text-sm font-medium text-white dark:text-black">Nom</label>
                    <input type="text" id="name" name="name" v-model="name"
                        class="mt-1 w-full bg-black dark:bg-white text-white dark:text-black border border-[#E7E7E7] shadow-sm" />
                </div>
                <div>
                    <label for="email" class="block text-sm font-medium text-white dark:text-black">Email</label>
                    <input type="email" id="email" name="email" v-model="email"
                        class="mt-1 w-full bg-black dark:bg-white text-white dark:text-black border border-[#E7E7E7] shadow-sm" />
                </div>
                <div>
                    <label for="message" class="block text-sm font-medium text-white dark:text-black">Message</label>
                    <textarea id="message" name="message" v-model="message" rows="5"
                        class="mt-1 w-full bg-black dark:bg-white text-white dark:text-black border border-[#E7E7E7] shadow-sm"></textarea>
                </div>
                <div class="flex justify-end items-center">
                    <button type="submit" class="text-white text-lg font-bold">Envoyer
                    </button>
                    <IconFleche />
                </div>
            </form>
        </section>
    </div>
</template>