<template>
    <div class="fourm">
    <v-container fluid >
        <v-row>
                <v-col cols="12" md="8">
                    <question
                    v-for="question in questions"
                    :key="question.path"
                    :question = question
                    >
                    </question>
                </v-col>
                <v-col cols="6" md="4">

                    <app-sidebar></app-sidebar>

                </v-col>
        </v-row>
    </v-container>
    </div>
</template>

<script>
import Question from './Question'
import AppSidebar from './AppSidebar'
export default {
    name:"fourm",
    components:{
        Question,
        AppSidebar
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
