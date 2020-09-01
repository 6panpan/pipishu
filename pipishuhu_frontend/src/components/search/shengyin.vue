<template>
  <div id="containerr">
    <div id="box">
      <div id="audioInf">
        <img :src="item.albumUrl" alt />
        <div>
          <div class="hoverColor audioName">{{item.audio_name}}</div>
          <div class="hoverColor albumName">{{item.albumName}}</div>
          <p>{{item.albumNickname}}  <i class="el-icon-service"></i>{{item.amount}}</p>
        </div> 
      </div> 
      <span>{{item.time.slice(0,10)}}</span>
    </div>

    <div class="line"></div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {};
  },
  props:["item"]
};
</script>

<style scoped>
#containerr {
  margin-bottom: 20px;
  font-size: 14px;
}
#box {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
#audioInf {
  display: flex;
  justify-content: space-between;
}
img {
  width: 100px;
  border-radius: 50%;
  margin-right: 16px;
}
.audioName {
  font-weight: bolder;
}
.hoverColor:hover {
  color: #3cced0;
}
.albumName {
  color: #a3a3ac;
}
.line {
  width: 100%;
  height: 2px;
  background-color: rgb(236, 236, 236);
  margin-top: 20px;
}
</style>