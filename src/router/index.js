import {createWebHistory, createRouter} from "vue-router";
import Parent from "@/components/Dashboard/Parent.vue";
import Investors from "@/components/Dashboard/Investors";

const routes = [
    {
        path: "/",
        name: "parent.view",
        component: Parent,
    },
    {
        path: "/investors",
        name: "investors.view",
        component: Investors,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
