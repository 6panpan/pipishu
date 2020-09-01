<template>
  <div class="rank-list">
    <div class="list-item" v-for="(item,index) in ranklist" :key="index">
      <span class="list-num">{{index+1}}</span>
      <img :src="item.album_url" />
      <span class="list-right">
        <div class="list-album-name">{{item.album_name}}</div>
        <i class="list-kind">{{item.kind}}</i>
        <i class="list-nickname iconfont iconyonghu">{{item.nickname}}</i>
        <i class="list-album-amount">
          <span class="tubiao iconfont icontingge"></span>
          <span class="tubiao" v-if="item.album_amount.toString().length<5">{{item.album_amount}}</span>
          <span class="tubiao" v-else-if="item.album_amount.toString().length<9">{{(item.album_amount/10000).toFixed(2)+"万"}}</span>
          <span class="tubiao" v-else-if="item.album_amount.toString().length>8">{{(item.album_amount/100000000).toFixed(2)+"亿"}}</span>

        </i>
      </span>
      <span>
        <span></span>
        <span></span>
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
      kind: "儿童",
      num1: "",
    };
  },
  // props: ["kind"],
  created() {
    this.num1 = this.$route.params.num;
    this.$emit("myevent", this.num1);
    console.log(this.kind);
    // 请求前3条
    this.$http
      .get("http://127.0.0.1:7001/getAllAlbumByKind", {
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
  width: 100%;
  height: 150px;
  display: flex;
  padding: 20px;
  border-bottom: 1px solid rgb(226, 225, 225);
}
.list-num {
  display: inline-block;
  height: 100%;
  line-height: 150px;
  font-size: 20px;
  color: #40404c;
  padding-right: 20px;
}
img {
  width: 140px;
  height: 140px;
}

.list-right {
  width: 620px;
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
/* .list-nickname::before {
  content: "\e6d1";
} */
</style>