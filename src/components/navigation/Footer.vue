<template>
    <footer class="ui inverted vertical teal footer segment mobile-hide">
        <div class="ui center aligned container">
            Created by Evan Blair for the ProofPoint coding task
            <br>
            <a href="https://www.linkedin.com/in/evan-blair-a408bb142/"><strong>LinkedIn | </strong></a> 
            <a href="https://github.com/esblair8/"><strong>GitHub</strong></a>
        </div>
    </footer>
</template>

<style>
    a {
        color: white;
    }

    @media only screen 
        and (max-device-width: 768px) 
        and (-webkit-min-device-pixel-ratio: 1) {
            .mobile-hide {
                visibility: hidden;
            }
    }
</style>
