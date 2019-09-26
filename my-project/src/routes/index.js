import Vue from "vue";
import Router from "vue-router";
import router from "./router.js";
Vue.use(Router);
const appRouter = new Router({
    mode: "history",
    routes: router
});

export default appRouter;