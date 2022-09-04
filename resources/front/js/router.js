import {createWebHistory, createRouter, createWebHashHistory} from 'vue-router'

const Index = import('./pages/index.vue')
const work = import('./pages/Work.vue')
const offering = import('./pages/Offering.vue')
const ourClients = import('./pages/OurCLients.vue')
const ShowProject = import('./pages/ShowProject.vue')
const routes = [
    {
        name: "Home",
        path: "/",
        component: Index,
    },
    {
        name: "Offering",
        path: "/offering",
        component: offering,
    },
    {
        name: "Clients",
        path: "/our-clients",
        component: ourClients,
    },
    {
        name: "Work",
        path: "/work",
        component: work,
    },
    {
        name: "ShowProject",
        props: true,
        path: "/project/:id",
        component: ShowProject,
    },

]

const router = createRouter({
    history: createWebHashHistory("/"),
    routes, // short for `routes: routes`
    scrollBehavior(to, from, savedPosition) {
        window.scrollTo(0, 0, "smooth")
    }
})
export default router
