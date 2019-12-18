<template>
    <div class="read" v-if="question">

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
    </div>
</template>
<script>
import ShowQuestion from './ShowQuestion'
import EditQuestion from './EditQuestion'
export default {
    name:"Read",
    components:{
        ShowQuestion,
        EditQuestion
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
