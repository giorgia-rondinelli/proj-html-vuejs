<script >

export default {
  data(){
    return{
      footer:{
        info1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu pulvinar magna semper scelerisque.',
        info2:'Praesent venenatis turpis vitae purus semper, eget sagittis velit venenatis ptent taciti sociosqu ad litora...',
        posts:[
          {
            name:'Lorem ipsum dolor sit, consectetur adipiscing elit.',
            date:'1:45 pm May 14th',
            img:'/public/img/our-office-4-square.jpg'
          },
          {
            name:'Lorem ipsum dolor sit, consectetur adipiscing elit.',
            date:'2:45 pm May 14th',
            img:'/public/img/our-office-5-square.jpg'
          }
        ],
        comments:[
          {
            name:'john Doe',
            postName:'Lorem ipsum dolor sit amet',
            date:'3:38 pm May 14th'
            

          },
          {
            name:'Mary Smith ',
            postName:'Lorem ipsum dolor sit amet',
            date:'3:38 pm May 14th'
            

          },
        ],
        categories:['gadget','photography','lifestyle','fashion','receipes','travel','business','architecture','reviews','sports','videos','technology','design']
        
      }
     
    }
  }
}
</script>

<template>
  <footer >
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-4">
            <div class="title   ">ABOUT THE BLOG </div>
            <div class="info mb-3 ">{{ footer.info1 }}</div>
            <div class="info mb-2  ">{{ footer.info2 }}</div>
            <a class="nav-link text-white ">VIEW MORE <i class="fa-solid fa-chevron-right"></i></a>
          </div>
         
          <div class="col-3">
            <div class="title">RECENT POSTS  </div>
            <div v-for="post in footer.posts" :key="post" class="row mb-3  ">
              <div class="col  d-flex  ">
                <div class="img-container m-1 me-3"> <img :src="post.img" alt=""></div>
                <div>
                  <div class="text">{{post.name}}</div>
                  <div class="date mt-1 ">{{ post.date }}</div>
                </div>
              
                
              </div>
              
            </div>
            
          </div> 
          <div class="col-3">
            <div class="title">RECENT COMMENTS </div>
              <div v-for="comment in footer.comments" :key="comment" class="text-white">
                <div class="comment"><i class="fa-solid fa-chevron-right chev"></i><span class="name">{{ comment.name }}</span> commented on <span class="postname">{{ comment.postName }}</span></div>
                <div class="date mt-1 mb-3 ">{{comment.date }}</div>
              </div>
          </div>
            
            



          <div class="col">
            <div class="title">CATEGORIES </div>
            <div>
              <span v-for="category in footer.categories" :key="category" class="badge category ">{{ category }}</span>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
    <div class="container">porto</div>

  </footer>

</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as*;
.footer-top{
  background-color: $black;
  height: 400px;
  font-size:.8rem;
 
  .title{
    color: white;
    margin-top:50px;
    margin-bottom: 10px;
  }
 .info{
      color:$t-3;
      line-height: 25px;
    }
  .img-container{
    height: 70px;
    width: 70px;
    
    img{
      object-fit: cover;
      border-radius:50%;
      height: 65px;
      width: 65px;
    }
   
   

  }
  .date{
      color:$t-3;
      
    }
  .text{
    color:$bg-grey;

  }
  .comment{
    line-height: 30px;
    color: $t-1;

  
    .chev{
      color: $blue;
      margin-right: 10px;
      font-size: 10px;
      
    }
    .name{
      font-weight:700 ;
      color: $white;
    }
    .postname{
      color: $blue;
    }
  }
  .category{
    text-transform: uppercase;
    background-color: black;
    padding: 8px;
    font-size: 0.6rem;
    margin-left: 5px;
    margin-bottom: 7px;
  }

}

</style>
