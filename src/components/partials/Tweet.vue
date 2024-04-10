<script >
import {store} from '../data/store'
export default {
 props:{
  text:String,
  time:String,
  date:String



  
 },

  
  data(){
    store
  }
}
</script>

<template>
  <div class="row pb-3">
    <div class="col-1"><i class="fa-brands fa-twitter"></i></div>
    <div class="col-11">
      <div class="text">{{ text }}</div>
      <div class="info">{{ time }} {{ date }}</div>
    </div>
  </div>
  

  
  

  

</template>

<style lang="scss" scoped>
@use '../../assets/scss/main.scss' as*;

.text{
  color: $t-2;
  font-size: .8rem;
}
.info{
  font-size: .8rem;
  color: $blue;


}




</style>