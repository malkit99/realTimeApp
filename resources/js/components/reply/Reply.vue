<template>
    <div class="reply">


        <v-card class="mt-2" >
            <v-card-title>
                {{data.user}}
            <v-spacer></v-spacer>
            <like :content="data"></like>
            </v-card-title>
            <v-card-subtitle>
                <span class="red--text">Said</span>
                {{data.created_at}}
            </v-card-subtitle>


                <edit-reply v-if="editing" :reply=data ></edit-reply>

            <v-card-text v-html="reply" v-else>

            </v-card-text>
            <v-divider color="pink"></v-divider>
        <div v-if="!editing">
                 <v-card-actions v-if="own">
                <v-btn icon @click="edit">
                    <v-icon  color="pink">
                        edit
                    </v-icon>
                </v-btn>

                <v-btn icon @click="destory" >
                    <v-icon  color="pink">
                        delete
                    </v-icon>
                </v-btn>
            </v-card-actions>
        </div>
        </v-card>


    </div>
</template>

<script>
import EditReply from './EditReply'
import Like from '../likes/like'
export default {
    props:['data','index'],
    data() {
        return {
            editing:false
        }
    },

    components:{
        EditReply,
        Like
    },
    computed: {
        own(){
            return User.own(this.data.user_id)
        },

          reply(){
           return md.parse(this.data.reply);
        }
    },

    created() {
        this.listen();
    },

    methods: {
        destory(){
            EventBus.$emit('deletereply',this.index)
        },

        edit(){
            this.editing = true
        },

        listen(){
            EventBus.$on('cancelEditing', ()=>{
                this.editing = false;
            })
        }
    },
}
</script>

<style lang="scss" scoped>

</style>
