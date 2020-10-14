<template>

  <v-app>

    <v-content>
      <v-app-bar
          app
          color="teal accent-3"
          dark
          elevation
          clipped-left
      >

        <v-btn class="mx-2 elevation-5" @click.stop="drawer = !drawer" outlined white><v-icon>fa-align-left</v-icon></v-btn>
        <v-avatar class="mx-2">
          <img src="@/assets/Enka_logo.svg" >
        </v-avatar>
        <v-spacer>
        </v-spacer>

        <v-switch
            v-model="$vuetify.theme.dark"
            label="Dark Mode"
            color="black"
            light
        >
        </v-switch>

      </v-app-bar>


      <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      style="box-shadow: 8px 0px 5px -6px rgba(0,0,0,0.22);"
    >

      <v-list >
        <v-subheader class=" mt-4 grey--text text--darken-1 display-1">WELCOME </v-subheader>
        <v-list-item  link>
          <v-list-item-action>
              <v-icon  large outlined size="">mdi-account-circle-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <span class="text-left teal--text text--accent-3 font-weight-thin ">Enka Systems</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        <v-subheader class="mt-4 grey--text text--darken-1">Helmet Detector SYSTEM'S</v-subheader>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-arrow-decision-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Detect Changer</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-history</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Detect History</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item  link>
          <v-list-item-action>
            <v-icon>mdi-information-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Detect Warning List</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item  link>
          <v-list-item-action>
            <v-icon>mdi-clipboard-list-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>To Do List</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-btn class="mx-3 elevation-5"> 
              Contact With Us
              <v-icon>mdi-email</v-icon>
            </v-btn>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
             <router-link to="/" tag="none">  
              <v-btn class="mx-12 elevation-5"> 
                Logout
                  <v-icon>mdi-exit-to-app</v-icon>
                </v-btn>
             </router-link>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
      <v-row
          align="center"
          justify="center"
        >
        <v-bottom-navigation
            dark
            shift
            fill
        >
          <v-btn>
            <span>Detect Images Page</span>
            <v-icon>mdi-card-search</v-icon>
          </v-btn>
          <v-btn>
            <span>Detect Vidos Page</span>
            <v-icon>mdi-video-box</v-icon>
          </v-btn>
          <v-btn>
            <span>Detect IP Camera Page</span>
            <v-icon>mdi-video-wireless</v-icon>
          </v-btn>
        </v-bottom-navigation>

        <v-col cols="12" sm="6" class="text-center">
           <v-card
              class="mx-auto"
              max-width="765"
              outlined
              shaped
              fill
              elevation="5"
              color="teal"
              dark>
              <v-list-item>
                <v-list-item-content>
                  <div class="overline mb-4">Detect Image</div>
                  <v-img
                      :src="this.selectedFile"
                      aspect-ratio="2.2"
                      contain
                  ></v-img>
                  <v-list-item>
                    <div class="text-center ma-12">

                    </div>
                  </v-list-item>
                  <v-list-item-subtitle>Image to be processed </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            <v-card-actions>

                <v-btn @change="onFileChanged" outlined class="elevation-3" dark>
                  <label >
                    <input  hidden type="file" >
                    Choose File
                  </label>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col   cols="12" sm="6" class="text-center">
            <v-card
                class="mx-auto"
                max-width="765"
                outlined
                shaped
                fill
                elevation="5"
                color="teal"
                dark>
              <v-list-item>
                <v-list-item-content>
                  <div class="overline mb-4">Detected Image</div>
                  <v-img
                      :src="this.selectedFile"
                      aspect-ratio="2.2"
                      contain
                  ></v-img>
                  <v-list-item>
                    <div class="text-center ma-12">
                    </div>
                  </v-list-item>
                  <v-list-item-subtitle>Detected Items:  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-card-actions>
                <v-btn outlined class="elevation-3"  dark>
                  <v-icon outlined>mdi-content-save-outline</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>



         

    <v-footer
      color="teal"
      app
    >
      <span class="white--text"> Designed By Berkay BOLAÇ    {{ new Date().getFullYear() }} &copy;</span>
    </v-footer>

    </v-content>

  </v-app>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'About',
  components: {

  },
  data:() =>({
    selectedFile: null,
    file:null,
     drawer: null,
     disabled: false,
      readonly: false,
      loading: false,
      flat: true,
      inset: true,
      error: false,
      success: false,
      mandatory: false,
      multiple: false,
      row: false,
      indeterminate: false,
      color: 'accent',
      colors: [
        'accent',
        'teal',
        'blue',
        'error',
        'success',
      ],
   
   
  }),
methods:{
  onFileChanged (event) {
    this.file = event.target.files[0]
    this.selectedFile = URL.createObjectURL(this.file)
    console.log(this.selectedFile)
  },
},

  props: {
      source: String,
    },
  

}
</script>

<style scoped>

.input__label {
   color: black;
}
</style>