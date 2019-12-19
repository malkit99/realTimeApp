<template>
    <div class="show-question">


                    <v-card class="pa-2 mt-2" outlined tile >
                        <v-card-title>
                            {{data.title}}

                              <v-spacer></v-spacer>
                            <v-btn depressed color="success">{{data.reply_count}} Replies</v-btn>
                        </v-card-title>

                        <v-card-subtitle>
                            <span class="primary--text">{{ data.user }}</span>  said  <span class="red--text">
                                {{data.created_at}}
                                </span>
                        </v-card-subtitle>

                        <v-card-text v-html="body">

                        </v-card-text>

                        <v-card-actions v-if="own">
                            <v-btn icon >
                                <v-icon color="pink" @click="edit">edit</v-icon>
                            </v-btn>

                              <v-btn icon >
                                <v-icon color="pink" @click="destory">delete</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>



    </div>
</template>

<script>
export default {
    name:"ShowQuestion",
    props:['data'],
    data: function(){
        return{
            own: User.own(this.data.user_id)
        }
    },
    computed:{
        body(){
            return md.parse(this.data.body)
        }
    },

    methods:{
        destory(){
            axios.delete(`/api/question/${this.data.slug}`)
            .then(res => this.$router.push('/fourm'))
            .catch(error => console.log(error.response.data))
        },

        edit(){
            EventBus.$emit('startEditing')
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
