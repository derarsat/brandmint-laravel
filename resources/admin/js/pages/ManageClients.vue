<template>
    <div class="container">
        <Dialog :show="showDialog" :classes="'w-6/12 max-w-6xl min-w-3xl'">
            <template #header>
                Add New Client
            </template>
            <template #content>
                <form action="" @submit.prevent="saveClient">
                    <div class="grid grid-cols-2 items-center gap-8">
                        <div class="input-group relative">
                            <label for="category">Client Category</label>
                            <Listbox v-model="selectedCategory">
                                <ListboxButton class="lbb">{{ selectedCategory }}
                                    <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        aria-hidden="true" class="h-5 w-5 text-gray-400">
                                        <path fill-rule="evenodd"
                                              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                              clip-rule="evenodd"></path>
                                    </svg></span>
                                </ListboxButton>
                                <ListboxOptions class="list-options">
                                    <ListboxOption class="list-option" v-for="category in categories" :key="category"
                                                   :value="category">
                                        {{ category }}
                                    </ListboxOption>
                                </ListboxOptions>
                            </Listbox>
                        </div>
                        <div class="input-group ">
                            <label for="name">Client Name</label>
                            <input id="name" type="text" v-model="name" required>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-8">
                        <div class="input-group mt-6">
                            <label for="link">Client Link</label>
                            <input id="link" type="text" v-model="link" required>
                        </div>
                        <div class="input-group mt-6">
                            <label for="">Client Image</label>
                            <div
                                class="bg-gray-200 border border-gray-300 rounded-md w-full h-32 flex items-center  justify-center">
                                <label for="hidden-input" class="mb-0">
                                    <svg v-show="!hasImage" xmlns="http://www.w3.org/2000/svg"
                                         class="h-12 w-12 opacity-50"
                                         fill="none"
                                         viewBox="0 0 24 24"
                                         stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                    </svg>
                                    <input type="file" class="image-input-wrapper hidden" id="hidden-input"
                                           @change="imageAdded">
                                    <img v-show="hasImage" id="temp-image" src="" alt="">
                                </label>
                            </div>
                        </div>
                    </div>
                </form>
            </template>
            <template #footer>
                <button @click="saveClient" class="bg-primary text-white px-8 py-2 rounded-md">Save</button>
            </template>
        </Dialog>
        <div class="flex items-center justify-between">
            <h1 class="font-semibold text-3xl">All Clients</h1>
            <button @click="showDialog = true"
                    class="bg-primary text-white px-6 py-2 rounded-md">
                Add New Client
            </button>
        </div>

        <table class="table-auto w-full mt-24">
            <thead>
            <tr>
                <th class="border-b  font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">Name</th>
                <th class="border-b  font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">Category</th>
                <th class="border-b  font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">Link</th>
                <th class="border-b  font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">Image</th>
                <th class="border-b  font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">Sorting</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="client in clients"
                class="border-b border-slate-100 p-4 pl-8 ">
                <td v-text="client.name"
                    class="border-b border-slate-100 p-4 pl-8 "/>
                <td v-text="client.category"
                    class="border-b border-slate-100 p-4 pl-8 "/>
                <td v-text="client.link "
                    class="border-b border-slate-100 p-4 pl-8 "/>
                <td
                    class="border-b border-slate-100 p-4 pl-8 ">
                    <img :src="client.image" alt="" class="w-12">
                </td>
                <td>
                    <div class="mx-auto inline-grid grid-cols-3 gap-1 cursor-pointer">
                        <span v-for="s in 6" class="w-1 h-1 block bg-black rounded-full opacity-80"></span>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>

    </div>
</template>

<script setup>
import {ref} from "@vue/reactivity";
import Dialog from "../components/Dialog.vue";
import Draggable from "vue3-draggable";

import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue'
import {onMounted} from "vue";


const hasImage = ref(false)
const showDialog = ref(false)
const categories = ref([
    'Environmental Design',
    'F&B'
])
const selectedCategory = ref(categories.value[0])
const name = ref("")
const link = ref("")
const clients = ref([])

function imageAdded() {
    const image = document.getElementById(`temp-image`)
    const input = document.getElementById(`hidden-input`)

    hasImage.value = true
    image.src = URL.createObjectURL(input.files[0])
}

async function saveClient() {
    const input = document.getElementById(`hidden-input`)
    if (!input.files[0]) {
        alert("Please add client image")
        return
    }
    if (!name.value) {
        alert("Please add client name")
        return
    }
    const formData = new FormData();
    formData.append("name", name.value)
    formData.append("link", link.value)
    formData.append("category", selectedCategory.value)
    formData.append("image", input.files[0])

    await window.axios({
        method: "POST",
        url: "/dashboard/add-client",
        data: formData,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).then((response) => {
        alert("Client added successfully!")
        name.value = link.value = ""
        document.getElementById("name").focus()
    }).catch((e) => {
        let errorsarr = []
        let errors = e.response.data.errors
        if (errors.name) {
            errorsarr.push(errors.name[0])
        }
        if (errors.link) {
            errorsarr.push(errors.link[0])
        }
        alert(errorsarr.join("\n"))

    })
}

async function getClients() {
    await window.axios({
        method: "get",
        url: "/dashboard/get-clients",
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).then((response) => {
        clients.value = response.data
    })
}

onMounted(() => {
    getClients()
})
</script>

<style scoped lang="postcss">
.lbb {
    @apply relative border w-full text-left px-4 py-2 rounded-md h-12 font-medium
}

.list-options {
    @apply py-2 rounded-md border absolute w-full bg-white z-10
}

.list-option {
    @apply cursor-pointer px-4 py-2 hover:bg-primary hover:text-white font-medium
}
</style>
