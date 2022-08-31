<template>
    {{enviro}}
    {{fb}}
    <div class="container" v-if="enviro">
        <h1 class="text-5xl font-medium mt-20 mb-2"> Our Clients</h1>
        <p class="mb-16 text-xl"> We're proud of helping the best companies deliver positive emotions <br> to their customers.</p>
        <ClientsList key="enviro" :clients="enviro"/>
        <ClientsList key="fb" :clients="fb"/>
    </div>
</template>
<style scoped>
.title {
    @apply font-medium text-3xl mt-14
}
</style>
<script setup>
import {onMounted, ref} from "vue";
import ClientsList from "../components/ClientsList.vue";

const fb = ref()
const enviro = ref()
const base = import.meta.env.MODE == "development" ? "" : "public/"
function getProjects() {
    fetch('/api/front/clients')
        .then((response) => response.json())
        .then((data) => parseData(data));
}

function parseData(data) {
    enviro.value = data.filter((client) => client.category === "Environmental Design")
    fb.value = data.filter((client) => client.category === "F&B")
}

onMounted(() => {
    getProjects()
})
</script>
