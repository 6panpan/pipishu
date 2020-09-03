<template>
  <div>
    <div class="head">
      <div v-if="userinf[0]">
        <img  class="headimg" :src="userinf[0].userimg" alt />
        <div class="headinf1">
          <p>{{userinf[0].nickname}}</p>
          <span>{{userinf[0].userintr}}</span>
        </div>
        <div class="headinf2">
          <el-button type="primary" round>+关注</el-button>
        </div>
      </div>
    </div>
    <div class="left">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="主页" name="first">
           <div class="leftbox">
             <div class="albinf" v-for="item in userAlbum" :key="item.id"  >
               <img :src="item.album_url" alt="">
               <p>{{item.album_name}}</p>
             </div>
           </div>
           
           <div class="rightbox" v-if="userinf">
             <p>TA的资料</p><hr>
             <!-- <p ><i class="el-icon-user"></i> {{userinf[0].nickname}}</p> -->
             <!-- <p v-if="follower" class="el-icon-s-custom">{{follower[0]['count(ufans_id)']}}</p> -->

           </div>
        </el-tab-pane>
        <el-tab-pane label="专辑" name="second"></el-tab-pane>
        <el-tab-pane label="关注" name="third"></el-tab-pane>
        <el-tab-pane label="粉丝" name="fourth"></el-tab-pane>
      </el-tabs>
      <router-view></router-view>
    </div>
    <div class="bottombox">
      
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      activeName: "first",
      userinf: [],
      userAlbum:[],
      follower:[]
    };
  },
  created() {
    console.log(this.$route.params.u_id);
    this.getAnuserInf();
    this.getUserAlbum()
  },
  methods: {
    handleClick(el) {
      console.log(el.label);
      let userId = this.$route.params.u_id;
      let path;
      let key = el.label;
      switch (key) {
        case "主页":
          path = `/zhubo/${userId}`;
          break;
        case "专辑":
          path =  `/zhubo/${userId}/userAlbum`;
          break;
        case "关注":
          path =  `/zhubo/${userId}/userfollow`;
          break;
        case "粉丝":
          path =  `/zhubo/${userId}/userfans`;
          break;

        default:
          break;
      }
      if (path) {
        this.$router.push(path);
      }
    },
    getAnuserInf() {
      this.$http
        .get("http://localhost:7001/getAnuserInf", {
          params: {
            user_id: this.$route.params.u_id,
          },
        })
        .then((res) => {
          this.userinf = res.data;
          console.log(this.userinf);
        })
        .catch((err) => {
          console.log(222);
        });
    },
    getUserAlbum(){
      console.log(this.$route.params.u_id);
        this.$http
        .get("http://localhost:7001/getUserAlbum", {
          params: {
            u_id: this.$route.params.u_id,
          },
        })
        .then((res) => {
          this.userAlbum=res.data
          console.log(this.userAlbum);
        //   console.log(this.userinf);
        })
        .catch((err) => {
          console.log(222);
        });
    },
     getfollow(){
        console.log(this.list[0].u_id);
        this.$http
        .get("http://localhost:7001/getfollow", {
          params: {
            ustar_id: this.list[0].u_id,
          },
        })
        .then((res) => {
            // console.log(res.data);
          this.follower=res.data;
          
        //   console.log(this.userinf);
        })
        .catch((err) => {
          console.log(222);
        });
    },
  },
};
</script>

<style scoped>
.head {
  width: 98vw;
  height: 300px;
  /* background-color: rosybrown; */
  background-image: url("https://css1.xmcdn.com/css/img/mycenter_bg/mycenter_bg_3.jpg");
  position: relative;
}
.headimg {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  position: absolute;
  top: 170px;
  left: 320px;
}
.headinf1 {
  position: absolute;
  top: 195px;
  left: 450px;
  font-size: 22px;
  /* font-weight: bold; */
  color: white;
  width: 700px;
  height: 100px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.albinf p{
  /* display: inline-block; */
  width: 140px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.headinf2 {
  position: absolute;
  top: 200px;
  left: 1200px;
}
.left {
  /* position: absolute; */
  left: 320px;
  margin-top: 20px;
  margin-left: 300px;
  width: 65vw;
  height: 600px;
  display: block;
}
.leftbox{
  width: 700px;
  /* height: 570px; */
  display: flex;
  flex-wrap: wrap;
  /* overflow: hidden; */
}
.albinf{
  margin: 5px 15px 9px;
}
.albinf img{
  width: 140px;
  height: 140px;
  border-radius: 5px;
}
.rightbox{
  width: 250px;
  height: 300px;
  background-color: #ccc;
  position: absolute;
  top:0px;
  left: 750px;
}
.bottombox{
  width: 400px;
  height: 600px;
  background-color: cadetblue;
}
</style>