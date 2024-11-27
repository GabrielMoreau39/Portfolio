<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
    import IconMailContact from '@/components/icons/IconMailContact.vue';
    import IconGithubContact from '@/components/icons/IconGithubContact.vue';
    import IconLinkedInContact from '@/components/icons/IconLinkedInContact.vue';
    import IconBehanceContact from '@/components/icons/IconBehanceContact.vue';
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
        </section>
    </div>
</template>