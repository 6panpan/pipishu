<template>
  <div class="login-w">
    <div class="loginwindow">
      <span @click="closelogin" class="el-icon-circle-close loginWindowClose"></span>
      <div class="loginwindow-top">
        <span @click="TZlogin">登录</span>/
        <span @click="TZregister">注册</span>
        <div class="loginMK" v-if="loginMK">
          账号：
          <input @keydown.enter="login" v-model="loginPhone" type="text" />
          <br />密码：
          <input @keydown.enter="login" v-model="loginPas" type="password" />
          <br />
          <span>{{ts}}</span>
          <br />
          <button @click="login">确认</button>
        </div>
        <div v-else class="RegisterMK">
          <img :src="mysrc" alt />
          <br />
          <input type="file" id="choose" />
          <br />
          <button @click="axiosupload">确认</button>
          <br />电话：
          <input @keydown.enter="register" type="text" v-model="RegisterPhone" />
          <br />密码：
          <input @keydown.enter="register" type="text" v-model="Registerpwd" />
          <br />昵称：
          <input @keydown.enter="register" type="text" v-model="Registername" />
          <br />
          <input @keydown.enter="register" type="radio" id="usersexMan" value="男" v-model="usersex" />
          <label for="usersexMan">男</label>
          <input @keydown.enter="register" type="radio" id="usersexWoman" value="女" v-model="usersex" />
          <label for="usersexWoman">女</label>
          <br />
          <span>{{Rts}}</span>
          <br />
          <button @click="register">注册</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginMK: true,
      loginPhone: "",
      loginPas: "",
      ts: "",
      Rts: "",
      mysrc: "",
      RegisterPhone: "",
      Registerpwd: "",
      Registername: "",
      usersexMan: true,
      usersexWoman: false,
      usersex: "",
    };
  },
  mounted() {
    if (this.GetCookie("user_id")) {
      console.log(1);
      this.$emit("myloginF");
    }
  },
  methods: {
    closelogin() {
      this.$emit("myloginF");
    },
    TZlogin() {
      this.loginMK = true;
    },
    TZregister() {
      this.loginMK = false;
    },
    login() {
      console.log(this.$http);
      this.$http
        .post("http://127.0.0.1:7001/login", {
          tel: this.loginPhone,
          pwd: this.loginPas,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.length < 1) {
            this.ts = "用户名或密码错误";
          } else {
            this.ts = "";
            document.cookie = `user=${res.data[0].tel}`;
            document.cookie = `user_id=${res.data[0].user_id}`;
            console.log(document.cookie);
            this.$router.go(0);
            this.$emit("myloginF");
          }
        });
    },
    GetCookie: function (key) {
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
      return tips;
    },
    register() {
      this.$http
        .post("http://127.0.0.1:7001/regist", {
          tel: this.RegisterPhone,
          pwd: this.Registerpwd,
          nickname: this.Registername,
          userimg: this.mysrc,
          sex: this.usersex,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.length < 1) {
            this.Rts = "用户名或密码错误";
          } else {
            this.Rts = "";
            this.$emit("myloginF");
            console.log(document.cookie, 1);
          }
        });
    },
    axiosupload() {
      let file = document.getElementById("choose").files[0];
      let formData = new FormData();
      formData.append("uploadFile", file, file.name);
      const config = {
        headers: {
          "Content-Type":
            "multipart/form-data;boundary=" + new Date().getTime(),
        },
      };
      this.$http
        .post("http://127.0.0.1:7001/upload", formData, config)
        .then((res) => {
          this.mysrc = res.data;
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
<style>
.login-w {
  width: 100%;
  height: 100%;
  background-color: rgba(127, 127, 127, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3000;
}
.loginwindow {
  width: 440px;
  height: 540px;
  margin: 0 auto;
  background-color: #fff;
  margin-top: 80px;
}
.loginwindow-top {
  text-align: center;
  font-size: 20px;
}
.loginwindow-top span {
  cursor: pointer;
}
.loginMK input {
  margin-top: 80px;
  height: 30px;
}
.loginMK button,
.RegisterMK button {
  margin-top: 80px;
  width: 230px;
  height: 50px;
  outline: none;
  border-color: #3cced0;
  border-radius: 5px;
  background-color: #3cced0;
  cursor: pointer;
  font-size: 18px;
  color: #fff;
}
.RegisterMK button {
  margin-top: 40px;
}
.RegisterMK input {
  margin-top: 20px;
}
.loginWindowClose {
  font-size: 30px;
  position: relative;
  left: 88%;
  top: 20px;
  cursor: pointer;
}
.RegisterMK img {
  width: 40px;
}
</style>