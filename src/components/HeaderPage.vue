<script setup lang="ts">
    import { computed, ref } from 'vue'
    import { RouterLink, useRoute } from 'vue-router'
    import IconLogoBlanc from './icons/IconLogoBlanc.vue';
    import IconMoon from './icons/IconMoon.vue';
    import IconSun from './icons/IconSun.vue';
    import { useDark, useToggle } from '@vueuse/core'
    import IconLogoNoir from './icons/IconLogoNoir.vue';
    import IconBehance from './icons/IconBehance.vue';
    import IconInstagram from './icons/IconInstagram.vue';
    import IconLinkedin from './icons/IconLinkedIn.vue';
    import IconGitHub from './icons/IconGitHub.vue';
    import IconLikedInNoir from './icons/IconLikedInNoir.vue';
    import IconBehanceNoir from './icons/IconBehanceNoir.vue';
    import IconInstagramNoir from './icons/IconInstagramNoir.vue';
    import IconGithubNoir from './icons/IconGithubNoir.vue';

    const route = useRoute()
    const hideOnRoutes = ['']
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const hide = computed(() => !hideOnRoutes.some(path => route.path.startsWith(path)))

    const activeMenu = ref(false)

    function closeMenu() {
        activeMenu.value = false
    }
    const isDark = useDark({
        selector: 'html',
        attribute: 'class',
        valueDark: 'dark',
        valueLight: 'light',
    })   
    const toggleDark = useToggle(isDark)
</script>

<template class="relative z-30">
    <div class="bg-black dark:bg-white items-center justify-between flex lg:px-14 py-5 lg:py-0 px-6 relative z-40">
        <div>
            <RouterLink to="/fr/">
                <IconLogoBlanc v-show="!isDark" class="w-16 h-auto lg:w-24" />
                <IconLogoNoir v-show="isDark" class="w-16 h-auto lg:w-24" />
            </RouterLink>
        </div>
        <div class="flex-row flex justify-between items-center my-auto">
            <div>
                <button @click="toggleDark()">
                    <IconSun v-show="!isDark" />
                    <IconMoon v-show="isDark" />
                </button>
            </div>
            <div>
                <button
                    class="relative my-1.5 z-10 flex h-4 w-6 flex-col justify-between lg:hidden *:block *:ease *:h-[2px] *:w-full *:transform *:rounded-full *:bg-white dark:*:bg-black *:transition *:duration-300 ml-6"
                    @click="activeMenu = !activeMenu">
                    <span :class="{ 'translate-y-[7px] rotate-45 !w-7': activeMenu }"></span>
                    <span :class="{ '!opacity-0': activeMenu }"></span>
                    <span :class="{ '-translate-y-[7px] -rotate-45 !w-7': activeMenu }"></span>
                </button>
                <nav class="bg-[url(img/logo.svg)] dark:bg-[url(img/logo_dark.svg)] bg-no-repeat bg-cover invisible opacity-0 flex-1 py-12 flex justify-between mt-20 flex-col fixed z-10 inset-0 bg-black dark:bg-white lg:mt-0 lg:flex-row lg:static lg:bg-transparent lg:py-6 lg:visible lg:opacity-100"
                    :class="{ '!visible !opacity-100': activeMenu }" v-scroll-lock="activeMenu">
                    <ul class="flex flex-col gap-4 lg:flex-row px-6">

                        <li>
                            <RouterLink
                                :class="{ 'bg-moredarkRed lg:bg-transparent': $route.path === '/fr/about', 'lg:hover:before:border-b-white lg:dark:hover:before:border-b-black lg:hover:border-b-1 lg:hover:border-b lg:hover:rounded-none lg:hover:w-full': true }"
                                class="block p-4 rounded-lg text-white dark:text-black text-2xl font-display"
                                to="/fr/about" @click="closeMenu">À propos
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink
                                :class="{ 'bg-moredarkRed lg:bg-transparent': $route.path === '/fr/projet', 'lg:hover:before:border-b-white lg:dark:hover:before:border-b-black lg:hover:border-b-1 lg:hover:border-b lg:hover:rounded-none lg:hover:w-full': true }"
                                class="block p-4 rounded-lg text-white dark:text-black text-2xl font-display"
                                to="/fr/projet" @click="closeMenu">Projets
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink
                                :class="{ 'bg-moredarkRed lg:bg-transparent': $route.path === '/fr/contact', 'lg:hover:before:border-b-white lg:dark:hover:before:border-b-black lg:hover:border-b-1 lg:hover:border-b lg:hover:rounded-none lg:hover:w-full': true }"
                                class="block p-4 rounded-lg text-white dark:text-black text-2xl font-display"
                                to="/fr/contact" @click="closeMenu">Contact
                            </RouterLink>
                        </li>
                    </ul>
                    <div class="flex flex-row justify-center items-center space-x-48">
                        <div class="flex flex-col">
                            <div class="flex grid-cols-2 grid-rows-2 space-x-2">
                                <div v-show="!isDark" class="space-y-2">
                                    <IconLinkedin />
                                    <IconBehance />
                                </div>
                                <div v-show="!isDark" class="space-y-2">
                                    <IconInstagram />
                                    <IconGitHub />
                                </div>
                                <div v-show="isDark" class="space-y-2">
                                    <IconLikedInNoir />
                                    <IconBehanceNoir />
                                </div>
                                <div v-show="isDark" class="space-y-2">
                                    <IconInstagramNoir />
                                    <IconGithubNoir />
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-row lg:hidden text-white dark:text-black">
                            <RouterLink to="/fr/">
                                <strong>FR</strong>/EN
                            </RouterLink>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>