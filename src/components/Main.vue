<script >
import {store} from './data/store'
import Card from './partials/Card.vue'

export default {
  components:{
    Card
  },
  data(){
    return{
      store,
    }
  }
}

</script>

<template>
  <section class="card-sc">
    <div class="container pt-5 pb-5 ">
      <div class="row">
        <Card v-for="card in store.cards" :key="card"
        :img="card.img"
        :badge="card.badge"
        :title="card.title"
        :text="card.text"/>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as*;

.card-sc{
  background-color: $white;

}


</style>
