import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home'
import order from '../views/order'
import find from '../views/find'
import my from '../views/my'
import post from '../components/my/post'

import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect:'/home'
    },
    {
      path:'/home',
      component:home,
      meta:{
        showfooter:true
      }
    },
    {
      path:'/find',
      component:find,
      meta:{
        showfooter:true
      }
    },
    {
      path:'/order',
      component:order,
      meta:{
        showfooter:true
      }
    },
    {
      path:'/my',
      component:my,
      meta:{
        showfooter:true
      }
    },
    {
      path:'/post',
      component:post
    }
  ]
})
