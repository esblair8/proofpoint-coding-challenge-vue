<template>
    <div id="app">
        <NavBar />
        <router-view />
        <footerBar />
    </div>
</template>

<script>
    import NavBar from './main/NavBar.vue'
    import MainSection from './main/MainSection.vue'
    import FooterBar from './main/Footer.vue'

    export default {
        components: {
            NavBar,
            MainSection,
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
    }
</style>
