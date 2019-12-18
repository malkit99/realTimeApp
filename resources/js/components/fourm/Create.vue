<template>
    <div>
        <v-container fluid >
            <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="6">
                    <v-card>
                        <v-toolbar color="primary" dark flat>
                            <v-toolbar-title>
                                Ask Question
                            </v-toolbar-title>
                        </v-toolbar>


                            <v-card-text>
                                <v-form @submit.prevent="create">
                                    <v-text-field
                                    label=" Ask Question"
                                    type="text"
                                    name="title"
                                    v-model="form.title"
                                    required
                                    >
                                    </v-text-field>
                                    <v-select
                                    :items="categories"
                                    :menu-props="{ top: true, offsetY: true }"
                                    label="Category"
                                    v-model="form.category_id"
                                    item-text="name"
                                    item-value="id"

                                    >
                                    </v-select>

                                    <vue-simplemde v-model="form.body" ref="markdownEditor" />
                                    <v-card-action>
                                         <v-btn color="success" type="submit">Submit Question</v-btn>
                                    </v-card-action>
                                </v-form>
                            </v-card-text>


                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    data: function(){
        return{
            form:{
                title:null,
                category_id:null,
                body:null

            },
            categories:[],
            error:{}
        }
    },

   methods:{
       create(){
           axios.post('/api/question', this.form)
           .then(res => this.$router.push(res.data.path))
           .catch(error => this.error = error.response.data.error)
       }
   },

   created(){
       axios.get('/api/category')
       .then(res => this.categories = res.data.data)
   }
}
</script>

<style lang="scss" scoped>

</style>
