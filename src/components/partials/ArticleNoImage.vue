<script >
import {store} from '../data/store'
export default {
 props:{
 
  title:String,
  text:String,
  day:Number,
  month:String,
  comment:Number,
  writer:String,
  badge:String


  
 },

  
  data(){
    store
  }
}
</script>

<template>
  
    
    <div class="mt-4">
      <div class="row">
        <div class="col-1">
          <div class="day d-flex justify-content-center align-items-center ">{{ day }}</div>
          <div class="month d-flex justify-content-center align-items-center">{{ month }}</div>
        </div>
        <div class="col">
          <div class="title mb-3">{{ title }}</div>
          <div class="text mb-3 ">{{ text }}</div>
          <div class="row extra ">
            <div></div>
            <div class="col-10 d-flex col ">
              <div class="icon me-3"><i class="fa-regular fa-user"></i> By <span class="tag">{{ writer }}</span></div>
              <div class="icon me-3"><i class="fa-regular fa-folder"></i> <span class="tag">{{ badge }}</span></div>
              <div  class="icon me-3"><i class="fa-regular fa-comments"></i><span class="tag">{{ comment }} Comments</span></div>
              
            </div>
            <div class="col">
              <button class="read">read more</button>

            </div>
          </div>


        </div>

      </div>
    </div>

  
  

  

</template>

<style lang="scss" scoped>
@use '../../assets/scss/main.scss' as*;

.day{
  background-color: $white;
  height: 60px;
  width: 50px;
  font-weight: 800;
}
.month{
  color: $white;
  font-size: .8rem;
  background-color: $black;
  text-transform: uppercase;
  width: 50px;
}
.title{
  font-weight: 700;
  font-size: 2rem;

}
.text{
  color: $t-2;
  font-size: 1rem;
  font-weight: 500;
}
.icon {
  color: $t-2;
  font-weight: 500;
  .tag{
    color: $blue 
  }
}
.read{
  border: 1px solid $b-5;
  border-radius: 5px;
  text-transform: uppercase;
  color: $t-2;
  font-size: .8rem;
  background-color:transparent;
}
.extra{
 padding-bottom: 25px;
  border-bottom: 1px solid $b-2;
}





</style>