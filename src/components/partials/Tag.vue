<script >
import {store} from '../data/store'
export default {
 props:{

  name:String
 



  
 },

  
  data(){
    store
  }
}
</script>

<template>
 
  <div class="name  ">{{ name }}</div>


</template>

<style lang="scss" scoped>
@use '../../assets/scss/main.scss' as*;

.name{
  background-color: black;
  border-radius: 20px;
  color: $white;
  text-transform: uppercase;
  padding: 2px  10px;
  font-size: 0.8rem;
  font-weight: 700;
  margin-right: 10px;
  margin-top: 8px
}







</style>