<template >
<div >
  <v-app >
    <v-content>
      <v-container  class=" fill-height" fluid>
          <v-row  align="center" justify="center">
            <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-16">
                <v-window v-model ="step">
                  <v-window-item :value="1">
                    <v-row>
                      <v-col cols="12" md="8">
                      <v-card-text class="mt-12 ">
                        <h1 class=" text-center display-2 teal--text text--accent-3 "> Sign in to 
                          <span class=" text-start display-2 teal--text text--accent-3 font-weight-thin ">Ser</span>
                        <span class=" text-start display-2 teal--text text--accent-3 font-weight-bold ">AOT</span></h1> 
                        <div class="text-center" mt-4>
                         <v-btn class="mx-2 elevation-5" fab outlined >
                            <v-icon>fab fa-facebook-f</v-icon>
                          </v-btn>
                          <v-btn class="mx-2 elevation-5" fab outlined>
                            <v-icon>fab fa-google-plus-g</v-icon>
                          </v-btn>
                          <v-btn class="mx-2 elevation-5" fab  outlined>
                            <v-icon>fab fa-microsoft</v-icon>
                          </v-btn>
                        </div>
                        <br>
                        <h4 class="text-center ml-4"> Ensure email for registration</h4>
                        <v-form>
                          <v-text-field
                          label="Email"
                          name="Email"
                          prepend-icon="email"
                          type="text"
                          color="teal accent-3"
                          />
                          <v-text-field
                          label="Password"
                          name="password"
                          prepend-icon="lock"
                          type="password"
                          color="teal accent-3"
                          />
                        </v-form>
                        <h3 class="text-center mt-3"> Forget your password? </h3>
                      </v-card-text>
                      
                      <div class ="text-center mt-3">
                        <router-link to="/about" tag="none"> 
                        <v-btn rounded color="teal accent-3" dark >
                          Sign In
                        </v-btn>
                         </router-link>
                       </div>
                      </v-col>
                      <v-col cols="12" md="4"  class="teal accent-3">
                        <v-row>
                          <v-col cols="12" md="4" >
                            <v-switch
                            v-model="$vuetify.theme.dark"
                            label="Dark Mode" 
                            color="black"
                            light
                          >
                          </v-switch>
                          </v-col>
                        </v-row>
                        <v-card-text class="white--text mt-12">
                          <h2 class="text-center display-3">
                            Hello, SerAOUT ! 
                          </h2>
                          <h5 class="text-center">
Welcome to SerAOT autonomous systems, another world awaits you after logging in!</h5>
                        </v-card-text>
                        <div class="text-center">
                          <v-btn rounded outlined="" dark @click="step++">SIGN UP</v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-window-item>
                  <v-window-item :value="2">
                    <v-row class="fill-height" >
                      <v-col cols="12" md="4" class="teal accent-3">
                       <v-card-text class="white--text mt-12">
                       <h1 class="text-center display-1">Welcome Back!</h1>
                       <h5 class="text-center">Keep connected with us please login with your personel info.</h5>
                       </v-card-text>
                       <div class="text-center">
                         <v-btn rounded outlined dark @click="step--">SIGN IN</v-btn>
                       </div>
                      </v-col>
                      <v-col cols="12" md="8">
                        <v-card-text class="mt-12">
                          <h1 class="text-sm-center teal--text text--accent-3">Create Account</h1>
                          <div class="text-center mt-4">
                            <v-btn class="mx-2" fab outlined>
                              <v-icon>fab fa-facebook-f</v-icon>
                            </v-btn>
                            <v-btn class="mx-2" fab  outlined>
                              <v-icon>fab fa-google-plus-g</v-icon>
                            </v-btn>
                            <v-btn class="mx-2" fab  outlined>
                              <v-icon>fab fa-microsoft</v-icon>
                            </v-btn>
                          </div>
                          <h4 class="text-center mt-4">Ensure your email & SerAOUT ID for registration</h4>
                          <v-form>
                            <v-text-field
                            label="Name"
                            name ="Name"
                            prepend-icon="person"
                            type="text"
                            color="teal accent-3"
                            />
                            <v-text-field
                            label="Email"
                            name ="Email"
                            prepend-icon="email"
                            type="text"
                            color="teal accent-3"
                            />
                            <v-text-field
                            label="Password"
                            name ="password"
                            prepend-icon="lock"
                            type="password"
                            color="teal accent-3"
                            />
                             <v-text-field
                            label="Your SerAOUT ID"
                            name ="password"
                            prepend-icon="fa-key"
                            type="password"
                            color="teal accent-3"
                            />
                          </v-form>
                          <div class="text-center">
                            
                            <v-btn  rounded color="teal accent-3" dark >
                              SIGN UP
                            </v-btn>
                          
                          </div>
                        </v-card-text>
                       </v-col>
                    </v-row>
                   
                  </v-window-item>
                </v-window>
            </v-card>
            </v-col>
          </v-row>
      </v-container>
    </v-content>
  </v-app>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {

  },
  data:() =>({
    step: 1,
    darkinitiliazer: "$vuetify.theme.dark"
   
  }),
  
  props:{
    source: String
  }
}
</script>

<style>



</style>