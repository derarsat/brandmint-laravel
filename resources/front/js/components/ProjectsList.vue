<template>
    <div class="grid grid-cols-6 gap-3 my-12">
        <template v-for="(project,index) in projects">
            <router-link :to="{name:'ShowProject',params:{id:project.id,data:JSON.stringify(project)}}" class="bg-g1 project overflow-hidden cursor-pointer relative col-span-2">
                <img :src="project.images[0].link" :alt="project.name" class="w-full project-image">
                <div class="project-over">{{ project.name }}</div>
            </router-link>
        </template>
    </div>
</template>

<script setup>
const props = defineProps({
    projects: []
})
</script>

<style>
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

.project:nth-child(5n + 4), .project:nth-child(5n) {
    @apply col-span-3
}
</style>
