<!--suppress ALL -->
<template>
  <v-main :style="{padding:0}">
    <v-app>
      <v-content
      >
        <v-app-bar
            app
            :style="{padding:0}"
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
            class="mx-3"
            align="center"
            justify="center"
        >
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
                  <hr>
                  <v-container fluid>
                    <v-card
                        elevation="10"
                        max-width="444"
                        class="mx-auto"
                        light
                    >
                      <v-carousel v-if="loading2">
                        <v-carousel-item
                            :key="i"
                            :src="image"
                            reverse-transition="fade-transition"
                            transition="fade-transition"
                            contain
                        ></v-carousel-item>
                      </v-carousel>
                    </v-card>
                  </v-container>
                  <v-progress-circular
                      v-if="loading"
                      :rotate="-90"
                      :size="60"
                      :width="3"
                      :value="this.a"
                      color="white"
                  >
                    % {{  this.a }}
                  </v-progress-circular>
                  <v-list-item-subtitle>Image to be processed </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-card-actions >
                <v-btn   @change="handleImage"  outlined class="elevation-3" dark>
                  <v-file-input
                      class="mt-3"
                      truncate-length="8"
                      accept="image/png, image/jpeg, image/bmp"
                      prepend-icon="mdi-camera"
                  ></v-file-input>
                </v-btn>
                <v-btn outlined class="elevation-3" dark @click="onUpload">Upload</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
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
                  <div class="overline mb-4">Detected Image</div>
                  <hr>
                  <v-container  v-if="detectedcorosel" fluid>
                    <v-card
                        elevation="10"
                        max-width="444"
                        class="mx-auto"
                        light
                    >
                      <v-carousel >
                        <v-carousel-item
                            v-for="(item,i) in this.posts"
                            :key="i"
                            :src="item.ImageBase64"
                            reverse-transition="fade-transition"
                            transition="fade-transition"
                            contain
                        ></v-carousel-item>
                      </v-carousel>
                    </v-card>
                  </v-container>
                  <v-progress-circular
                      v-if="uploadcircural"
                      :rotate="-90"
                      :size="60"
                      :width="3"
                      :value="this.b"
                      color="white"
                  >
                    % {{  this.b }}
                  </v-progress-circular>
                  <v-list-item-subtitle>Detected Items:  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-card-actions>
                <v-btn outlined class="elevation-3"  dark>
                  <v-icon outlined>mdi-content-save-outline</v-icon>
                </v-btn>
                <v-btn @click="onRefresh" outlined class="elevation-3"  dark>
                  <v-icon outlined>mdi-refresh</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <div class="text-center">
          <v-dialog
              v-model="alert"
              width="500"
          >
            <v-card>
              <v-card-title  class="headline error--text lighten-2">
               Image Not Found
              </v-card-title>
              <v-card-text>
                Please select/upload any image(.jpg .png and other extension).
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="error"
                    text
                    @click="alert=false"
                >
                  I accept
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
        <v-footer
            color="teal"
            app>
          <span class="white--text"> Designed By Berkay BOLAÇ    {{ new Date().getFullYear() }} &copy;</span>
        </v-footer>
      </v-content>
    </v-app>
  </v-main>
</template>

<script>
import axios from 'axios'
var now = new Date().getTime();
export default {
  name: 'About',
  data:() =>({
    uploadcircural:false,
    a:0,
    b:0,
    image:'',
     drawer: null,
      loading: false,
      loading2:false,
      detectedcorosel:false,
      loadingupload:false,
      alert: false,
      loadingcircularpost:'',
      loadingcircularget:'',
      selectedfilewriter:'',
      error: false,
    name:"",
    posts: [],
    errors: [],
  }),
  mounted() {
    setInterval(()=>{
      if(this.a < this.loadingcircularpost)
        this.a = this.a+1
    },25)
    setInterval(()=>{
      if(this.b < this.loadingcircularget)
        this.b = this.b+1
      if(this.b ==100)
      {
        if(this.alert == true)
        {
          this.detectedcorosel = false
        }
        if(this.posts=='')
        {
          this.detectedcorosel = false
        }
        else{
          this.detectedcorosel = true
        }
        if (this.b == 0)
        {

          this.loadingupload=false
        }
        else{
          this.loadingupload = true
          }
      }
    },25)
  },
  watch() {
  },
methods: {
  handleImage(e){
    this.loading2 = true
    this.loading = false
    this.a = 0
    const selectedImage = e.target.files[0]
    this.selectedfilewriter = selectedImage
    this.createBase64Image(selectedImage);
    this.name = selectedImage.name
  },
  createBase64Image(fileObject) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.image = e.target.result;
    };
    reader.readAsDataURL(fileObject);
  },
 timer(){
    this.a = this.a+1;
    return this.a;
  },
 onUpload(){
    this.a = 0
    const article = { "ImageName": this.name, "ImageBase64": this.image, "ImageUploadDate": now };
    if(article.ImageName=="" & article.ImageBase64=="")
    {
    this.alert= true
    return 0;
    }
    this.loading = true
    axios.post("https://localhost:44300/api/images/", article,{
      onUploadProgress: uploadEvent =>{
        this.loadingcircularpost=Math.round(uploadEvent.loaded / uploadEvent.total * 100)
      }
    }).then(response => this.articleId = response.data.id)
        .catch(error => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
   setTimeout(()=>(this.onRefresh()),7000)
  },
  onRefresh(){
    this.b=0
    this.loadingupload=false
    this.uploadcircural = true
    this.detectedcorosel = false
    axios.get(`https://localhost:44300/api/predictedimages`,{
      onDownloadProgress: downloadEvent =>{
        this.loadingcircularget = Math.round(downloadEvent.loaded/downloadEvent.total*100)
        console.log(this.loadingcircularget)
      }
    })
        .then(response => {
          // JSON responses are automatically parsed.
          this.posts = response.data
          if(this.posts=='')
          {
            console.log("burdayım")
            this.alert = true;
            return 0;
          }

        })
        .catch(e => {
          this.alert=true
          this.detectedcorosel = false
          this.loadingcircularget=0
          this.errors.push(e)
        })

  }
},
}
</script>
