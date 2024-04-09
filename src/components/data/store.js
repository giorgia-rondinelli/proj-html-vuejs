

import { reactive } from 'vue'

export const store = reactive({
  cards:[
    {
      badge:'photography',
      img:'/img/blog-46.jpg',
      title:'How To Take Better Concert Pictures In 30 Seconds',
      text:'  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio optio similique possimus dignissimos molestias perferendis'

    },
    {
      badge:'gadgets',
      img:'/img/blog-47.jpg',
      title:'Gadgets That Make Your Smartphone Even Smarter',
      text:'  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio optio similique possimus dignissimos molestias perferendis'
    },
    {
      badge:'travel',
      img:'/img/blog-48.jpg',
      title:'20 Top-Rated Tourist Attractions in Manhattan',
      text:'  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio optio similique possimus dignissimos molestias perferendis'
    },
    {
      badge:'lifestyle',
      img:'/img/blog-49.jpg',
      title:'The Best Way to Ride a Motorcycle',
      text:'  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio optio similique possimus dignissimos molestias perferendis'
    },
    {
      badge:'travel',
      img:'/img/blog-50.jpg',
      title:'5 Fun Things to Do at the Beach',
      text:'  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio optio similique possimus dignissimos molestias perferendis'
    },
    {
      badge:'recipes',
      img:'/img/blog-51.jpg',
      title:'Amazingly Fresh Fruit And Herb Drinks For Summer',
      text:'  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio optio similique possimus dignissimos molestias perferendis'
    }
   
  ],
  popularPost:[
    {
      img:'img/blog-55.jpg',
      title:'Simple Ways to Have a Pretty Face',
      date:'January 12, 2019'

    },
    {
      img:'img/blog-56.jpg',
      title:'Ranking the greatest players in basketball',
      date:'January 12, 2019'

    },
    {
      img:'img/blog-57.jpg',
      title:'4 Ways to Look Cool in Glasses',
      date:'January 12, 2019'

    },
    {
      img:'img/blog-58.jpg',
      title:'Top Camper Trailer Towing Tips',
      date:'January 12, 2019'

    },
    {
      img:'img/blog-59.jpg',
      title:'5 Lovely Walks in New York January ',
      date:'January 12, 2019'

    } 
  ],
  recentPost:[

 
    {
      img:'img/blog-65.jpg',
      title:'Main Reasons To Stop Texting And Driving January',
      date:'January 12, 2019'

    },
    {
      img:'/img/blog-66.jpg',
      title:'Tips to Help You Quickly Prepare your Lunch',
      date:'January 12, 2019'

    },
    {
      img:'img/blog-67.jpg',
      title:'Why should I buy a smartwatch?',
      date:'January 12, 2019'

    },
    {
      img:'img/blog-68.jpg',
      title:'The best augmented reality smartglasses',
      date:'January 12, 2019'

    },
    {
      img:'img/blog-69.jpg',
      title:'12 Healthiest Foods to Eat for Breakfas',
      date:'January 12, 2019'

    }

  ],
  featuredPost:{
    title:'Tips to Help You Quickly Prepare your Lunch',
    badge:'Recipes',
    img:'/img/blog-66.jpg'

  },
  author:{
    img:'/img/avatar.jpg',
    name:'John Doe',
    text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio optio similique possimus dignissimos molestias perferendis'

  }



})