<script >
import {store} from '../data/store'
export default {
  props:{
    img:String,
    title: String,
    badge: String,
    text:String

  },
  data(){
    store
  }
}
</script>

<template>
  
  
    <div class="col-4">
      <div class="card-sc">
        <img :src="img" alt="">
        <div class="info-container">
          <div class="badge-sc d-flex justify-content-center ">{{ badge }}</div>
          <div class="title">{{ title }}</div>
          <div class="text">
            {{ text }}
          </div>
        </div>
        
        
      </div>
    </div>
  
  

</template>

<style lang="scss" scoped>
@use '../../assets/scss/main.scss' as*;

.card-sc{
 margin-bottom: 30px;
 position: relative;
  
  img{
    object-fit: cover;
    height: 100%;
    width: 100%;
    filter: brightness(60%);
    
  }
  .info-container{
    position:absolute;
    bottom:20px;
    left:20px;
  }
  .badge-sc{
    color: white;
     width:90px;
     background-color: $blue;
     padding:2px 7px;
     text-transform: uppercase;
     font-size: .7rem;
     font-weight: 600;
     margin-bottom: 8px;
  }
  .title{
    color: white;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 20px;

    
  }
  .text{
    color: white;
    display: none;
  }
  
}

.info-container:hover .text{
  display: block;

}
 


</style>