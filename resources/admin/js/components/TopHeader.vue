<template>
    <div class="bg-black relative mb-12">
        <div class="container">
            <div class="flex  items-center justify-between py-4">
                <!--Title-->
                <h1 class="uppercase text-3xl text-white">
                    {{ route.meta.title }}
                </h1>
                <!--User-->
            </div>
        </div>
    </div>
</template>

<script setup>
import {useRoute} from "vue-router";

const route = useRoute()
</script>
