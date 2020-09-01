<template>
  <div id="container">
    <toptypeof></toptypeof>
    <p id="result">
      共
      <span id="number">{{myAudio.length}}</span> 个搜索记录
    </p>
    <div class="line"></div>

    <div id="album">
      <shengyin :item="item" v-for="item in myAudio" :key="item.id"></shengyin>
    </div>
  </div>
</template> 

<script>
import toptypeof from "./toptypeof.vue";
import shengyin from "./shengyin.vue";
export default {
  data: function () {
    return {
      list: [],
      mylist: [],
      userArr: [],
      myuser: [],
      audioAll: [],
      myAudio: [],
      shengyinList: [],
    };
  },
  components: {
    toptypeof,
    shengyin,
  },
  created() {
    this.$http
      .get("http://localhost:7001/getUserInf", {})
      .then((res) => {
        this.userArr = res.data;
        this.myuser = this.userArr.filter((el) => {
          return el.nickname.indexOf(`${this.$route.params.kw}`) != -1;
        });
        this.getAllAlbum();
        this.getAudio();
      })
      .catch((err) => {});
  },
  methods: {
    // 取出全部专辑
    getAllAlbum() {
      this.$http
        .get("http://localhost:7001/getAllAlbum", {})
        .then((res) => {
          // console.log(res.data)
          this.list = res.data;

          //给专辑添加所属用户名
          this.list.forEach((el1) => {
            this.userArr.forEach((el2) => {
              if (el1.u_id == el2.user_id) {
                el1.nickname = el2.nickname;
              }
            });
          });

          //专辑名称有关键字
          this.mylist = this.list.filter((el) => {
            return el.album_name.indexOf(`${this.$route.params.kw}`) != -1;
          });
          //专辑发布者有关键字
          this.mylist = this.mylist.concat(
            this.list.filter((el) => {
              return el.nickname.indexOf(`${this.$route.params.kw}`) != -1;
            })
          );
        })
        .catch((err) => {
          alert("axios请求失败");
        });
    },

    getAudio() {
      this.$http
        .get("http://localhost:7001/getAudio", {})
        .then((res) => {
          this.audioAll = res.data;

          // console.log(this.list);
          // 给每条音频对象加上所属专辑名和专辑封面,专辑发布者
          this.audioAll.forEach((el1) => {
            this.list.forEach((el2) => {
              if (el1.a_id == el2.album_id) {
                el1.albumName = el2.album_name;
                el1.albumUrl = el2.album_url;
                el1.albumNickname = el2.nickname;
              }
            });
          });

          // 音频名有关键字的音频
          this.myAudio = this.audioAll.filter((el) => {
            return el.audio_name.indexOf(`${this.$route.params.kw}`) != -1;
          });
        })
        .catch((err) => {
          alert("axios请求失败");
        });
    },
  },
};
</script>

<style scoped>
#container {
  width: 800px;
}
p {
  padding: 10px 0;
}
#number {
  color: #3cced0;
}
#album {
  margin-top: 20px;
}
.line {
  height: 2px;
  background-color: rgb(224, 224, 224);
}
</style>