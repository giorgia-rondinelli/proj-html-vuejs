<script >
import {store} from '../data/store'
export default {
 props:{
  img:String



  
 },

  
  data(){
    store
  }
}
</script>

<template>

      <div class="img">
        <img :src=img alt="">
      </div>
      
      

</template>

<style lang="scss" scoped>
@use '../../assets/scss/main.scss' as*;

img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.img{
  width: 33.33%;
}






</style>