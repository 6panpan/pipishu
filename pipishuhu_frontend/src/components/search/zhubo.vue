<template>
  <div>
    <div id="userItem" v-for="item in user" :key="item.id">
      <!-- {{item.follow}} -->
      <div id="userTop">
        <div @click="tousermain(item.user_id)">
          <img id="userImg" :src="item.userimg" alt />
          <div id="userInf">
            <p class="hoverColor">{{item.nickname}}</p>
            <span>性别：{{item.sex}}</span>
          </div>
        </div>

        <div id="attention" @click="attention(item.user_id)">关注</div>
        <!-- <div
          v-if="item.follow===1"
          id="delAttention"
          @click="delAttention(item.user_id,item.follow)"
        >已关注</div>
        <div
          v-if="item.follow===0"
          id="addAttention"
          @click="attention(item.user_id,item.follow)"
        >关注</div>-->
      </div>
      <div id="line"></div>
    </div>
  </div>
</template>
 
<script>
import { log } from "util";
export default {
  data: function () {
    return {
      list: [],
      changeAttention: false,
      id: "",
      myuser: "",
    };
  },
  props: ["user"],
  created() {
    this.id = this.getByKey("user_id");
    this.getuserInf();
  },
  watch: {
    myuser: function () {},
  },
  methods: {
    // 取出用户的cookie具体值
    getByKey(key) {
      let name = key + "=";
      let ca = document.cookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return null;
    },

    tousermain(user_id){
      this.$router.push(`/zhubo/${user_id}/userindex`)        
    },
    // 存在bug,有问题
    attention(ustar_id) {
      let el = window.event;
      if (this.id) {
        if (!this.changeAttention) {
          this.$http
            .post("http://localhost:7001/addfollow", {
              ustar_id: ustar_id,
              ufans_id: this.id,
            })
            .then((res) => {
              if (res.data === 1) {
                el.target.innerHTML = "已关注";
                this.changeAttention = !this.changeAttention;
              }
            })
            .catch((err) => {
              console.log("axios请求失败");
            });
        } else {
          this.$http
            .post("http://localhost:7001/delfollow", {
              ustar_id: ustar_id,
              ufans_id: this.id,
            })
            .then((res) => {
              if (res.data === 1) {
                el.target.innerHTML = "关注";
                this.changeAttention = !this.changeAttention;
              }
            })
            .catch((err) => {
              console.log("axios请求失败");
            });
        }
      } else {
        alert("请先登录");
      }
    },
 
    // 获取符合关键字的用户信息
    getuserInf() {
      this.$http
        .get("http://localhost:7001/getUserInf", {})
        .then((res) => {
          this.userArr = res.data;
          this.myuser = this.userArr.filter((el) => {
            return el.nickname.indexOf(`${this.$route.params.kw}`) != -1;
          });

          this.myuser.forEach((el) => {
            el.follow = 0;
          });

          if (this.id) {
            // 已经登录，取出他关注的主播
            this.getStar();
          }
        })
        .catch((err) => {});
    },

    // 获取用户的关注信息
    getStar() {
      this.$http
        .get("http://localhost:7001/getStar", {
          params: {
            ufans_id: this.id,
          },
        })
        .then((res) => {
          // console.log(res.data);
          for (let i = 0; i < res.data.length; i++) {
            for (let j = 0; j < this.myuser.length; j++) {
              if (res.data[i].ustar_id === this.myuser[j].user_id) {
                this.myuser[j].follow = 1;
              }
            }
          }
        })
        .catch((err) => {
          console.log("axios请求失败");
        });
    },

    // 先放着，后面再来完善
    // 添加关注
    addattention(ustar_id, follow) {
      if (this.id) {
        this.$http
          .post("http://localhost:7001/addfollow", {
            ustar_id: ustar_id,
            ufans_id: this.id,
          })
          .then((res) => {
            console.log("添");
            if (res.data === 1) {
              follow = 1;
            }
          })
          .catch((err) => {
            console.log("axios请求失败");
          });
      } else {
        // 未登录，弹出登录框
        alert("请登录");
      }
    },
    // 取消关注
    delAttention(ustar_id, follow) {
      this.$http
        .post("http://localhost:7001/delfollow", {
          ustar_id: ustar_id, //被关注者id
          ufans_id: this.id,
        })
        .then((res) => {
          // console.log(res.data);
          if (res.data === 1) {
            follow = 0;
          }
        })
        .catch((err) => {
          console.log("axios请求失败");
        });
    },
  },
};
</script>

<style scoped>
#userItem {
  margin-bottom: 20px;
  font-size: 14px;
  cursor: pointer;
}
#userTop {
  display: flex;
  justify-content: space-between;
}
#userImg {
  width: 60px;
  border-radius: 50%;
  margin-right: 16px;
}
#userInf {
  display: inline-block;
}

#attention {
  height: 20px;
  padding: 10px;
  color: #3cced0;
  border: 1px solid #3cced0;
}
/* #addAttention {
  height: 20px;
  padding: 10px;
  color: #3cced0;
  border: 1px solid #3cced0;
}

#delAttention {
  height: 20px;
  padding: 10px;
  color: #c2c2c2;
  border: 1px solid #c2c2c2;
} */
.hoverColor {
  font-weight: bolder;
}
.hoverColor:hover {
  color: #3cced0;
}
#line {
  width: 100%;
  height: 2px;
  background-color: rgb(236, 236, 236);
  margin-top: 20px;
}
</style>