<template>
    <div>
        <TopHeader v-if="$route.name !== 'AdminLogin'"/>
            <router-view></router-view>
    </div>
</template>

<script>
import TopHeader from "./js/components/TopHeader.vue";

export default {
    name: "Admin",
    components: {TopHeader}
}
</script>

<style scoped>

</style>
