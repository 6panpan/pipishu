import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        songs: [
            {
                id: 0,
                name: "7rings ",
                src: "../assets/audio/7rings.mp3",
            },
            {
                id: 1,
                name: "Formidable Enemy",
                src: "../assets/audio/Formidable Enemy.mp3",
            },
            {
                id: 2,
                name: "Electric Romeo",
                src: "../assets/audio/Electric Romeo.mp3",
            },
            {
                id: 3,
                name: "Have A Nice Day",
                src: "../assets/audio/Have A Nice Day.mp3",
            },
        ],
        currentIndex: 0,
        currentSrc: "../assets/audio/7rings.mp3",
        activeClass: "active",
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {},
});
