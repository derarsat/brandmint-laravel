import {createApp} from "vue";
import Front from "../Front.vue";
import router from "./router";
import "../css/front.css"
const app = createApp(Front)
app.use(router)

app.mount("#front")
