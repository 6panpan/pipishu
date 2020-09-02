import Vue from "vue";
import VueRouter from "vue-router";
import rankcon from '../views/rankcon.vue'
import rankconItem from '../components/rankconItem.vue'
import rankItemXiangSheng from '../components/rankItemXiangSheng.vue'
import rankItemYuLe from '../components/rankItemYuLe.vue'
import rankItemErTong from '../components/rankItemErTong.vue'

import youshengshu from "../components/youshengshu/youshengshu.vue";
import audioItem from "../components/audio/audioItem.vue"

import youshengintr from "../components/youshengintr.vue";

import searchPage from "../components/search/searchPage.vue";
import searchAlbum from "../components/search/searchAlbum.vue";
import searchAll from "../components/search/searchAll.vue";
import searchShengyin from "../components/search/searchShengyin.vue";
import searchZhubo from "../components/search/searchZhubo.vue";

import zhubo from "../components/zhubo.vue"
import userAlbum from "../components/zhubo/userAlbum.vue"
import userfans from "../components/zhubo/userfans.vue"
import userfollow from "../components/zhubo/userfollow.vue"

import subscribed from "../components/my/subscribed.vue"
import listened from "../components/my/listened.vue"
import buy from "../components/my/buy.vue"
import like from "../components/my/like.vue"

Vue.use(VueRouter);

const Album = () => import("../views/Album");
const My = () => import("../views/My");
const Download = () => import("../views/Download");
const Search = () => import("../views/Search");
const Center = () => import("../views/Center");

const routes = [
    //首页

    {
        path: "/",
        component: Album,
    },

    //我的
    {
        path: "/my",
        component: My,
        children:[
          { path: "subscribed", component: subscribed },
          { path: "listened", component: listened },
          { path: "buy", component: buy },
          { path: "like", component: like }
        ]
    },
    //APP下载
    {
        path: "/download",
        component: Download,
    },
    //搜索框
    {
        path: "/search",
        component: Search,
    },
    //个人中心 
    {
        path: "/center",
        component: Center,
    },
    {
        path: '/rankcon',
        component: rankcon,
        children: [
            { path: "rankconItem", component: rankconItem },
            { path: "rankItemXiangSheng", component: rankItemXiangSheng },
            { path: "rankItemYuLe", component: rankItemYuLe },
            { path: "rankItemErTong", component: rankItemErTong },
            { path: "rankItemYuLe", component: rankItemYuLe },
            { path: "rankItemYuLe", component: rankItemYuLe },
            { path: '/', redirect: "rankconItem" }
        ],
 
    },
    // 有声书
  { 
    path: '/youshengshu',
    component: youshengshu,
    children:[
      // {path: "albumid", component: albumPage}
    ],
  },
  {
    path: '/youshengshu/:albumId/:audioId',
    component: audioItem,
  },
  {
    path: '/youshengintr/:album_id',  
    component: youshengintr,
  },
  // 娱乐
  {
    path: '/yule/:album_id',  
    component: youshengintr,
  },
  // 热门搜索板块
  { 
    path: '/search/:kw', 
    component: searchPage,
    children: [
      { path: "p1", component: searchAll },
      { path: "p2", component: searchAlbum },
      { path: "p3", component: searchShengyin },
      { path: "p4", component: searchZhubo },
      {path:'/', redirect: 'p1'}
    ],
  },

  {
    path: '/zhubo/:u_id', 
    component: zhubo,
    children:[
      {path:"userAlbum",component:userAlbum},
      {path:"userfans",component:userfans},
      {path:"userfollow",component:userfollow},
      // {path:"userAlbum",component:userAlbum}
    ]
  },
];

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes,
});

export default router;
