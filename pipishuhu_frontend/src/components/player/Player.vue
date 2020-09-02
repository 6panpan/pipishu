<template>
    <div class="player">
        <div class="player_disk">
            <disk />
        </div>
        <div class="player_control">
            <control />
        </div>
        <div class="player_progress">
            <progress-bar />
        </div>
    </div>
</template>

<script>
import Disk from "./Disk.vue";
import Control from "./Control.vue";
import ProgressBar from "./ProgressBar.vue";

export default {
    //import引入的组件需要注入到对象中才能使用
    components: {
        Disk,
        Control,
        ProgressBar,
    },
};
</script>
<style lang="scss" scoped>
.player {
    position: absolute;
    left: 10px;
    bottom: 25px;
    display: flex;
    width: 400px;
    height: 50px;
    border-radius: 8px;
    background-color: white;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12), 0 20px 20px rgba(95, 23, 101, 0.2);
}
.player_disk {
    flex: 1.2;
    padding-left: 40px;
}
.player_control {
    flex: 2;
    padding: 24px 0;
    padding-right: 24px;
}
.player_progress {
    position: absolute;
    left: 18px;
    right: 18px;
    top: 0px;
    bottom: 0px;
    z-index: -1;
}
</style>
