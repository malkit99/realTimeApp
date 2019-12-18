<template>
    <div class="question">
          <v-card class="pa-2" outlined tile>
           <v-card-title>
               <router-link :to="question.path">{{question.title}}</router-link>

            </v-card-title>
           <v-card-subtitle>
             <span class="primary--text">{{ question.user }}</span>  said  <span class="red--text">{{question.created_at}}</span>
            </v-card-subtitle>

            <v-card-text>
                {{question.body}}
            </v-card-text>

        </v-card>
    </div>
</template>

<script>
export default {
    props:[
        'question'
    ]
}
</script>
