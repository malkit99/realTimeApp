<template>
    <div class="AppHome">
        <toolbar></toolbar>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Toolbar from './Toolbar';
import AppFooter from './AppFooter';
    export default {
       name:"AppHome",
       components:{
           Toolbar,
           AppFooter
       }
    }
</script>
