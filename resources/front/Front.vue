<template>
    <main class="font-serif">
        <TopHeader/>
        <router-view v-slot="{ Component }">
            <transition name="fade">
                <component :is="Component"/>
            </transition>
        </router-view>
        <SiteFooter/>
    </main>
</template>

<style>
body {
    @apply w-screen overflow-x-hidden
}

.slide-enter-active {
    transition: all 400ms ease-in-out;
}

.slide-leave-active {
}

.slide-leave-to,
.slide-enter-from {
    transform: translateX(100vw);
}
</style>
<script>
import TopHeader from "../front/js/components/TopHeader.vue";
import SiteFooter from "./js/components/SiteFooter.vue";

export default {
    components: {SiteFooter, TopHeader}
}
</script>
