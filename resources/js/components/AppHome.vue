<template>
    <div class="AppHome">
        <toolbar></toolbar>
        <router-view></router-view>
    </div>
</template>

<script>
import Toolbar from './Toolbar';
import Login from './login/Login';
import Signup from './login/Signup';
import Fourm from './fourm/Fourm';
import CreateCategory from './category/CreateCategory';
    export default {
       name:"AppHome",
       components:{
           Toolbar,
           Login,
           Signup,
           Fourm,
           CreateCategory
       }
    }
</script>
