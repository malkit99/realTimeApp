<template>
    <div class="fourm">
    <v-container fluid >
        <v-row no-gutters>
                <v-col cols="12" md="8">
                    <question
                    v-for="question in questions"
                    :key="question.path"
                    :question = question
                    ></question>
                </v-col>
                <v-col cols="6" md="4">

                            sidebar

                </v-col>
        </v-row>
    </v-container>
    </div>
</template>

<script>
import Question from './Question'
export default {
    name:"fourm",
    components:{
        Question
    },

    data: function(){
        return{
            questions:{}
        }
    },
    created(){
        axios.get('/api/question')
        .then(res => this.questions = res.data.data)
        .catch(error => console.log(error.response.data))
    }
}
</script>

<style lang="scss" scoped>

</style>
