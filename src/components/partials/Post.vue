<script >
import {store} from '../data/store'


export default {
 props:{
  img:String,
  title:String,
  date:String
 
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
      <div class="title">{{ title }}</div>
      <div class="date">{{ date }}</div>
    </div>
    
  </div>
  
  

</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as*;

.img-cont{

  height: 50px;
  width: 50px;
  margin-right:10px;
  margin-bottom:30px

  


}
img{
    object-fit: contain;
    width: 100%;
    height: 100%;
   
  }
.title{
  font-size: .9rem;
}
.date{
  color: $t-2;
  font-size: .7rem;

}




</style>
