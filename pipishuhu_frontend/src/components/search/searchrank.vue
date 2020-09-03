<template>
  <div id="box" v-if="ranklist.length">
    <slot></slot>

    <div class="rankBox">
      <div class="rankitem" v-for="(item,index) in ranklist" :key="item.id">
        <div class="bothOrder">{{index+1}}</div>
        <span>{{item.album_name}}</span>
      </div>
    </div>
  </div>
</template> 
 
<script>
export default {
  props: {
    ranklist: {
      default: function () {
        return [];
      },
    },
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
#box {
  width: 220px;
}

.rankitem {
  margin-bottom: 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.bothOrder {
  width: 20px;
  border-radius: 4px;
  margin-right: 10px;
  text-align: center;
  float: left;
}

.rankBox .rankitem:nth-child(1) div {
  background-color: rgb(250, 0, 0);
  color: white;
}

.rankBox .rankitem:nth-child(2) div {
  background-color: rgb(250, 133, 0);
  color: white;
}

.rankBox .rankitem:nth-child(3) div {
  background-color: rgb(250, 204, 0);
  color: white;
}
</style>