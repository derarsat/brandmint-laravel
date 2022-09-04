<template>
    <main class="font-serif">
        <TopHeader/>
        <div style="min-height: 50vh">
            <router-view v-slot="{ Component }" >
                <transition name="slide">
                    <component :is="Component" />
                </transition>
            </router-view>
        </div>
        <SiteFooter/>
    </main>
</template>

<style>
body {
    @apply w-screen overflow-x-hidden
}

.slide-enter-active {
    transition: all 700ms ease-in-out;
}

.slide-leave-active {
    display: none;
}

.slide-leave-to,
.slide-enter-from {
    opacity: 0.8;
}
</style>
<script>
import TopHeader from "../front/js/components/TopHeader.vue";
import SiteFooter from "./js/components/SiteFooter.vue";
import AOS from "aos/dist/aos"
import "aos/dist/aos.css"
export default {
    mounted() {
        AOS.init()
    },
    components: {SiteFooter, TopHeader}
}
</script>
