<script setup lang="ts">
    import IconBehance from './icons/IconBehance.vue';
    import IconBehanceNoir from './icons/IconBehanceNoir.vue';
    import IconGitHub from './icons/IconGitHub.vue';
    import IconGithubNoir from './icons/IconGithubNoir.vue';
    import IconInstagram from './icons/IconInstagram.vue';
    import IconInstagramNoir from './icons/IconInstagramNoir.vue';
    import IconLikedInNoir from './icons/IconLikedInNoir.vue';
    import IconLinkedIn from './icons/IconLinkedIn.vue';
    import IconLogoBlanc from './icons/IconLogoBlanc.vue';
    import IconLogoNoir from './icons/IconLogoNoir.vue';
    import { useDark } from '@vueuse/core'

    const isDark = useDark({
        selector: 'html',
        attribute: 'class',
        valueDark: 'dark',
        valueLight: 'light',
    })
</script>

<template>
    <div class="bg-black dark:bg-white text-center space-y-8 py-8">
        <div>
            <RouterLink to="/fr">
                <IconLogoBlanc v-show="!isDark" class="w-[60-px] h-[80px] display flex justify-center mx-auto" />
            </RouterLink>
            <RouterLink to="/fr">
                <IconLogoNoir v-show="isDark" class="w-[60-px] h-[80px] display flex justify-center mx-auto" />
            </RouterLink>
        </div>
        <div>
            <a href="/CV_Développeur-Web.pdf" download="CV_Gabriel-Moreau.pdf"
                class="dark:border-b-black border-b-white border-b-2 text-white dark:text-black">Télécharger mon
                CV</a>
        </div>
        <div class="display flex justify-center items-center space-x-4">
            <a href="https://www.linkedin.com/in/gabriel-moreau-71b29829b/">
                <IconLinkedIn v-show="!isDark" />
            </a>
            <a href="https://www.linkedin.com/in/gabriel-moreau-71b29829b/">
                <IconLikedInNoir v-show="isDark" />
            </a>
            <a href="https://www.behance.net/gabrielmoreau2">
                <IconBehance v-show="!isDark" />
            </a>
            <a href="https://www.behance.net/gabrielmoreau2">
                <IconBehanceNoir v-show="isDark" />
            </a>
            <a href="https://www.instagram.com/gbriel_mr/">
                <IconInstagram v-show="!isDark" />
            </a>
            <a href="https://www.instagram.com/gbriel_mr/">
                <IconInstagramNoir v-show="isDark" />
            </a>
            <a href="https://github.com/GabrielMoreau39">
                <IconGitHub v-show="!isDark" />
            </a>
            <a href="https://github.com/GabrielMoreau39">
                <IconGithubNoir v-show="isDark" />
            </a>
        </div>
        <p class="text-sm pt-2 dark:text-black">© 2024 Gabriel Moreau</p>
    </div>
</template>