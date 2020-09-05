import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        songs: [
            {
                id: 0,
                name: "《夜色钢琴曲》杨花落尽子规啼1111111111",
                src:
                    "https://aod.cos.tx.xmcdn.com/group86/M03/1E/B8/wKg5IF72vT7Qx6XGABAl5XXVSS8817.m4a",
            },
            {
                id: 1,
                name: "今日说法",
                src:
                    "https://aod.cos.tx.xmcdn.com/group62/M08/E2/C4/wKgMZ10XalSTUIA4AIY_fqxrkIw813.m4a",
            },
            {
                id: 2,
                name: "我是小学生米小圈",
                src:
                    "https://aod.cos.tx.xmcdn.com/group21/M07/E1/9A/wKgJKFhaF1LB6La5ABf44Sux-Uw565.m4a",
            },
            {
                id: 3,
                name: "Have A Nice Day",
                src:
                    "https://aod.cos.tx.xmcdn.com/group86/M03/1E/B8/wKg5IF72vT7Qx6XGABAl5XXVSS8817.m4a",
            },
        ],
        currentIndex: 0,
        currentSrc:
            "https://aod.cos.tx.xmcdn.com/group86/M03/1E/B8/wKg5IF72vT7Qx6XGABAl5XXVSS8817.m4a",
        activeClass: "active",
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {},
});
