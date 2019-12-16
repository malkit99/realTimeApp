<template>
    <div class="login">



      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login To Macroword Fourm</v-toolbar-title>
                <v-spacer />


              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="login">
                  <v-text-field
                    label="Email-ID"
                    name="login"
                    v-model="form.email"
                    type="email"
                    required
                  />

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    v-model="form.password"
                    type="password"
                    required
                  />
                <v-card-actions>
                    <v-btn color="success" type="submit">Login</v-btn>
                      <v-spacer />
                    <router-link to="/signup">
                        <v-btn color="primary">SignUp</v-btn>
                    </router-link>

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
    name:"Login",
  props: {
      source: String,
    },
    data:function(){
        return{
            form:{
            email:null,
            password:null
            }

        }
    },

    created(){
        if(User.logedIn()){
            this.$router.push({name:"fourm"})
        }
    },
    methods:{
        login(){
            User.login(this.form)

        }
    }

}

</script>

<style lang="scss">

</style>
