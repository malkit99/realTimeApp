<template>
    <div class="signup">
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
                <v-toolbar-title>SignUp To Macroword Fourm</v-toolbar-title>
                <v-spacer />


              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="signup">
                  <v-text-field
                    label="Name"
                    name="name"
                    v-model="form.name"
                    type="text"
                    required
                  />
                <span class="red--text" v-if="errors.name"> Error-: {{errors.name[0]}}</span>
                   <v-text-field
                    label="Email-ID"
                    name="login"
                    v-model="form.email"
                    type="email"
                    required
                  />
                <span class="red--text" v-if="errors.email"> Error-: {{errors.email[0]}}</span>
                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    v-model="form.password"
                    type="password"
                    required
                  />
                <span class="red--text" v-if="errors.password"> Error-: {{errors.password[0]}}</span>
                    <v-text-field
                    id="password_confirmation"
                    label="Re-Type Your Password"
                    name="password_confirmation"
                    v-model="form.password_confirmation"
                    type="password"
                    required
                  />


                    <v-card-actions>

                    <v-btn color="success" type="submit">Submit</v-btn>

                    <v-spacer />
                    <router-link to="/login">
                        <v-btn color="primary">Login</v-btn>
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
    name:"Signup",
    props: {
      source: String,
    },
    data: function(){
        return{
            form:{
                name:null,
                email:null,
                password:null,
                password_confirmation:null

            },
            errors:{}
        }
    },
 created(){
        if(User.logedIn()){
            this.$router.push({name:"fourm"})
        }
    },
    methods:{
        signup(){
            axios.post('/api/auth/signup', this.form)
            .then(res => User.responseAfterLogin(res))
            .catch(error => this.errors = error.response.data.errors)
        }
    }
}
</script>

<style lang="scss">

</style>
