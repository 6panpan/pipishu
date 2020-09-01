import Vue from "vue";
import VueRouter from "vue-router";
// import album from '../views/album.vue'
import rankcon from '../views/rankcon.vue'
import rankconItem from '../components/rankconItem.vue'
import rankItemXiangSheng from '../components/rankItemXiangSheng.vue'
import rankItemYuLe from '../components/rankItemYuLe.vue'
import rankItemErTong from '../components/rankItemErTong.vue'
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
];

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes,
});

export default router;
