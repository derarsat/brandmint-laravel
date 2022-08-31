<template>
    <form @submit.prevent="addProject()" class=" p-6 rounded-md">

        <h1 class="text-4xl mt-4 mb-12 font-medium">Project Details</h1>
        <div class="grid grid-cols-12 gap-8">
            <!-- Images -->
            <div class="col-span-12 bg-white py-4 px-6 rounded-md border-2">
                <h2 class="font-semibold text-lg flex items-center justify-between">
                    <span>Project images</span>
                    <button class="bg-primary text-white text-base px-4 py-2 rounded-md" @click="addImage()"
                            type="button">Add image
                    </button>
                </h2>
                <div class="grid grid-cols-6 gap-4 mt-4">
                    <div v-for="(image, index) in images"
                         class="bg-gray-100 bg-opacity-80 border-2 rounded-md flex items-center flex-col justify-center py-4">
                        <label v-show="!image.hasImage" :for="`hidden-input-${index}`"
                               class="cursor-pointer flex items-center justify-center flex-col">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>
                            <span class="font-medium mt-1 text-sm">Add image</span>
                            <input type="file" class="image-input-wrapper hidden" :id="`hidden-input-${index}`"
                                   @change="imageAdded(index)">

                        </label>
                        <div>
                            <img :id="`temp-image-${index}`" src="" alt="">
                            <button type="button" @click="removeImage(index)" class="flex items-center gap-1 text-red-400 mt-2 mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-3 col-span-9 gap-8 bg-white p-4 border-2 rounded-md">
                <!--name-->
                <div class="input-group">
                    <label for="name">Project Name</label>
                    <input id="name" type="text" v-model="name" required>
                </div>
                <!--location-->
                <div class="input-group">
                    <label for="location">Project Location</label>
                    <input id="location" type="text" v-model="location" required>
                </div>
                <!--location-->
                <div class="input-group">
                    <label for="link">Project Link</label>
                    <input id="link" type="text" v-model="link" required>
                </div>

                <!--location-->
                <div class="input-group col-span-2">
                    <label for="description">Project Description</label>
                    <textarea id="description" class="h-40 py-4" v-model="description" required> </textarea>
                </div>
                <div>
                    <!--category-->
                    <div class="input-group relative">
                        <label for="category">Project Category</label>
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
                    <!--tags-->
                    <div class="input-group mt-6">
                        <label for="tags">Project Tags</label>
                        <input id="tags" type="text" v-model="tags" required>
                    </div>
                </div>
            </div>
            <div class="col-span-3">
                <div class="w-full border-2 rounded-md py-6 px-4 bg-white">
                    <h2 class="font-semibold text-lg">Additional Information</h2>
                    <div class="mt-6">
                        <div class="flex items-center gap-2">
                            <SwitchGroup>
                                <SwitchLabel class="m-2">Published</SwitchLabel>
                                <Switch v-model="published"
                                        :class="published ? 'bg-primary' : 'bg-primary bg-opacity-20'"
                                        class="relative inline-flex h-6 w-11 items-center rounded-full">
                                    <span class="sr-only">Enable notifications</span>
                                    <span :class="published ? 'translate-x-6' : 'translate-x-1'"
                                          class="inline-block h-4 w-4 transform transition rounded-full bg-white"/>
                                </Switch>
                            </SwitchGroup>
                        </div>
                        <div class="flex items-center gap-2">
                            <SwitchGroup>
                                <SwitchLabel class="m-2 mr-4">Featured</SwitchLabel>
                                <Switch v-model="featured" :class="featured ? 'bg-primary' : 'bg-primary bg-opacity-20'"
                                        class="relative inline-flex h-6 w-11 items-center rounded-full">
                                    <span class="sr-only">Enable notifications</span>
                                    <span :class="featured ? 'translate-x-6' : 'translate-x-1'"
                                          class="inline-block h-4 w-4 transform transition rounded-full bg-white"/>
                                </Switch>
                            </SwitchGroup>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-6 flex gap-4">
            <input type="submit" value="Save"
                   class="inline-block border-none w-auto px-24  bg-primary text-white font-medium cursor-pointer hover:bg-opacity-50"
                   :class="loading && 'cursor-not-allowed opacity-70'"
            >
            <div v-if="errors.length > 0" class="inline-block">
                <div class="bg-red-500 p-4 inline-block rounded-md text-white">
                    <p v-for="error in errors" >
                        - {{error}}
                    </p>
                </div>
            </div>
        </div>

    </form>
</template>

<script setup>
import {ref, reactive} from '@vue/reactivity'
import {
    Listbox,
    Switch,
    SwitchGroup,
    SwitchLabel,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue'

const categories = ref([
    'Environmental Design',
    'F&B'
])

const selectedCategory = ref(categories.value[0])
const featured = ref(false)
const published = ref(false)
const name = ref("name")
const link = ref("link")
const location = ref("location")
const description = ref("description")
const tags = ref("tags")
let images = reactive([])
const loading = ref(false)
const errors = ref([])
function addImage() {
    images.push({
        hasImage: false
    })
}

function imageAdded(index) {
    const image = document.getElementById(`temp-image-${index}`)
    const input = document.getElementById(`hidden-input-${index}`)
    image.src = URL.createObjectURL(input.files[0])
    images[index].hasImage = true
}

async function addProject() {
    await saveData()


}

async function saveData() {
    errors.value = []
    loading.value = true
    let formData = new FormData()
    formData.append("category", selectedCategory.value)
    formData.append("featured", featured.value ? 1 : 0)
    formData.append("published", published.value ? 1 : 0)
    formData.append("name", name.value)
    formData.append("link", link.value)
    formData.append("location", location.value)
    formData.append("description", description.value)
    formData.append("tags", tags.value)
    const images_array = document.getElementsByClassName("image-input-wrapper")
    Array.from(images_array).forEach(image => {
        if (image.files[0]) {
            formData.append("images[]", image.files[0]);
        }
    });
    if(images_array.length === 0){
        alert("Please add at least one image")
        return
    }

    await window.axios({
        method: "POST",
        url: "/dashboard/save-project",
        "Content-Type": "multipart/form-data",
        data: formData,
    }).then((r) => {
        alert("Project added successfully")
        featured.value = false
        published.value = false
        name.value = ""
        link.value = ""
        location.value = ""
        description.value = ""
        tags.value = ""
        images.value = []
        loading.value = false

    }).catch((e) => {
        let errorsArr = e.response.data.errors
        Object.keys(errorsArr).map((error) => {
            errors.value.push(errorsArr[error][0])
        })
    }).finally(() => loading.value = false)
}
function removeImage(index) {
    images.value = images.splice(index,1)
}
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
