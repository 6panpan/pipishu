<template>
  <div class="contanier" v-if="list[0]">
    <div class="title" >
      <a href @click="tomain">首页</a>>{{list[0].kind}}>{{list[0].album_name}}
    </div>
    <div class="contanier2">
      <div class="topbox">
        <div class="topbox-left">
          <img class="albimg" :src="list[0].album_url" alt />
          <img :src="afterimg" alt />
        </div>
        <div class="topbox-right">
          <div class="inf">
            <b>{{list[0].album_name}}</b>
            <p><i class="el-icon-headset"></i>
            <span class="tubiao" v-if="list[0].album_amount.toString().length<5">{{list[0].album_amount}}</span>
                  <span class="tubiao" v-else-if="list[0].album_amount.toString().length<9">{{(list[0].album_amount/10000).toFixed(2)}}万</span>
                  <span class="tubiao" v-else-if="list[0].album_amount.toString().length>=9">{{(list[0].album_amount/100000000).toFixed(2)}}亿</span>
            </p>
          </div>
          <div class="btn">
            <img src="../../assets/img/play1.png" />
            <el-button class="celbtn" round>收藏</el-button>
          </div>
        </div>
      </div>
      <hr />
      <div class="bottombox">
        <el-collapse v-model="activeNames">
          <el-collapse-item title="简介" name="1">
            <span>{{list[0].intro}}</span>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    // console.log(this.$route.params.album_id);
    this.getoneAlbum();
  },
  data: function () {
    return {
      list: [],
      activeNames: ["1"],
      afterimg:
        "https://s1.xmcdn.com/yx/ximalaya-web-static/last/dist/images/cover-right_dd0ab25.png",
      
    };
  },
  methods: {
    tomain() {
      return this.$route.push("/");
    },
    //  handleChange(val) {
    //     console.log(val);
    //   },
    getoneAlbum() {
      this.$http
        .get("http://localhost:7001/getoneAlbum", {
          params: {
            album_id: this.$route.params.album_id,
          },
        })
        .then((res) => {
          this.list = res.data;
          console.log(this.list[0]);
        })
        .catch((err) => {
          console.log(222);
        });
    },
  },
};
</script>

<style scoped>
a{
  text-decoration: none;
}
a:hover{
  color: #3cced0;
}
.title {
  margin: 10px 10px;
}
.contanier {
  width: 780px;
}
.contanier2 {
  margin: 40px 30px 0 30px;
}
.topbox {
  width: 719px;
  height: 202px;
  /* background-color: #ccc; */
}
.albimg {
  width: 177px;
  height: 177px;
  border-radius: 5px;
}
.topbox-left {
  width: 250px;
  height: 210px;
  float: left;
}
.topbox-right {
  width: 458px;
  height: 198px;
  float: right;
}
.inf b {
  font-size: 20px;
}

.inf {
  padding-top: 10px;
  padding-bottom: 7px;
}
.inf p{
  padding-top: 23px;
}
.btn {
  padding-top: 35px;
}
.btn img {
  width: 50px;
  height: 50px;
}
.celbtn {
  background-color: #3cced0;
  opacity: 0.8;
  float: right;
  margin-right: 10px;
  width: 100px;
}
.bottombox {
  max-height: 500px;
  /* min-width: 500px; */
  width: 719px;
  background-color: #ccc;
  /* white-space: nowrap; */
  text-overflow: ellipsis;
  overflow: hidden;
}
.btn img:hover{
  cursor: pointer;
}
</style>