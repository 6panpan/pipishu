<template>
  <div>
    <div class="uploading">
      <div class="uploading-title">
        上传作品
        <span class="el-icon-folder-add upload-logo"></span>
      </div>
      <div class="no-uploading">
        <div @click="uploadingAudio" class="no-uploading-logo" v-if="num==1">
          <div class="upload-box-one upload-box"></div>
          <div class="upload-box-two upload-box"></div>
          <div class="upload-box-three upload-box"></div>
          <div class="upload-box-four upload-box"></div>
        </div>

        <div v-else class="uploa-audio">
          <!-- 添加专辑，专辑添加音频 -->
          <p>
            音频名称：
            <input type="text" id="audio-name" />
          </p>
          <p>
            音频简介：
            <input type="text" id="audio-inf" />
          </p>
          <p>
            选择专辑:
            <select id="selectFrame">
              <option v-for="(item, index) in al_list" :key="index" value="">{{item.album_name}}</option>
            </select>
          </p>
          <p>
            选择音频：
            <input type="file" id="choose-audio" />
          </p>
          <p class="upload-btn-p">
            <span class="upload-btn">上传商品</span>
          </p>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>
<script>
// import rankItem from "./rankItem.vue";
import { log } from "util";
export default {
  data: function () {
    return {
      num: 0,
      id:0,
      // 用户收藏的的专辑id
      al_idALL:[],
      // 用户收藏的的专辑的信息
      al_list:[]
    };
  },
  created() {
      this.id = this.GetCookie("id");
      this.getUserCollect(this.id);
  },
  methods: {
    uploadingAudio() {},

    getUserCollect(id) {
      this.$http
        .get("http://127.0.0.1:7001/getAllUserCollect", {
          params: {
            us_id: id
          },
        })
        .then((res) => {
          console.log(res.data);
          for (let i = 0; i < res.data.length; i++) {
              this.al_idALL.push( res.data[i].al_id);
          }
          this.getUserCollectName(this.al_idALL);
        })
        .catch((err) => {
          console.log(err);
          
        });
    },

    getUserCollectName(al_id) {
        console.log(al_id.toString());
        this.$http
        .get("http://127.0.0.1:7001/getAlbumByCollect", {
          params: {
            al_id: al_id.toString()
          },
        })
        .then((res) => {
          console.log(res.data);
          for (let i = 0; i < res.data.length; i++) {
              this.al_list.push( res.data[i]);
          }
          console.log(this.al_list);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // 获取缓存
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
  },
  components: {
    // rankItem: rankItem,
  },
};
</script>

<style scoped="scoped">
.uploading {
  width: 900px;
  height: 400px;
  font-size: 24px;
  /* display: flex; */
  margin: 30px auto;
  color: #3cced0;
  border: 1px solid rgb(220, 218, 218);
  padding: 36px;
}
.uploading .uploading-title {
  height: 50px;
  border-bottom: 1px dashed rgb(220, 218, 218);
}
.upload-logo {
  margin-left: 20px;
}
.no-uploading {
  width: 900px;
  height: 380px;
  position: relative;
}
.no-uploading-logo {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 220px;
  box-sizing: border-box;
  padding: 40px;
  /* background-color:#ccc; */
  border: 1px dashed rgb(182, 182, 182);
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -110px;
  margin-left: -150px;
}
.upload-box {
  display: inline-block;
  box-sizing: border-box;
  width: 109px;
  height: 69px;
}
.upload-box-one {
  border-right: 1px dashed rgb(182, 182, 182);
  border-bottom: 1px dashed rgb(182, 182, 182);
}
.upload-box-two {
  border-bottom: 1px dashed rgb(182, 182, 182);
}
.upload-box-three {
  border-right: 1px dashed rgb(182, 182, 182);
}
.no-uploading-logo:hover {
  cursor: pointer;
}

/* 上传 */
.uploa-audio {
  width: 400px;
  margin: 50px auto;
  font-size: 18px;
  color: #aaa;
}
.select-album {
  font-size: 18px !important;
  color: #aaa !important;
}
.uploa-audio p {
  margin: 20px 0px;
}
select {
  width: 220px;
  margin-left: 13px;
}
.upload-btn {
  display: inline-block;
  color: #fff;
  width: 120px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 20px;
  background-color: #3cced0;
  margin-left: 155px;
}
</style>