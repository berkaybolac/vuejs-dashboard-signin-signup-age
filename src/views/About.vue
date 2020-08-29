<template>
  <v-app >
    <v-content>
      <v-row>
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
              <span class=" teal--text text--accent-3 font-weight-thin ">Nazif Yılmaz</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        <v-subheader class="mt-4 grey--text text--darken-1">CLIMATE SYSTEM'S</v-subheader>
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
            <v-icon>mdi-warehouse</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Green House Changer</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-history</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Green House History</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item  link>
          <v-list-item-action>
            <v-icon>mdi-information-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Green House Warning List</v-list-item-title>
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

      </v-row>
      
    <v-app-bar
      app
      color="teal accent-3"
      dark
      elevation
      clipped-left 
    >
      <v-btn class="mx-2 elevation-5" @click.stop="drawer = !drawer" outlined white><v-icon>fa-align-left</v-icon></v-btn>
      <v-toolbar-title class="font-weight-light">
        Ser
      </v-toolbar-title>
      <v-toolbar-title class="font-weight-bold">
         AOUT
      </v-toolbar-title>
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
    <v-bottom-navigation
            dark
            shift
            fill
            
          >
            <v-btn>
              <span>Green House 1</span>
              <v-icon>mdi-warehouse</v-icon>
            </v-btn>

            <v-btn>
              <span>Green House 2</span>
              <v-icon>mdi-warehouse</v-icon>
            </v-btn>

            <v-btn>
              <span>Green House 3</span>
              <v-icon>mdi-warehouse</v-icon>
            </v-btn>
            <v-btn>
              <span>Green House 4</span>
              <v-icon>mdi-warehouse</v-icon>
            </v-btn>
            <v-btn>
              <span>Green House 5</span>
              <v-icon>mdi-warehouse</v-icon>
            </v-btn>
            
          </v-bottom-navigation>
        <v-row 
        
          align="center"
          justify="center"
        >
        <v-col v-for="i in 4" :key="i"  cols="12" sm="3" class="text-center">
           <v-card
              class="mx-auto"
              max-width="344"
              outlined
              shaped
              elevation="5"
              color="teal"
              dark
                  >
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">Heat</div>
                  <v-list-item>
                    <div class="text-center ma-12">
                      <v-progress-circular
                        
                        rotate="120"
                        size="90"
                        value="40"
                        width="6"
                        color="white"
                      >40 C°</v-progress-circular>
                    </div>
                  </v-list-item>
                  <v-list-item-subtitle>If this heat 60C° please contact us. </v-list-item-subtitle>
                </v-list-item-content>
                   <v-list-item-avatar
                  tile
                  size="85"
                  
                >
                <h1 class="text-left display-1">
                           40 C°
                          </h1>
                </v-list-item-avatar>
               
              </v-list-item>

              <v-card-actions>
                <v-btn class="elevation-3" color="teal accent-3" light >
                  <v-icon outlined >mdi-refresh</v-icon> 
                </v-btn>
                <v-btn  class="elevation-3" color="teal accent-3" light="">
                  <v-icon outlined >mdi-content-save-outline</v-icon> 
                  </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row
          align="center"
          justify="center"
        >
        <v-col v-for="i in 4" :key="i"  cols="12" sm="3" class="text-center">
           <v-card
              class="mx-auto"
              max-width="344"
              outlined
              shaped
              elevation="5"
              color="teal acent-3"
              dark
                  >
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">OVERLINE</div>
                  <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                  <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                  tile
                  size="80"
                  color="grey"
                >
                
                </v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <v-btn text>Button</v-btn>
                <v-btn text>Button</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row
          align="center"
          justify="center"
        >
        <v-col v-for="i in 4" :key="i"  cols="12" sm="3" class="text-center">
           <v-card
              class="mx-auto"
              max-width="344"
              outlined
              shaped
              elevation="5"
              color="teal acent-3"
              dark
                  >
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">OVERLINE</div>
                  <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                  <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                  tile
                  size="80"
                  color="grey"
                >
                
                </v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <v-btn text>Button</v-btn>
                <v-btn text>Button</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          
        </v-row>
         <v-row
          align="center"
          justify="center"
        >
        <v-col cols="12" sm="3" class="text-center">
           Rüzgar sensörleri
          </v-col>
          <v-col cols="12" sm="3" class="text-center">
           Drenaj
          </v-col>
          <v-col  cols="12" sm="3" class="text-center">
           Gübreleme 
          </v-col>
          
        </v-row>
     

         

    <v-main>
     
    </v-main>
    <v-footer
      color="teal accent-3"
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