import axios from 'axios'

window.axios = axios
window.axios.defaults.baseURL = "/api/"
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.withCredentials = true

import {createApp} from "vue";
import Front from "../Admin.vue";
import router from "./router";

const app = createApp(Front)
app.use(router)
app.mount("#admin")
