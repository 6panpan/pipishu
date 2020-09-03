<template>
    <div class="control" :class="{ control__playing: true }">
        <audio :src="$store.state.currentSrc" style="display:none;" ref="audio"></audio>
        <div class="control_btn control_btn__side" @click="handlePrev">
            <i class="el-icon-d-arrow-left" />
        </div>
        <div class="control_btn" @click="handlePlay">
            <span class="el-icon-video-play" />
        </div>
        <div class="control_btn control_btn__side" @click="handleNext">
            <i class="el-icon-d-arrow-right" />
        </div>
        <div class="control_btn" @click="showlistchange">
            <i class="el-icon-s-unfold" />
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { player } from "../../play.js";

export default {
    props: ["showlist"],
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {};
    },
    //监听属性 类似于data概念
    computed: {
        ...mapState(["isPlaying"]),
    },
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        handlePlay() {
            if (!player.isEmpty) {
                if (!this.isPlaying) {
                    player.play();
                } else {
                    player.pause();
                }
            }
        },
        handlePrev() {
            if (this.isPlaying) {
                player.prev();
            }
        },
        handleNext() {
            if (this.isPlaying) {
                player.next();
            }
        },
        showlistchange() {
            if (this.showlist === false) {
                this.$emit("listchanged", true);
            } else {
                this.$emit("listchanged", false);
            }
        },
    },
};
</script>
<style lang="scss" scoped>
.control {
    background-color: white;
    position: relative;
    top: -21px;
    right: -16px;
    display: flex;
    z-index: 10;
}
.control_btn {
    height: 40px;
    display: flex;
    margin: 2px;
    align-items: center;
    justify-content: center;
    flex: 1;
    border-radius: 6px;
    color: #3cced0;
    font-size: 32px;
    transition: background-color 0.6s ease;
    z-index: 10;
}
.control_btn:hover {
    background-color: #3cced040;
    color: #0d7778;
}
.control_btn__side {
    font-size: 28px;
}
</style>
