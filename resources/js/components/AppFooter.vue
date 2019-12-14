<template>
<div class="AppFooter">
    <v-footer padless>
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </v-col>
  </v-footer>
</div>
</template>

<script>
export default {
    name:"AppFooter"
}
</script>

<style lang="scss" scoped>

</style>
