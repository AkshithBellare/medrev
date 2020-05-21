import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/Register")
  }

];

const router = new VueRouter({
  routes
});

export default router;
