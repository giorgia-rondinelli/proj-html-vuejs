<script >
import {store} from '../data/store'
export default {
 props:{
  



  
 },

  
  data(){
    store
  }
}
</script>

<template>

    <div class="cont mt-5 mb-5 ">
      <div class="chev"><i class="fa-solid fa-chevron-left"></i></div>
      <div class="uno">1</div>
      <div>2</div>
      <div>3</div>
      <div class="chev"><i class="fa-solid fa-chevron-right"></i></div>
  </div>
      

</template>

<style lang="scss" scoped>
@use '../../assets/scss/main.scss' as*;
.cont{
  display: flex;

div{
  border: 1px solid $b-4;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $blue;
  font-size: .8rem;
  font-weight: 700;
}
.uno{
  color: white;
  background-color: $blue;
  border: 1px solid $blue;

}
.chev{
  font-size: .6rem;


}
}





</style>