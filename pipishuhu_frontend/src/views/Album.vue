<template>
  <div>

    <loginWindow :p="z"></loginWindow>
    <rotation></rotation>

    <lovealbum></lovealbum>
    <albumlist :item="item" v-for="item in type" :key="item.id"></albumlist>

    <div class="rightbox">
      <albumRightRank class="albumRightRank" v-for="(item) in kindArr" :key="item.id" :kind="item"></albumRightRank>
    </div>

    
    <ranking></ranking>
  </div>
</template> 

<script>
import albumRightRank from "./albumRightRank.vue";
import Rotation from "./Rotation";
import LoginWindow from "./LoginWindow";
import albumlist from "./albumlist.vue";
import lovealbum from "./lovealbum.vue";
import ranking from "../components/ranking.vue";
export default {
  data: function () {
    return {
      type: [
        {
          id: 1,
          sort: "有声书",
          kw: [
            "上龙快婿",
            "有声的紫荆",
            "盗墓笔记",
            "鬼吹灯",
            "十宗罪",
            "红楼梦",
            "雪中悍刀行",
          ],
        },
        {
          id: 2,
          sort: "相声评书",
          kw: [
            "郭德纲",
            "单天芳",
            "三国演义",
            "德云社",
            "郭德纲单口相声",
            "岳云鹏",
            "岳云鹏高清相声",
          ],
        },
        {
          id: 3,
          sort: "儿童",
          kw: [
            "米小圈上学记",
            "猴子警长探案集",
            "植物大战僵尸",
            "宝宝巴士",
            "儿童睡前故事",
            "神探迈克狐",
            "西游记",
          ],
        },
        {
          id: 4,
          sort: "头条",
          kw: [
            "有声的紫荆",
            "上龙快婿",
            "盗墓笔记",
            "鬼吹灯",
            "十宗罪",
            "红楼梦",
            "雪中悍刀行",
          ],
        },
        {
          id: 5,
          sort: "音乐",
          kw: [
            "有声的紫荆",
            "上龙快婿",
            "盗墓笔记",
            "鬼吹灯",
            "十宗罪",
            "红楼梦",
            "雪中悍刀行",
          ],
        },
        {
          id: 6,
          sort: "娱乐",
          kw: [
            "有声的紫荆",
            "上龙快婿",
            "盗墓笔记",
            "鬼吹灯",
            "十宗罪",
            "红楼梦",
            "雪中悍刀行",
          ],
        },
      ],

      kindArr: ["有声书", "相声评书", "儿童", "头条", "音乐", "娱乐"],

      z: false
    };
  },
  components: {
    lovealbum,
    albumlist,
    ranking,
    albumRightRank,
    rotation: Rotation,
    loginWindow: LoginWindow,
  },
  methods: {
    beforeRouteLeave(to, from, next) {
    if (to.path == "/my") {
      // console.log(document.cookie);
      if (document.cookie) {
        next();
      } else {
        console.log(this.z);
        this.z = true;
      }
    } else if (to.path == "/zhubo") {
      if (document.cookie) {
        next();
      } else {
        this.z = true;
        console.log(this.z);
      }
    } else if (to.path == "/Download") {
      next(false);
    }
  },
  }
};
</script>

<style scoped>
  .rightbox{
    width: 500px;
    position: absolute;
    left: 1000px;
  }
</style>