<script >
import {store} from './data/store'
import Author from './partials/Author.vue'
import Card from './partials/Card.vue'
import Post from './partials/Post.vue'
import SideCard from './partials/SideCard.vue'



export default {
  components:{
    Card,
    Post,
    SideCard,
    Author
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
  <section>
    <div class="container pb-4 ">
      <div class="row ">
        
        <div class="col-4">
          <div class="title-post">Popular posts</div>
          <Post 
          v-for="post in store.popularPost" :key="post"
          :img="post.img"
          :title="post.title"
          :date="post.date"/>
        </div>
        
        <div class="col-4">
          <div class="title-post">Popular posts</div>
          <Post 
          v-for="post in store.recentPost" :key="post"
          :img="post.img"
          :title="post.title"
          :date="post.date"/>
        </div>

        <div class="col-4">
          <div class="title-post">featured posts</div>
          <SideCard 
          :img="store.featuredPost.img"
          :badge="store.featuredPost.badge"
        :title="store.featuredPost.title"/>
           <div class="title-post">featured author</div>
          <Author 
          :img="store.author.img"
          :name="store.author.name"
          :text="store.author.text"/>
        </div>
       
         
          
          
        

      </div>
      
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as*;

.card-sc{
  background-color: $white;

}
.title-post{
  font-weight: 700;
  text-transform: uppercase;
  font-size: .9rem;
  margin-top: 40px;
  margin-bottom: 15px;
}


</style>
