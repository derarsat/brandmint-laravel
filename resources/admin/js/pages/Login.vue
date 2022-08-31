<template>
    <div class="bg-black  text-white">
        <div class="">
            <form @submit.prevent="attempLogin"
                  class="min-h-screen grid grid-cols-2 justify-between items-center max-w-4xl mx-auto">
                <div class="">
                    BRANDMINT
                </div>
                <div class=" ">
                    <h1 class="text-3xl font-semibold mb-1 uppercase">Welcome</h1>
                    <h2 class="mb-12">Please login to admin panel</h2>
                    <div class="my-4">
                        <label for="email">E-mail</label>
                        <input type="email" required id="email" v-model="email">
                    </div>
                    <div class="mb-8">
                        <label for="password">Password</label>
                        <input type="password" required id="password" v-model="password">
                    </div>
                    <button class="bg-primary h-12  w-full block rounded-xl"
                            :class="loading && 'cursor-not-allowed opacity-30'" :disabled="loading">Login
                    </button>
                    <Transition name="slide-fade">
                        <p class="text-red-500 mt-3" v-if="error.length > 0"> {{ error }}</p>
                    </Transition>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import {ref} from "@vue/reactivity";
import {useRouter} from "vue-router";

const email = ref("")
const password = ref("")
const loading = ref(false)
const error = ref("")
const router = useRouter()

async function attempLogin() {
    loading.value = true
    error.value = ""
    await axios.get('/sanctum/csrf-cookie', {baseURL: "/"})
    await axios.post('/login', {email: email.value, password: password.value}).then(({data}) => {
        localStorage.setItem("token",data.token)
        router.push({name: "AdminManageProjects"})
        
        // this.signIn()
    }).catch((e) => {
        console.log(e)
        // error.value = e.response.data.data
    }).finally(() => {
        loading.value = false
    })
}
</script>

<style scoped>

</style>
