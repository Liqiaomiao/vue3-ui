<template>
    <Topnav></Topnav>
    <div class="main-cnt">
        <h1>vue3-ui</h1>
        <h2>基于vue3的组件库</h2>
        <p class="actions">
            <a href="https://github.com">GitHub</a>
            <router-link to="/doc">开始</router-link>
        </p>
    </div>
</template>
<script>
import Topnav from '../components/Topnav.vue'
export default {
    name: 'Home',
    components: {
        Topnav
    }
}
</script>
<style lang="scss">
   .main-cnt{
       text-align: center;
   }
</style>