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

</style>
