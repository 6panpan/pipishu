<template>
  <div id="my-nav">
    <router-link to="/my/subscribed">订阅</router-link>
    <router-link to="/my/listened">听过</router-link>
    <router-link to="/my/buy">已购</router-link>
    <router-link to="/my/like">喜欢</router-link>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {
    if (!document.cookie) {
      this.$router.push("/");
    }
  },
};
</script>
<style lang="scss" scoped>
#my-nav{
  position: relative;
  top: 50px;
  left: 200px;
    a {
    color: #2c3e50;
    font-size: 20px;
    text-decoration: none;
    margin-left: 30px;

    &.router-link-exact-active {
      color: #3cced0;
    }
  }
}
</style>
