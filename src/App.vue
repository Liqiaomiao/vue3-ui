<template>
  <router-view></router-view>
</template>

<script>
import { provide,ref } from 'vue'
export default {
  name: 'App',
  setup(){
    provide('menuVisible',ref(true))
  },
}
</script>

<style lang="scss">

</style>
