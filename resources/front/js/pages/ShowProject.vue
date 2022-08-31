<template>
    <div class="container py-20">
        <div v-if="projectData">
            <!--            name-->
            <h1 class="text-6xl font-semibold">{{ projectData.name }}</h1>
            <!--            desc-->
            <p class="text-2xl font-medium mt-4">{{ projectData.description }}</p>
            <!--            tags-->
            <div class="flex items-center gap-4 mt-8 flex-wrap">
                <span class="text-primary rounded-md text-xl font-medium " v-for="tag in getTags(projectData.tags)">
                    {{ tag }}
                </span>
            </div>
            <div class="flex items-center gap-8 mt-8 text-xl">
                <a :href="projectData.link" target="_blank" class="underline">Project Link</a>
                <p><span class="font-semibold">Location:</span> <span>{{ projectData.location }}</span></p>
            </div>
            <!--            Images-->
            <div class="grid grid-cols-6 gap-3 my-12">
                <template v-for="(image,index) in projectData.images">
                    <div class="bg-g1 project overflow-hidden cursor-pointer relative col-span-3">
                        <img :src="image.link" :alt="projectData.name" class="w-full project-image">
                    </div>
                </template>
            </div>
            <!--            Related-->
            <div class="border-t pt-20 mt-40 flex items-center justify-between mb-12">
                <h1 class="text-5xl font-semibold   ">Similar Projects</h1>
                <div class="flex items-center gap-4">
                    <div class="swiper-button-prev-unique">
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
                :modules="[Navigation]"
                :slides-per-view="2.4"
                :space-between="12"
                :navigation="{
                    nextEl: '.swiper-button-next-unique',
                    prevEl: '.swiper-button-prev-unique'
                  }"
            >
                <swiper-slide v-for="(project,index) in additionalProjects">
                    <router-link :to="{name:'ShowProject',params:{id:project.id,data:project,}}">
                        <img class="w-full" :src="project.images[0].link" alt="">
                        <div class="flex items-center gap-2 my-4 flex-wrap">
                <span class="text-primary rounded-md text-sm font-semibold " v-for="tag in getTags(project.tags)">
                    {{ tag }}
                </span>
                        </div>
                        <h1 class="text-2xl font-semibold mb-4">{{ project.name }}</h1>
                        <h1>{{ project.description }}</h1>
                    </router-link>
                </swiper-slide>

            </swiper>
        </div>
    </div>
</template>

<script setup>
import {ref} from "@vue/reactivity";
import {onMounted, watch} from "vue";
import {useRoute} from "vue-router";
import {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';

const route = useRoute()
const projectData = ref()
const additionalProjects = ref()
const props = defineProps({
    data: {}
})

function getTags(tags) {
    return tags.split(",")
}


function getAdditional() {
    fetch(`/api/front/get-projects-by-category/${encodeURI(projectData.value.category)}`)
        .then((response) => response.json())
        .then((data) => {
            additionalProjects.value = data
        });
}

function getProject() {
    fetch(`/api/front/get-project/${route.params.id}`)
        .then((response) => response.json())
        .then((data) => {
            projectData.value = data[0]
            getAdditional()
        });
}

onMounted(() => {
    if (typeof props.data == "undefined") {
        getProject()
    } else {
        projectData.value = JSON.parse(props.data)
        getAdditional()
    }
})

watch(
    () => route.params.id,
    async newId => {
        getProject()
    }
)
</script>

<style scoped>
.project:hover .project-image {
    transition: all 600ms ease-in;
    transform: scale(1.2);
}

.project-over {
    @apply absolute  left-0 top-0 w-full h-full text-primary bg-black bg-opacity-30 opacity-0 text-lg font-medium px-4 flex items-end;
}

.project:hover .project-over {
    opacity: 100%;
    transition: all 300ms ease-in;
}

.project:nth-child(3n) {
    @apply col-span-6
}

.swiper-button-prev-unique,
.swiper-button-next-unique {
    @apply border-2 border-primary bg-primary text-white rounded-md cursor-pointer hover:bg-opacity-80 flex items-center justify-center
}
</style>
