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

        <div id="attention" @click="attention">关注</div>
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
    attention(el) {
      if (!this.changeAttention) {
        el.target.innerHTML = "已关注";
        el.target.style.color = "#b9b9b9";
        el.target.style.border = "1px solid #b9b9b9";
        this.changeAttention = !this.changeAttention;
        
      } else {
        el.target.innerHTML = "关注";
        el.target.style.color = "#3cced0";
        el.target.style.border = "1px solid #3cced0";
        this.changeAttention = !this.changeAttention;
      }
    },
  },
};
</script>

<style scoped>
#userItem {
  margin-bottom: 20px;
  font-size: 14px;
}
#userTop {
  display: flex;
  justify-content: space-between;
}
#userImg {
  width: 80px;
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