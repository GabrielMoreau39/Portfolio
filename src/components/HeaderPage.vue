<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import IconLogo from './icons/IconLogo.vue';
import IconMoon from './icons/IconMoon.vue';
import IconSun from './icons/IconSun.vue';
import { useDark, useToggle } from '@vueuse/core'

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

<template>
    <div class="bg-black items-center justify-between flex px-14">
        <div>
            <RouterLink to="/">
                <IconLogo />
            </RouterLink>
        </div>
        <div class="flex-row flex justify-between items-center">
            <div>
                <button @click="toggleDark()">
                    <IconSun v-show="!isDark" />
                    <IconMoon v-show="isDark" />
                </button>


            </div>
            <div>
                <nav class="invisible opacity-0 flex-1 px-6 py-12 flex justify-between mt-20 flex-col fixed z-10 inset-0 bg-darkRed lg:mt-0 lg:flex-row lg:static lg:bg-transparent lg:py-6 lg:visible lg:opacity-100"
                    :class="{ '!visible !opacity-100': activeMenu }" v-scroll-lock="activeMenu">
                    <ul class="flex flex-col gap-4 lg:flex-row">

                        <li>
                            <RouterLink
                                :class="{ 'bg-moredarkRed lg:bg-transparent': $route.path === '/About', 'lg:hover:before:border-b-white lg:hover:border-b-1 lg:hover:border-b lg:hover:rounded-none lg:hover:w-full': true }"
                                class="block p-4 rounded-lg text-white" to="/About" @click="closeMenu">A propos
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink
                                :class="{ 'bg-moredarkRed lg:bg-transparent': $route.path === '/Projets', 'lg:hover:before:border-b-white lg:hover:border-b-1 lg:hover:border-b lg:hover:rounded-none lg:hover:w-full': true }"
                                class="block p-4 rounded-lg text-white" to="/Projets" @click="closeMenu">Projets
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink
                                :class="{ 'bg-moredarkRed lg:bg-transparent': $route.path === '/Contact', 'lg:hover:before:border-b-white lg:hover:border-b-1 lg:hover:border-b lg:hover:rounded-none lg:hover:w-full': true }"
                                class="block p-4 rounded-lg text-white" to="/Contact" @click="closeMenu">Contact
                            </RouterLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>