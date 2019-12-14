<template>
<div class="toolbar">
    <v-toolbar>
      <v-toolbar-title>Macroword</v-toolbar-title>

      <v-spacer></v-spacer>

      <div class="hidden-sm-and-down">

        <v-btn text>Fourm</v-btn>
        <v-btn text>Ask Question</v-btn>
        <v-btn text>Category</v-btn>

        <router-link to="/login"><v-btn text>Login</v-btn></router-link>
      </div>
    </v-toolbar>
</div>
</template>

<script>
export default {
    name:"Toolbar"
}
</script>

<style lang="scss" scoped>

</style>
