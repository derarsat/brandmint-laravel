import {createApp} from "vue";
import Front from "../Front.vue";
import router from "./router";
import "../css/front.css"
import axios from 'axios'

window.axios = axios
window.axios.defaults.baseURL = location.href.indexOf("brandmint") > 0 ? "public/api/front" : "/api/front"
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const app = createApp(Front)
app.use(router)
app.mount("#front")
