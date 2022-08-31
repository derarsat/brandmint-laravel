<template>
    <transition name="fade" @after-enter="content = true" @after-leave="show = false;$emit('close')">
        <div class="bg-black bg-opacity-40 fixed top-0 left-0 w-screen h-screen flex items-center justify-center overflow-y-auto"
             v-if="wrap">
            <transition @after-leave="wrap = false" name="slide-fade">
                <div class="container flex justify-center">
                    <div :class="classes" class="bg-white rounded-xl shadow-xl" style="min-width: 500px" v-if="content">
                        <h2 class="text-3xl px-4 py-6 font-medium flex items-center justify-between">
                            <slot name="header">Header</slot>
                            <svg @click="content=false" xmlns="http://www.w3.org/2000/svg"
                                 class="h-7 w-7 text-red-500 transform transition hover:rotate-90 cursor-pointer"
                                 viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                      clip-rule="evenodd"/>
                            </svg>
                        </h2>
                        <div class="border-t border-b px-6 py-12 ">
                            <slot name="content">Content</slot>
                        </div>
                        <div class="p-4">
                            <slot name="footer">Footer</slot>
                        </div>
                    </div>
                </div>

            </transition>
        </div>

    </transition>
</template>

<script setup>
import {ref} from "@vue/reactivity";
import {watch} from "vue";

const wrap = ref(false)
const content = ref(false)
const props = defineProps({
    show: {
        default: false,
        type: Boolean
    },
    classes: {
        default: "",
        type: String
    }
})

watch(() => props.show, (first, second) => {
    console.log(first, second)
    wrap.value = first;
});
</script>

<style scoped>

</style>
