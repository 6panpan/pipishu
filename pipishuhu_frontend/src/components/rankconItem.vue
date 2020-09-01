<template>
  <div class="rank-list">
    <div class="list-item" v-for="(item,index) in ranklist" :key="index">
      <span class="list-num">{{index+1}}</span>
      <img :src="item.album_url" />
      <div class="bofang-Icon"></div>
      <span class="list-right">
        <div class="list-album-name">{{item.album_name}}</div>
        <i class="list-kind">{{item.kind}}</i>
        <i class="list-nickname iconfont iconyonghu">{{item.nickname}}</i>
        <i class="list-album-amount">
          <span class="tubiao iconfont icontingge"></span>
          <span class="tubiao" v-if="item.album_amount.toString().length<5">{{item.album_amount}}</span>
          <span
            class="tubiao"
            v-else-if="item.album_amount.toString().length<9"
          >{{(item.album_amount/10000).toFixed(2)+"万"}}</span>
          <span
            class="tubiao"
            v-else-if="item.album_amount.toString().length>8"
          >{{(item.album_amount/100000000).toFixed(2)+"亿"}}</span>
        </i>
        <div class="item-inf">{{item.intro}}</div>
        <div class="list-right-foot">
          <div class="latest-audio">{{item.latest_audio}}</div>

          <div class="detailed-album">专辑详情</div>

          <div class="album-not-follow" @click="follow">收藏</div>
          <div class="album-follow">已收藏</div>
        </div>
      </span>
    </div>
  </div>
</template>
<script>
import { log } from "util";
export default {
  data: function () {
    return {
      ranklist: [],
      kind: "有声书",
      num1: "",
    };
  },

  created() {
    this.num1 = this.$route.params.num;
    this.$emit("myevent", this.num1);
    console.log(this.kind);
    // 请求前3条
    this.$http
      .get("http://localhost:7001/getAllAlbumByKind", {
        params: {
          kind: this.kind,
        },
      })
      .then((res) => {
        this.ranklist = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    follow:function() {
      console.log(this.GetCookie("user"));
      // axios.get("/http://127.0.0.1:7001/getAllAlbumByKind",{

      // }).then(res =>{

      // }).catch(err =>{

      // })
    },

    GetCookie:function(key) {
      let getCookie = document.cookie.replace(/[ ]/g, ""); //获取cookie，并且将获得的cookie格式化，去掉空格字符
      let arrCookie = getCookie.split(";"); //将获得的cookie以"分号"为标识 将cookie保存到arrCookie的数组中
      let tips; //声明变量tips
      for (let i = 0; i < arrCookie.length; i++) {
        //使用for循环查找cookie中的tips变量
        let arr = arrCookie[i].split("="); //将单条cookie用"等号"为标识，将单条cookie保存为arr数组
        if (key == arr[0]) {
          //匹配变量名称，其中arr[0]是指的cookie名称，如果该条变量为tips则执行判断语句中的赋值操作
          tips = arr[1]; //将cookie的值赋给变量tips
          break; //终止for循环遍历
        }
      }
      return tips
    },

  }
};
</script>



<style scoped="scoped">
i {
  font-style: normal;
}
.rank-list {
  padding-top: 50px;
}
.list-item {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  height: 180px;
  display: flex;
  padding: 20px;
  border-bottom: 1px solid rgb(226, 225, 225);
}
.list-num {
  display: inline-block;
  height: 100%;
  line-height: 180px;
  font-size: 20px;
  color: #40404c;
  padding-right: 20px;
}
img {
  width: 140px;
  height: 140px;
  border-radius:5px;
}
.bofang-Icon {
  display:none;
  width: 70px;
  height: 70px;
  border-radius:5px;
  position:absolute;
  left: 87px;
  top: 55px;
  background-image:url("../assets/img/play2.png");
  background-repeat: no-repeat;
  background-size: contain;
  opacity: 0.95;
}
.list-item:hover {
  cursor: pointer;
}
.list-item:hover .bofang-Icon {
  display:inline-block;
}

.list-right {
  width: 890px;
  padding-left: 20px;
}
.list-right i {
  font-size: 12px;
  color: #a3a3ac;
  margin-right: 20px;
}
.list-album-name {
  font-size: 20px;
  color: #40404c;
  margin-bottom: 5px;
}
.tubiao {
  font-size: 10px;
  margin-right: 2px;
}

.item-inf {
  font-size: 14px;
  color: #72727b;
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.list-right-foot {
  height: 40px;
  line-height: 40px;
  margin-top: 20px;
  display: flex;
}
.latest-audio {
  width: 640px;
  font-size: 14px;
  color: #a3a3ac;
  
}
.detailed-album,
.album-not-follow,
.album-follow {
  width: 96px;
  height: 40px;
  text-align: center;
  line-height:40px;
  font-size: 14px;
  border-radius: 20px;
}
.detailed-album {
  background: #a3a3ac1a;
  color: #40404c;
  margin-right: 20px;
}

.album-not-follow {
  /* display:none; */
  background: #d2f2f3;
  color: #4e8deb;
}
.album-follow {
  display:none;
  background: #a3a3ac1a;
  color: #a3a3ac;
}
</style>