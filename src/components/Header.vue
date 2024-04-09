<script >
import {store} from './data/store'
export default {
  data(){
    return{
      store,
      header:{
        title:'Everything about Lifestyle, Travel and Gadgets!',
        menuTop:['sign in', 'about us ','contact us ', 'buy now'],
        img:'/img/logo-default-slim.png',
        mainMenu:[ , 'Elements','features','pages','portfolio','blog','shop']


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
        <a class="items ms-4 nav-link active" v-for="item in header.menuTop" :key="item">{{ item }}</a>
      </div>
      
    </div>
    <div class="container logo d-flex align-items-center  ">
      <div  >
        <img :src="header.img" alt="">
      </div>
      
    </div>
    <div class=" mainmenu align-items-center d-flex  ">
      <div class="container d-flex justify-content-between ">
        <ul class="navbar-nav  d-flex">
          <li class="nav-item d-flex  ">
            <a class="nav-link  me-3 home " aria-current="page" href="#">Home</a>
            <a v-for="item in header.mainMenu" :key="item" class="nav-link  me-5 items" aria-current="page" href="#">{{ item }}</a>
          </li>
        </ul>
        <form class="d-flex align-items-center " role="search">
          <div class="input-group-sm">
          <input  class="  form-control  me-2" type="search" placeholder="" aria-label="Search"></div>
          <button class="btn " type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
      </div>
    </div>
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
.logo{
  height:120px ;
  img{
    height: 50px;
  }
}
.mainmenu{
  height: 60px;
  border: 3px solid $white ;
  a{
    text-transform: uppercase;
    font-weight: 700;
   
  }
  .home{
  
  color:$blue;
}
.items{
  color:$t-4;
}

}




</style>
