// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";

import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";

// import VueSweetalert2 from 'vue-sweetalert2';
// import 'sweetalert2/dist/sweetalert2.min.css';
import soporte from './views/soporte.vue';
import dashboard from './components/dashboard.vue';
import tickets from './components/tickets.vue';
import equipos from './components/equipos.vue';


const routes = [
    {
        path: "/",
        redirect: "/soporte",

    },
    {
        path: "/soporte",
        name: "soporte",
        component: soporte,
        children: [
            {
                path: "/dashboard",
                name: "dashboard",
                component: dashboard,
            },
            {
                path: "/tickets",
                name: "tickets",
                component: tickets,
            },
            {
                path: "/equipos",
                name: "equipos",
                component: equipos,
            },

        ],
    },
  


]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes: routes,
    linkActiveClass: 'active' // short for `routes: routes`
});

// Create the app
const app = createApp(App);
app.use(router);
// app.use(VueSweetalert2);
registerPlugins(app);

app.mount("#app");

export default router;
