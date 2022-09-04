import {createWebHistory, createRouter, createWebHashHistory} from 'vue-router'


const Login = () => import('./pages/Login.vue')
const AdminManageProjects = () => import('./pages/AdminManageProjects.vue')
const AdminAddProject = () => import('./pages/AdminAddProject.vue')
const ManageClients = () => import('./pages/ManageClients.vue')
const routes = [
    {
        name: "AdminLogin",
        path: "/login",
        component: Login,
    },
    {
        name: "AdminManageProjects",
        path: "/manage-projects",
        meta: {
            title: "Manage Projects"
        },
        component: AdminManageProjects,
    },
    {
        name: "ManageClients",
        path: "/manage-clients",
        meta: {
            title: "Manage Clients"
        },
        component: ManageClients,
    },
    {
        name: "AdminAddProject",
        path: "/add-project",
        meta: {
            title: "Add New Project"
        },
        component: AdminAddProject,

    },
]

const router = createRouter({
    history: createWebHashHistory("/admin"),
    routes, // short for `routes: routes`
})
export default router
