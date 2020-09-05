<template>
    <div class="control" :class="{ control__playing: true }">
        <audio id="audio" controls style="display:none;">
            <source :src="$store.state.currentSrc" type="audio/mpeg" />
        </audio>
        <!-- @click="handlePrev" -->
        <div class="control_btn control_btn__side">
            <i class="el-icon-d-arrow-left" />
        </div>
        <!-- @click="handlePlay" -->
        <div class="control_btn" @click="audioHandle">
            <span id="audioBtn" class="el-icon-video-play" />
        </div>
        <!-- @click="handleNext" -->
        <div class="control_btn control_btn__side">
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
        audioPlay() {
            // let audio = document.getElementById("audio");
            // let audioBtn = document.getElementById("audioBtn");
            audio.play();
            console.log("播放" + audio.play);
            audioBtn.className = "el-icon-video-pause";
        },
        audioPause() {
            // let audio = document.getElementById("audio");
            // let audioBtn = document.getElementById("audioBtn");
            audio.pause();
            console.log("暂停" + audio.paused);
            audioBtn.className = "el-icon-video-play";
        },
        audioHandle() {
            let audio = document.getElementById("audio");
            let audioBtn = document.getElementById("audioBtn");
            console.log(audio);

            audioBtn.onclick = () => {
                if (audio.paused) {
                    this.audioPlay();
                    return;
                }
                if (audio.play) {
                    this.audioPause();
                }
            };
        },
        // handlePlay() {
        //     if (!player.isEmpty) {
        //         if (!this.isPlaying) {
        //             player.play();
        //         } else {
        //             player.pause();
        //         }
        //     }
        // },
        // handlePrev() {
        //     if (this.isPlaying) {
        //         player.prev();
        //     }
        // },
        // handleNext() {
        //     if (this.isPlaying) {
        //         player.next();
        //     }
        // },
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
