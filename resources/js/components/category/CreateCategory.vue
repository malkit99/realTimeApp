<template>
    <div class="create-category">
       <v-container fluid >
           <v-row align="center" justify="center">
               <v-col cols="12" md="6" sm="8">
                   <v-card>
                       <v-toolbar dark color="primary">
                           <v-toolbar-title>
                               Create Category
                           </v-toolbar-title>
                           </v-toolbar>
                           <v-card-text>
                               <v-form @submit.prevent="submit">
                                   <v-text-field
                                   label="Category"
                                   v-model="form.name"
                                   required
                                   >
                                   </v-text-field>

                                   <v-card-actions>
                                       <v-btn small depressed dark color="pink" type="submit" v-if="editSlug">
                                           <v-icon>update</v-icon>
                                           <span>Upadate</span>
                                       </v-btn>

                                        <v-btn small depressed dark color="teal" type="submit" v-else>
                                           <v-icon>save</v-icon>
                                           <span>Save</span>
                                       </v-btn>
                                   </v-card-actions>
                               </v-form>
                           </v-card-text>

                   </v-card>
               </v-col>
           </v-row>

           <v-row>
               <v-col cols="12">
                   <v-card>
                       <v-toolbar color="primary" dark flat>
                           <v-toolbar-title>Categories</v-toolbar-title>
                       </v-toolbar>
                    <div>
                       <v-list
                       v-for="(category,index) in categories"
                        :key="category.id"
                       >
                           <v-list-item>
                                <v-list-item-icon>
                                    <v-btn icon @click="edit(index)">
                                    <v-icon  color="pink">edit</v-icon>
                                    </v-btn>

                                    <v-btn icon @click="destory(category.slug)" >
                                    <v-icon  color="pink">delete</v-icon>
                                     </v-btn>
                                </v-list-item-icon>

                               <v-list-item-content>
                                   <v-list-item-title>
                                       {{category.name}}
                                   </v-list-item-title>
                               </v-list-item-content>
                           </v-list-item>
                             <v-divider></v-divider>
                       </v-list>

                </div>
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
                name:null,
                editSlug:null
            },
            categories:{}
        }
    },
        created(){
            if(!User.admin()){
                this.$router.push('/fourm')
            }
            axios.get('/api/category')
            .then(res => this.categories = res.data.data)
    },
    methods:{
        submit(){

            this.editSlug ? this.update() : this.create()

        },

        update(){
            axios.patch(`/api/category/${this.editSlug}`, this.form)
             .then(res => {
                this.categories.unshift(res.data)
                this.form.name = null
            })
        },

        create(){
             axios.post('/api/category', this.form)
            .then(res => {
                this.categories.unshift(res.data)
                this.form.name = null
            })
        },

        destory(slug,index){
            axios.delete(`/api/category/${slug}`)
            .then(res => this.categories.splice(index,1))
        },

        edit(index){
            this.form.name = this.categories[index].name
            this.editSlug = this.categories[index].slug
            this.categories.splice(index,1)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
