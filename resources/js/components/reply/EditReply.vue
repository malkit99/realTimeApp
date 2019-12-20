<template>
    <div class="edit-reply">
       <v-card>
           <v-card-text>
               <vue-simplemde v-model="reply.reply" ref="markdownEditor" />
           </v-card-text>
             <v-card-actions>
                <v-btn color="teal" dark depressed @click="update">
                    <v-icon>
                        update
                    </v-icon>
                    <span>
                        Update
                    </span>
                </v-btn>

                <v-btn color="pink" dark depressed @click="cancel" >
                    <v-icon>
                        cancel
                    </v-icon>
                    <span>
                        Cancel
                    </span>
                </v-btn>
            </v-card-actions>
       </v-card>
    </div>
</template>

<script>
export default {
    props:['reply'],


    methods: {
        cancel(){
            EventBus.$emit('cancelEditing');
        },
        update(){
            axios.patch(`/api/question/${this.reply.question_slug}/reply/${this.reply.id}`,{body:this.reply.reply})
            .then(res =>this.cancel())
        }
    },
}
</script>

<style lang="scss" scoped>

</style>
