<template>
  <div class="hello">
    <form @submit.prevent="dersadd">
      <input type="text" data-vv-name='sad' v-validate="'required|min:5'" placeholder="Ders ekle" v-model="sad" >
      <p class= "alert" v-if="errors.has('sad')">{{errors.first('sad')}}</p>
    </form>
    
    <h1>{{ msg }}</h1>
    <ul class = "list-class">
      <p class= "list-class" v-for="(asd,index) in dersler" :key='index'> {{index+1}}.{{asd.ders}}</p>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  props: {
    msg: String
  },
  watch :{
    
  },
  data : () =>({
   sad: "",
  dersler: [
    {"ders":"Matematik"},
    {"ders": "Fizik"}
  ]
  }),
  methods:{
   
    dersadd(){
      this.$validator.validateAll().then((r)=>{
        if(r){
          this.dersler.push({ders: this.sad})
          this.sad = ""
        }else{
          console.log('en az 5 karakter')
        }
      })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.alert{
  background: #ffff32;
}
.hello{
  background: peru;
  padding: 10px;
    text-align: center;
}
.list-class{
  background: yellowgreen;
  padding: 10px;
    text-align: center;
}
</style>
