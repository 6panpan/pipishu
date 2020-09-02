import Vue from "vue";
import VueRouter from "vue-router";
import rankcon from '../views/rankcon.vue'
import rankconItem from '../components/rankconItem.vue'
import rankItemXiangSheng from '../components/rankItemXiangSheng.vue'
import rankItemYuLe from '../components/rankItemYuLe.vue'
import rankItemErTong from '../components/rankItemErTong.vue'
import youshengshu from "../components/youshengshu/youshengshu.vue";
import searchPage from "../components/search/searchPage.vue";
import searchAlbum from "../components/search/searchAlbum.vue";
import searchAll from "../components/search/searchAll.vue";
import searchShengyin from "../components/search/searchShengyin.vue";
import searchZhubo from "../components/search/searchZhubo.vue";

Vue.use(VueRouter);

const Album = () => import("../views/Album");
const My = () => import("../views/My");
const Download = () => import("../views/Download");
const Search = () => import("../views/Search");
const Zhubo = () => import("../views/Zhubo");

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
        path: "/zhubo",
        component: Zhubo,
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
  // {
  //   path: '/youshengintr/:album_id',  
  //   component: youshengintr,
  //   // youshengintr是周月的组件
  // },
  // 搜索板块
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
];

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes,
});

export default router;
