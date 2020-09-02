<template>
  <div>
    <div id="userItem" v-for="item in user" :key="item.id">
      <div id="userTop">
        <div>
          <img id="userImg" :src="item.userimg" alt />
          <div id="userInf">
            <p class="hoverColor">{{item.nickname}}</p>
            <span>性别：{{item.sex}}</span>
          </div>
        </div>

        <div id="attention" @click="attention(item.user_id)">关注</div>
      </div>

      <div id="line"></div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      list: [],
      changeAttention: false,
    };
  },
  props: ["user"],
  created() {},
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
    attention(user_id) {
      // 于林平的登录成功，cookie值上传成功后，删掉下一句
      document.cookie = "user_id=3";
      let ufans_id = this.getByKey("user_id");
      console.log(ufans_id,user_id)
      // console.log(ufans_id)
      // console.log(window.event);
      let el = window.event;
      if (!this.changeAttention) {
        // 添加关注
        // 点击关注在cookie里获取点前用户的id，获取关注人的id
        // 把两个id值添加到粉丝表

        // console.log(user_id, ufans_id);
        this.$http
          .post("http://localhost:7001/addfollow", {
            ustar_id: user_id,
            ufans_id: ufans_id,
          })
          .then((res) => {
            // console.log(res.data);
            if (res.data === 1) {
              el.target.innerHTML = "已关注";
              el.target.style.color = "#b9b9b9";
              el.target.style.border = "1px solid #b9b9b9";
              this.changeAttention = !this.changeAttention;
            }
          })
          .catch((err) => {});
      } else {
        // 取消关注
        this.$http
          .post("http://localhost:7001/delfollow", {
            ustar_id: user_id,
            ufans_id: ufans_id,
          })
          .then((res) => {
            if (res.data === 1) {
              el.target.innerHTML = "关注";
              el.target.style.color = "#3cced0";
              el.target.style.border = "1px solid #3cced0";
              this.changeAttention = !this.changeAttention;
            }
          })
          .catch((err) => {});
      }
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