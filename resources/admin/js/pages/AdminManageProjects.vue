<template>
    <div class="container">
        <!--Main-->
        <div class="flex items-center justify-between">
            <h1 class="font-semibold text-3xl">All Projects</h1>
            <router-link :to="{name:'AdminAddProject'}"
                         class="bg-primary text-white px-6 py-2 rounded-md">
                Add New Project
            </router-link>
        </div>
        <!--List-->
        <table class="table-fixed w-full mt-24">
            <thead>
            <tr>
                <th class="border-b  font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">Name</th>
                <th class="border-b  font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">Category</th>
                <th class="border-b  font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">Featured</th>
                <th class="border-b  font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">Published</th>
                <th class="border-b  font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">Location</th>
                <th class="border-b  font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">Link</th>
                <th class="border-b  font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">Description</th>
                <th class="border-b  font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">Tags</th>
                <th class="border-b  font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">Images</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="project in projects"
                class="border-b border-slate-100 p-4 pl-8 ">
                <td v-text="project.name"
                    class="border-b border-slate-100 p-4 pl-8 "/>
                <td v-text="project.category"
                    class="border-b border-slate-100 p-4 pl-8 "/>
                <td v-text="project.featured ? 'Yes' : 'No'"
                    class="border-b border-slate-100 p-4 pl-8 "/>
                <td v-text="project.published ? 'Yes' : 'No'"
                    class="border-b border-slate-100 p-4 pl-8 "/>
                <td v-text="project.location"
                    class="border-b border-slate-100 p-4 pl-8 "/>
                <td v-text="project.link"
                    class="border-b border-slate-100 p-4 pl-8 "/>
                <td v-text="project.description"
                    class="border-b border-slate-100 p-4 pl-8 overflow-hidden"/>
                <td v-text="project.tags"
                    class="border-b border-slate-100 p-4 pl-8 "/>
                <td class="flex items-center gap-2 flex-wrap">
                    <img v-for="image in project.images" :src="image.link" class="w-12">
                </td>
            </tr>
            </tbody>
        </table>

    </div>
</template>

<script setup>
import {ref} from "@vue/reactivity";
import {onMounted} from "vue";

const projects = ref([])

async function getProjects() {
    await window.axios({
        method: "get",
        url: "/dashboard/projects",
    }).then((r) => {
        projects.value = r.data
    })
}

onMounted(() => getProjects())
</script>

<style scoped>

</style>
