<template>
    <div class="edit-question">
          <v-container fluid >
              <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="6">
                    <v-card>
                        <v-toolbar color="primary" dark flat>Edit Question </v-toolbar>

                    <v-card-text>
                        <v-form @submit.prevent="update">
                            <v-text-field
                                label=" Edit Question"
                                type="text"
                                name="title"
                                v-model="form.title"
                                required
                                >
                            </v-text-field>

                            <vue-simplemde v-model="form.body" ref="markdownEditor" />

                             <v-card-actions>
                                <v-btn color="success" type="submit" small>
                                    <v-icon>save</v-icon>
                                    <span>Save</span>
                                </v-btn>

                                 <v-btn color="error" type="submit" small @click="cancel">
                                    <v-icon>cancel</v-icon>
                                    <span>Cancel</span>
                                </v-btn>
                            </v-card-actions>
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
        props:['data'],
        data: function(){
            return{
                form:{
                    title:null,
                    body:null
                }
            }
        },

        methods:{

             cancel(){
                EventBus.$emit('cancelEditing')
            },

            update(){
                axios.patch(`/api/question/${this.data.slug}`, this.form)
                .then(res =>this.cancel())
            }

        },

        created(){
            this.form = this.data
        }
}
</script>

<style lang="scss" scoped>

</style>
