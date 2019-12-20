<template>
    <div class="new-reply">
        <v-card>
            <v-card-text>
                <vue-simplemde v-model="body" ref="markdownEditor" />
                <v-card-actions>
                    <v-btn depressed color="teal" @click="submit">
                        Reply
                    </v-btn>
                </v-card-actions>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    props:['questionSlug'],
    data: function(){
        return {
            body:null
        }
    },

    methods: {
        submit(){
            axios.post(`/api/question/${this.questionSlug}/reply`,{body:this.body})
            .then(res => {
                this.body = ''
                EventBus.$emit('newReply',res.data.reply)
                window.scrollTo(0,0)
                })
        }
    },
}
</script>

<style lang="scss" scoped>

</style>
