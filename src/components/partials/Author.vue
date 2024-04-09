<script >
import {store} from '../data/store'


export default {
 props:{
  img:String,
  name:String,
  text:String
 
  },
  data(){
    return{
      store,
    }
  }
}

</script>

<template>
  
  <div class="d-flex ">
    <div class="img-cont"><img :src="img" alt=""></div>
    
    <div >
      <div class="name">{{ name }}</div>
      <div class="text">{{ text }}</div>
    </div>
    
  </div>
  
  

</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as*;

.img-cont{

  height: 100px;
  width: 200px;
  margin-right:10px;
  margin-bottom:30px

  


}
img{
    object-fit:cover;
    width: 100%;
    height: 100%;
   
  }
.name{
  font-size: .9rem;
  font-weight:700 ;
  margin-left: 10px;
}
.text{
  margin-left: 10px;
  color: $t-2;
  font-size: .7rem;

}




</style>
