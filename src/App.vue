<script >
import Main from './components/Main.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';


export default {
  components:{
    Main,
    Header,
    Footer

  },
  data(){
    return{
      
    }
  }

}

</script>

<template>
  
    <Header />
    <Main />
    <Footer />

</template>

<style lang="scss" scoped>
@use './assets/scss/main.scss'

</style>
