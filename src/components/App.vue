<template>
    <div id="app">
        <NavBar />
        <transition name="fade" mode="out-in">
            <router-view />
        </transition>
        <FooterBar />
    </div>
</template>

<script>
    import NavBar from './navigation/NavBar.vue'
    import FooterBar from './navigation/Footer.vue'

    export default {
        components: {
            NavBar,
            FooterBar
        }
    }
</script>

<style>
    #app {
        font-family: 'Roboto', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #5d5b59;
    }

    h1, h2 {
        color : #5d5b59 !important;
    }
</style>
