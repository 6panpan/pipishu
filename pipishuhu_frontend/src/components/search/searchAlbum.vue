<template>
  <div id="container">
    <toptypeof></toptypeof>
    <p>
      共
      <span id="number">{{mylist.length}}</span> 个搜索记录
    </p>
    <div class="line"></div>

    <div id="album">
      <albumitem :el="item" v-for="item in mylist" :key="item.id"></albumitem>
    </div>
  </div>
</template>
 
<script>
// import Bus from "../../Bus.js";
import toptypeof from "./toptypeof.vue";
export default {
  data: function () {
    return {
      mylist:[],
      userArr:[],
      myuser:[],
      list:[],

    };
  },
  components: {
    toptypeof,
  },
  created() {
    this.$http
      .get("http://localhost:7001/getUserInf", {})
      .then((res) => {
        // console.log(res.data)
        this.userArr = res.data;
        this.myuser = this.userArr.filter((el) => {
          return el.nickname.indexOf(`${this.$route.params.kw}`) != -1;
        });
        this.getAllAlbum();
      })
      .catch((err) => {alert(222)});
  },
  methods:{
    getAllAlbum() {
      this.$http
        .get("http://localhost:7001/getAllAlbum", {})
        .then((res) => {
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
          // console.log(this.mylist)
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
#number {
  color: #3cced0;
}
.line {
  height: 2px;
  background-color: rgb(224, 224, 224);
}
#album {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
}
</style>