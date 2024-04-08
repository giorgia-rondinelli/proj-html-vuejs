<script >
import {store} from './data/store'
export default {
  data(){
    return{
      store,
      header:{
        title:'Everything about Lifestyle, Travel and Gadgets!',
        menuTop:['sign in', 'about us ','contact us ', 'buy now']


      }
    }
  }
}
</script>

<template>
  <header>
    <div class="top-bar d-flex align-items-center ">
      <div class="container d-flex  ">
        <div class="title">{{header.title}}</div>
        <div class="items ms-4" v-for="item in header.menuTop" :key="item">{{ item }}</div>
      </div>
      
    </div>


    <div><div class="container">porto</div></div>
    <div><div class="container">home</div></div>
  </header>

</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as*;

.top-bar{
  background-color: $blue;
  height: 50px;
  
  font-size: 0.8rem;
  

  .title{
    color: #a6d6ed;

  }
  .items{
    color: white;
    text-transform: uppercase;
   

  }
}


</style>
