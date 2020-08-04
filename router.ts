import {createRouter, createWebHistory} from 'vue-router'
import Home from './src/views/Home.vue'
import Doc from './src/views/Doc.vue'

export const router  =  createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        component:Home,
    },{
        path: '/doc',
        component: Doc
    }],
})