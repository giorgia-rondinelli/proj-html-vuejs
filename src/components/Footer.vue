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
            img:'/img/our-office-4-square.jpg'
          },
          {
            name:'Lorem ipsum dolor sit, consectetur adipiscing elit.',
            date:'2:45 pm May 14th',
            img:'/img/our-office-5-square.jpg'
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
        categories:['gadget','photography','lifestyle','fashion','receipes','travel','business','architecture','reviews','sports','videos','technology','design'],
        copyright:' Copyright 2020 All Rights Reserved',
        extra:['FAQs', 'Sitemap','Contact Us']
        
      }
     
    }
  }
}
</script>

<template>
  <footer >
    <div class="footer-top">
      <div class="container">
        <div class="touch">Get in Touch</div>
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
    <div class="footer-bottom d-flex align-items-center ">
      <div class="container  ">
        <div class="row">
          <div class="col-1"><img src="/public/img/logo-footer.png" alt=""></div>
        <div class="col d-flex justify-content-between align-items-center ">
          <div class=" copy">&copy {{ footer.copyright }}</div>
          <div class="d-flex">
          <div class="extra" v-for="ex in footer.extra" :key="ex"><i class="fa-solid fa-chevron-right chev"></i>{{ ex }}</div>
        </div>
        </div>
        <div class="chevextra d-flex justify-content-center align-items-center "><i class="fa-solid fa-chevron-up up  "></i></div>
      </div>
      </div>
    </div>

    
  </footer>

</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as*;
.footer-top{
  background-color: $black;
  height: 400px;
  font-size:.8rem;
  position: relative;
 
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
  .touch{
    background-color: $blue;
    width: 100px;
    height: 30px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -10px;
    font-family:'Shadows Into Light';
    font-size: 1rem;
    box-shadow: -10px -0px $blue;
  }
  

}
.footer-bottom{
  height: 95px;
  background-color: #1C2023;
  position: relative;
  
  .img-container{
    width: 80px;
    background-color: blue;
  }
  img{
    filter: brightness(60%);
    object-fit: contain;
    height: 35px;
    width: 80px;
    display: inline;
    
  }
  .copy{
    color: $t-4;
    font-size: .7rem;
  }
  .extra{
    color: $t-3;
    font-size: .8rem;

  }
  .chev{
    font-size: 8px;
    margin-left: 20px;
    margin-right:5px
  }
}
.chevextra{
  background-color: $bg-dark-grey;
  height:50px;
  width: 50px;
  position: absolute;
  bottom: 0;
  right: 10px;
  .up{
    color: $white;
    font-size: 12px;
  }

}
</style>
