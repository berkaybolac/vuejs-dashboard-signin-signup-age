<!--suppress ALL -->
<template >
<div>
  <v-app >
    <v-content >
      <v-container  class="fill-height " fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="8" >
            <v-card class="elevation-16 teal accent-3" >
              <v-window v-model ="step">
                <v-window-item  :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-container
                          align="center"
                          justify="center"
                          class="rounded-lg"
                      >
                        <v-card class ="elevation-0">
                          <v-img
                              src="@/assets/Enka_logo.svg"
                              aspect-ratio="4"
                              align="center"
                              justify="center"
                              contain
                              class="teal accent-3"
                          ></v-img>
                        </v-card>
                        </v-container>
                      <v-card-text class="mt-12 ">
                        <div class="text-center" mt-4>
                          <h2 class="display-2">
                            <vue-typed-js :strings="['Technology for a Better Future', 'Engineering for a Better Future']">
                              <h2  class="display-2 typing"></h2>
                            </vue-typed-js>
                          </h2>
                        </div>
                      </v-card-text>
                      <div class ="text-center mt-3">
                        <router-link to="/about" tag="none">
                          <v-btn rounded color="teal" dark >
                            <h2 class="overline">
                              <vue-typed-js :strings="['Lets start']">
                                <h2  class="overline typing"></h2>
                              </vue-typed-js>
                            </h2>
                          </v-btn>
                        </router-link>
                      </div>
                    </v-col>
                    <v-col  cols="12" md="4"  class="teal">
                      <v-row   >
                        <v-col  cols="12" md="4" >
                          <v-switch
                              v-model="$vuetify.theme.dark"
                              label="Dark Mode"
                              color="black"
                              light
                          >
                          </v-switch>
                        </v-col>
                      </v-row>
                      <div class="text-center">
                        <v-btn rounded outlined="" dark @click="step++">What is A.I?</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height" >
                    <v-col cols="12" md="4" class="teal">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Welcome Back!</h1>
                        <h5 class="text-center">Other Page Is New Era</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step--">Return A.I Page</v-btn>
                      </div>
                    </v-col>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-sm-center ">Artificial Intelligence </h1>
                        <h2 class="overline">
                          <vue-typed-js :strings="['Artificial intelligence (AI),','is intelligence demonstrated by machines, unlike the natural intelligence displayed by humans and animals.  Artificial intelligence (AI), is intelligence demonstrated by machines, unlike the natural intelligence displayed by humans and animals. Leading AI textbooks define the field as the study of intelligent agents: any device that perceives its environment and takes actions that maximize its chance of successfully achieving its goals. Colloquially, the term artificial intelligence is often used to describe machines (or computers) that mimic cognitive functions that humans associate with the human mind, such as learning and problem solving.']">
                            <h4 class="text-center mt-4 typing">
                              </h4>
                          </vue-typed-js>
                        </h2>
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
export default {
  name: 'Home',
  components: {
  },
  data:() =>({
    step: 1,
  }),
}
</script>
