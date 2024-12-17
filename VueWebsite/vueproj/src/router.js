import { createWebHistory, createRouter } from "vue-router";
import Dancing from "@/components/Dancing.vue";
import Classes from "@/components/Classes.vue";
import Hours from "@/components/Hours.vue";
import About from "@/components/About.vue";
import Contact from "@/components/Contact.vue";
import Header from "@/components/Header.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/Header', name: 'Header', component: Header },
        { path: '/Dancing', name: 'Dancing', component: Dancing},
        { path: '/Classes', name: 'Classes', component: Classes},
        { path: '/Hours', name: 'Hours', component: Hours},
        { path: '/About', name: 'About', component: About},
        { path: '/Contact', name: 'Contact', component: Contact},
    ]
});

export default router;