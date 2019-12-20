<template>
    <div class="read" v-if="question">
   <v-container>
       <v-row align="center" justify="center">
       <v-col cols="12" md="12">
        <edit-question
        :data = question
        v-if="editing"
        >

        </edit-question>

        <show-question
        v-else
        :data = question
        >
        </show-question>

        </v-col>
       </v-row>
            <v-row align="center" justify="center">
                    <v-col cols="12" md="10" sm="12">
                        <replies :question="question"></replies>
                    </v-col>

                     <v-col cols="12" md="10" sm="12">
                         <new-reply :questionSlug="question.slug"></new-reply>
                    </v-col>
            </v-row>
    </v-container>
    </div>
</template>
<script>
import ShowQuestion from './ShowQuestion'
import EditQuestion from './EditQuestion'
import Replies from '../reply/Replies'
import NewReply from '../reply/NewReply'
export default {
    name:"Read",
    components:{
        ShowQuestion,
        EditQuestion,
        Replies,
        NewReply
    },

    data: function(){
        return{
            question:null,
            editing:false
        }
    },

    created(){
        this.listen()
        this.getquestion()
    },

    methods:{
        listen(){
            EventBus.$on('startEditing', ()=>{
                this.editing = true
            })

            EventBus.$on('cancelEditing', ()=>{
                this.editing = false
            })
        },

        getquestion(){
            axios.get(`/api/question/${this.$route.params.slug}`)
            .then(res => this.question = res.data.data)
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
