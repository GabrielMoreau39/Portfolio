<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
    import IconBehanceContact from '@/components/icons/IconBehanceContact.vue';
    import IconGithubContact from '@/components/icons/IconGithubContact.vue';
    import IconLinkedInContact from '@/components/icons/IconLinkedInContact.vue';
    import IconMailContact from '@/components/icons/IconMailContact.vue';
    
</script>

<template>
    <div class="px-7 py-10 bg-black dark:bg-white">
        <section>
            <h2 class="text-white dark:text-black">Où me trouver ?</h2>
            <div class="space-y-10 my-10">
                <div class="display flex flex-col">
                    <IconMailContact />
                    <p class="text-white dark:text-black underline text-sm">
                        gabrielmoreau@orange.fr
                    </p>
                </div>
                <div class="display flex flex-col">
                    <IconGithubContact />
                    <a href="https://github.com/GabrielMoreau39" class="text-white dark:text-black underline text-sm">
                        GabrielMoreau39
                    </a>
                </div>
                <div class="display flex flex-col">
                    <IconLinkedInContact />
                    <a href="https://www.linkedin.com/in/gabriel-moreau-71b29829b/"
                        class="text-white dark:text-black underline text-sm">
                        Gabriel Moreau
                    </a>
                </div>
                <div class="display flex flex-col">
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