<template>
    <div>
        <div class=" mb-24" v-if="clients.length">
            <div class="flex items-center justify-between">
                <h1 class="font-semibold text-3xl text-primary mt-6 mb-8">{{ clients[0]["category"] }}</h1>
                <div class="flex items-center gap-4">
                    <div class="swiper-button-prev-unique" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
                        </svg>
                    </div>
                    <div class="swiper-button-next-unique">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                        </svg>
                    </div>
                </div>
            </div>
            <swiper
                :modules="modules"
                :slides-per-view="4.7"
                :space-between="12"
                @swiper="onSwiper"
                :navigation="{
                    nextEl: '.swiper-button-next-unique',
                    prevEl: '.swiper-button-prev-unique'
                  }"
            >
                <swiper-slide v-for="(client,index) in clients">
                    <a :href="client.link">
                        <button :id="`c-${index}`">
                            <img :src="client.image" :alt="client.name">
                        </button>
                    </a>
                </swiper-slide>

            </swiper>
        </div>
            <div v-else class="" style="min-height: 50vh"></div>
    </div>
</template>
<script>
import {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    props: ["clients"],
    setup() {
        const onSwiper = (swiper) => {
            const nexts = document.querySelectorAll(".swiper-button-next-unique")
            for (const next of nexts) {
                next.classList.remove("swiper-button-disabled");
            }
        }
        return {
            onSwiper,
            modules: [Navigation],
        };
    },

};
</script>

<style>
.swiper-button-prev-unique,
.swiper-button-next-unique {
    @apply border-2 border-primary bg-primary text-white rounded-md cursor-pointer hover:bg-opacity-80 flex items-center justify-center
}
.swiper-button-lock{
    display: block !important;
}
.swiper-button-disabled{
    @apply border-2 text-primary bg-white
}
</style>
