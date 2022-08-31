<template>
    <div>
        <Hero />
        <ProjectsList class="container" :projects="featuredProjects"/>
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
import {onMounted,ref} from "vue";

const featuredProjects = ref([])

onMounted(() => {
    fetch('/api/front/featured-projects')
        .then((response) => response.json())
        .then((data) => {
            featuredProjects.value = data
        });
})
</script>
