<template>
    <div class="new-notification">
        <v-menu
        offset-y
        >
      <template v-slot:activator="{ on }">

        <v-btn
          dark
          v-on="on"
          icon
        >
        <v-badge
        :color="color"
        >
        <template v-slot:badge>{{unreadCount}}</template>
         <v-icon  :color="color" >add_alert</v-icon>
        </v-badge>
        </v-btn>

      </template>

      <v-list>
        <v-list-item v-for="item in unread" :key="item.id">
            <router-link :to="item.path">
        <v-list-item-title @click="readIt(item)">
                {{item.question}}
        </v-list-item-title>
         </router-link>
        </v-list-item>

         <v-list-item v-for="item in read" :key="item.id">
           <v-list-item-title>{{item.question}}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    </div>
</template>

<script>
export default {
        data: () => ({
            read:{},
            unread: {},
            unreadCount : 0
            }),

        created() {
            if(User.logedIn()){
                this.getNotifications()
            }
        },

        methods:{
            getNotifications(){
                axios.post('/api/notifications')
                .then(res => {
                    this.read = res.data.read
                    this.unread = res.data.unread
                    this.unreadCount = res.data.unread.length
                })
            },

            readIt(notification){
                axios.post('/api/markAsRead',{id:notification.id})
                .then(res => {
                    this.unread.splice(notification,1)
                    this.read.push(notification)
                    this.unreadCount --
                })
            }
        },

        computed:{
            color(){
                return this.unreadCount > 0 ? 'pink' : 'pink lighten-4';
            }
        }
}


</script>

<style lang="scss" scoped>

</style>
