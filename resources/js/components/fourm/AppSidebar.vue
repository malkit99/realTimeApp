<template>
    <div class="app-sidebar">
      <v-card>
          <v-toolbar flat dark color="primary">
              <v-toolbar-title>Categories</v-toolbar-title>
          </v-toolbar>
          <v-list>
              <v-list-item
              v-for="category in categories"
              :key="category.id"
              >
                  <v-list-item-content>
                      <v-list-item-title>{{ category.name}}</v-list-item-title>
                  </v-list-item-content>
              </v-list-item>
          </v-list>
      </v-card>
    </div>
</template>
<script>
export default {

    data: function(){
        return{
            categories:{}
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
