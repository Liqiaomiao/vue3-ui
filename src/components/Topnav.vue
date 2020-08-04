<template>
    <div class="topnav">
        <span class="toggleAside" @click="toggleMenu"></span>
        <div class="topnav-main">
            <div class="logo">LOGO</div>
            <ul class="menu">
                <li>菜单1</li>
                <li>菜单2</li>
            </ul>
        </div>


    </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
export default {
    name: 'Topnav',
    setup(){
        let menuVisible = inject<Ref<boolean>>('menuVisible')
        const toggleMenu = ()=>{
            menuVisible.value = !menuVisible.value
        }
        return {
            toggleMenu
        }
    },
}
</script>
<style lang="scss">
    .topnav{
        position: relative;
        .toggleAside{
            display: block;
            width: 24px;
            height: 24px;
            border: 1px solid red;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translate(0,-50%);
        }
        .topnav-main{
            display: flex;
            height: 80px;
            justify-content: space-between;
            align-items: center;
            .menu{
                display: flex;
                li{
                    margin-left: 22px;
                }
            }
        }
        @media screen and (min-width: 500px) {
            .topnav-main{
                padding-left: 30px;
            }
        }
    }

</style>
