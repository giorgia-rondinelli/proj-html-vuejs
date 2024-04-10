<script >
import {store} from './data/store'
import Author from './partials/Author.vue'
import Badge from './partials/Badge.vue'
import Card from './partials/Card.vue'
import Post from './partials/Post.vue'
import SideCard from './partials/SideCard.vue'
import Article from './partials/Article.vue'
import Tweet from './partials/Tweet.vue'
import Collage from './partials/Collage.vue'
import Tag from './partials/Tag.vue'




export default {
  components:{
    Card,
    Post,
    SideCard,
    Author,
    Badge,
    Article,
    Tweet,
    Collage,
    Tag
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
  <section class="section-badge">
    <div class="container container-badge  d-flex justify-content-between  align-items-center ">
      <i class="fa-solid fa-chevron-left"></i>
      <Badge
      v-for=" badge in store.badges" :key="badge" 
      :name="badge"/>
      <i class="fa-solid fa-chevron-right"></i>
      
    </div>

  </section>
  <section class="section-article">
    <div class="container ">
      <div class="row" >
      <div class="col-9">
      <Article v-for="article in store.articles" :key="article"
      :img="article.img"
      :day="article.date.day" 
      :month="article.date.month" 
      :title="article.title"
      :text="article.text"
      :writer="article.writer"
      :comment="article.comment"
      :badge="article.badge"
      />
      </div>
      <div class="col-3">
        <div class="title pb-2  pt-5">latest from twitter</div>
        <Tweet  v-for="tweet in store.tweets" :key="tweet"
        :text="tweet.text"
        :time="tweet.time"
        :date="tweet.date"/>
        <div class="title pb-2  pt-5">photos from instagram</div>
        <div class="d-flex flex-wrap  ">
          <Collage v-for="photo in store.instaPhoto" :key="photo"
          :img="photo"/>
        </div>
        <div class="title pb-2  pt-5">tags</div>
        <div class="d-flex">
        <Tag 
        v-for="tag in store.tags" :key="tag"
        :name="tag"/>
        </div> 
        <div class="title pb-2  pt-5">find us on facebook</div>
        <div class="facebook d-flex align-items-center ps-3 mt-1">Olkier Themes</div>
        
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
.section-badge{
  background-color: $blue;
  
  .container-badge{
    height: 150px;
  }
 
}
.title{
  text-transform: uppercase;
  font-weight: 700;
  font-size: .8rem;
}
.facebook{
  border-left: 5px solid $b-2;
  height: 50px;
  color: $blue;
  font-weight: 600;
}




</style>
