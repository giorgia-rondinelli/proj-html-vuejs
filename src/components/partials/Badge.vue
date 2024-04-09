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
  
    <div class="badge-sc d-flex justify-content-center align-items-center  ">
       {{name}}
    </div>


  
  

  

</template>

<style lang="scss" scoped>
@use '../../assets/scss/main.scss' as*;

.badge-sc{
  font-weight: 700;
  text-transform: uppercase;
  color: $white;
  background-color: $black;
  width: 170px;
  height: 50px;
  font-size: .7rem;
  padding: 15px 0px


}
.badge-sc:hover{
  border: 7px solid $b-6;
  background-color: $bg-dark-grey;
}



</style>