import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createRouter, createWebHistory} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

const app = createApp(App)
const router  =   createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        component:HelloWorld,
    }],
})
app.use(router)
app.mount('#app')
