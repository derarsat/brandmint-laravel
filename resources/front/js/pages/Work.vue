<template>
    <div class="container">
        <h1 class="title">
            We love <span class="text-primary">Environmental Design</span> match-making fresh textures & <br> materials
            with every brand.
        </h1>
        <ProjectsList :projects="enviro"/>
        <h1 class="title">
            We love <span class="text-primary">F&B</span> and our passion is creating brands with a fresh <br> attitude
            and a twist of mint.
        </h1>
        <ProjectsList :projects="fb"/>
    </div>
</template>
<style scoped>
.title {
    @apply font-medium text-3xl mt-14
}
</style>
<script setup>
import {onMounted, ref} from "vue";
import ProjectsList from "../components/ProjectsList.vue";

const fb = ref()
const enviro = ref()

function getProjects() {
    fetch('/api/front/projects')
        .then((response) => response.json())
        .then((data) => parseData(data));
}

function parseData(data) {
    enviro.value = data.filter((project) => project.category === "Environmental Design")
    fb.value = data.filter((project) => project.category === "F&B")
}

onMounted(() => {
    getProjects()
})
</script>
