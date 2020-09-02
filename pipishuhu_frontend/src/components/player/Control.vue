<template>
    <div class="control" :class="{ control__playing: true }">
        <div class="control_btn control_btn__side" @click="handlePrev">
            <i class="el-icon-d-arrow-left" />
        </div>
        <div class="control_btn" @click="handlePlay">
            <span class="el-icon-video-play" />
        </div>
        <div class="control_btn control_btn__side" @click="handleNext">
            <i class="el-icon-d-arrow-right" />
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { player } from "../../play.js";

export default {
    //import引入的组件需要注入到对象中才能使用
    components: {
        ...mapState(["isPlaying"]),
    },
    data() {
        //这里存放数据
        return {};
    },
    //监听属性 类似于data概念
    computed: {},
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
    },
};
</script>
<style lang="scss" scoped>
.control {
    position: relative;
    top: -21px;
    display: flex;
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
}
.control_btn:hover {
    background-color: #3cced040;
    color: #0d7778;
}
.control_btn__side {
    font-size: 28px;
}
</style>
