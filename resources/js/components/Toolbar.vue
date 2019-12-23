<template>
<div class="toolbar">
    <v-toolbar>
      <v-toolbar-title>Macroword</v-toolbar-title>

      <v-spacer></v-spacer>
        <new-notification v-if="logedIn"></new-notification>
      <div class="hidden-sm-and-down">
        <router-link
        v-for="item in items"
        :key="item.title"
        :to="item.to"
        v-if="item.show"
         >
            <v-btn text >{{ item.title}}</v-btn>
        </router-link>
      </div>
    </v-toolbar>
</div>
</template>

<script>

import NewNotification from '../components/NewNotification'
export default {
    name:"Toolbar",
        components:{
                NewNotification
        },
    data: function (){
        return{
            logedIn: User.logedIn(),
            items: [
                {title:"Fourm" , to:'/fourm', show:true},
                {title:"Ask Question" , to:'/ask', show:User.logedIn()},
                {title:"Category" , to:'/category', show:User.admin()},
                 {title:"Login" , to:'/login', show: !User.logedIn()},
                {title:"Logout" , to:'/logout', show:User.logedIn()},
            ]
        }
    },

    created(){
        EventBus.$on('logout', ()=>{
            User.logout()
        })
    }
}
</script>

<style lang="scss" scoped>

</style>
