<template>
    <div>
        <div v-if="showVideo" class="fixed bg-black bg-opacity-40 w-screen h-screen  top-0 left-0 flex items-center justify-center"
             style="z-index: 1000">
            <div class="max-w-3xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     @click="showVideo = false" stroke="white" class="w-12 cursor-pointer hover:opacity-80 h-12 ml-auto relative left-14 top-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
                <video src="../../assets/brandmint.mp4" controls autoplay></video>
            </div>
        </div>
        <Hero/>
        <ProjectsList class="container" :projects="featuredProjects"/>
        <div class="bg-black  py-24">
            <div class="container flex items-center justify-between">
                <div class="w-6/12 relative">
                    <div class="absolute w-full h-full flex items-center justify-center">
                        <div class="relative w-20 h-20">
                            <div id="cont"
                                 @click="showVideo = true"
                                 class="bg-primary text-white cursor-pointer flex items-center justify-center rounded-full pl-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24"
                                     stroke-width="1.5"
                                     stroke="currentColor" class="w-12 h-12">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"/>
                                </svg>

                            </div>
                            <div id="cont-before"></div>
                        </div>
                    </div>
                    <img src="../../assets/videocover.jpeg" alt="" class="w-full">
                </div>
                <div class="text-white w-5/12">
                    <h1 class="text-5xl font-medium mb-8">Our Culture</h1>
                    <p>
                        Our culture is all about caring. When you work with Brandmint, we consider ourselves as the
                        guardians of your brand, & we’ll always take a strong interest in its welfare & how it’s faring,
                        even after our job is over. That’s just who we are. We also care about one another, forging a
                        collaborative team atmosphere in which talents are nurtured & tasks are shared. Working in such
                        a
                        company also makes us feel strongly about Brandmint, and drives us to always give our maximum in
                        everything we do.
                    </p>
                </div>
            </div>
        </div>
        <Packages/>
        <Raya/>
        <Contact/>
    </div>
</template>
<script setup>
import Hero from "../components/Hero.vue";
import Packages from "../components/Packages.vue";
import Raya from "../components/Raya.vue";
import Contact from "../components/Contact.vue";
import ProjectsList from "../components/ProjectsList.vue";
import {onMounted, ref} from "vue";

const featuredProjects = ref([])
const showVideo = ref(false)
onMounted(() => {
    window.axios.get('/featured-projects')
        .then((data) => {
            console.log(data)
            featuredProjects.value = data.data
        });
})
</script>


<style>
#cont {
    @apply absolute z-10 w-full h-full;
}

#cont-before {
    @apply absolute rounded-full bg-primary left-0 ;
    content: " ";
    z-index: 0;
    width: 100%;
    height: 100%;
    animation: play 2000ms linear infinite;
}

@keyframes play {
    0% {
        opacity: 0;
        transform: scale(0);
    }
    50% {
        opacity: 0.4;
        transform: scale(1.2);
    }
    100% {
        opacity: 0;
        transform: scale(1.5);
    }
}
</style>
