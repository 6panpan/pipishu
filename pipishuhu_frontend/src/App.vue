<template>
  <div id="app">
    <div id="nav">
      <ul class="myul">
        <li>
          <router-link to="/">
            <img class="pipishuLogo" src="@/assets/img/pipishuLogo.png" />
          </router-link>
        </li>
        <li>
          <router-link to="/my">我的</router-link>
        </li>
        <li>
          <router-link to="/download">APP下载</router-link>
        </li>
        <li>
          <router-link to="/search" tag="input">搜索框</router-link>
        </li>
        <li>
          <router-link to="/zhubo">用户头像:加img标签</router-link>
        </li>
      </ul>
    </div>
    <router-view />
  </div>
</template>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  border-bottom: 2px solid rgb(218, 218, 218);
  box-shadow: 1px 5px 10px rgba(250, 250, 250, 1);
  a {
    color: #2c3e50;
    font-size: 25px;
    text-decoration: none;

    &.router-link-exact-active {
      color: #3cced0;
    }
  }
}
.pipishuLogo {
  height: 30px;
}
.router-link-active {
  line-height: 30px;
}
#nav router-link {
  float: left;
}
.myul {
  overflow: hidden;
  list-style: none;
  display: inline-block;
}

.myul li {
  float: left;
  padding-right: 40px;
}
</style>
