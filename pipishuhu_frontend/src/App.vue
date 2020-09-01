<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">发现</router-link> | <router-link to="/my">我的</router-link> |
            <router-link to="/download">APP下载</router-link> |
            <router-link to="/search" tag="input">搜索框</router-link> |

            <router-link to="/zhubo">用户头像:加img标签</router-link>
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
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
